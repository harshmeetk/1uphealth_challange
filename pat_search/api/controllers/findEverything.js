const axios=require('axios');
const ResultList = require('../models/resultList');
const findEverything = async (req, res, next)=>
{

    let patId=await req.body.patId;
    let accessToken=req.body.accessToken;
    let skipVal = req.body.page;
    let url="https://api.1up.health/fhir/dstu2/Patient/" + patId + "/$everything?_skip=" + skipVal ;
    if(patId && accessToken)
    {

        let result={};
        try{
          let resultSet= await ResultList.findOne({accessToken: accessToken, patId: patId}, function (err,data)
          {
              if (err) console.log(err);
              // return data
          }).exec();
            console.log("data from db",resultSet );
            if(resultSet)
          {
              result=resultSet._doc.patientData;
          }
          else{

              resultSet = await axios.get(url, {
                  headers:{
                      Authorization: `Bearer ${accessToken}`
                  }
              });

              const newPatient =new ResultList({
                  accessToken: accessToken,
                  patId: patId,
                  patientData: resultSet.data
              });
              newPatient.save(function(err){
                  if(err){
                      console.log(err);
                  }});
              result=resultSet.data;
          }
        }
        catch (e) {
            console.log("error list is"+ e
            )
        }
        res.send(
            {
                success: 'true',
                message: 'patients retrieved successfully',
                patients:result
        });
    }
    else{
        console.log("patient not found")
    }
};
module.exports=findEverything;