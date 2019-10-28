const axios=require('axios');
const ResultList = require('../models/resultList');
const findEverything = async (req, res, next)=>
{

    let patId=await req.body.patId;
    let accessToken=req.body.accessToken;
    let skipVal = req.body.page;

    console.log("a",patId);
    console.log("a",accessToken);
    console.log("a",skipVal);

    let url="https://api.1up.health/fhir/dstu2/Patient/" + patId + "/$everything?_skip=" + skipVal ;
    if(patId && accessToken)
    {

        let result={};
        try{
          let resultSet= await ResultList.find({accessToken: accessToken, patId: patId}, function (err)
          {
              if (err) console.log(err);
          }).exec();
          //why is this returning an array ?????
          if(resultSet.length>0)
          {
              result=resultSet;
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
              result=resultSet;
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
                patients:result.data
        });
    }
    else{
        // create error list here
        console.log("patient not found")
    }
};
module.exports=findEverything;