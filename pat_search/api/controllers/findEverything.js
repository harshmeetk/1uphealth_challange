const axios=require('axios');
const ResultList = require('../models/resultList');
const constants = require("../../config/constants.json");

const findEverything = async (req, res, next)=>
{
    let patId=await req.body.patId;
    let accessToken=req.body.accessToken;
    let skipVal = req.body.page;
    let url="https://api.1up.health/fhir/dstu2/Patient/" + patId + "/$everything?_skip=" + skipVal ;
    let errors={};
    let result={};

    if(patId && accessToken)
    {
        try{
          let resultSet= await ResultList.findOne({accessToken: accessToken, patId: patId, page:skipVal}, function (err)
          {
              if (err) console.log(err);
              errors.DB_LOOKUP_ERROR = constants.DB_LOOKUP_ERROR
          }).exec();
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
                  page:skipVal,
                  patientData: resultSet.data
              });
              newPatient.save(function(err){
                  if(err){
                      errors.DB_ERROR_INSERTION_ERROR = constants.DB_ERROR_INSERTION_ERROR;
                      console.log(err);
                  }});
              result=resultSet.data;
          }
        }
        catch (e) {
            errors.error = e;
        }
    }
    else{
        errors.SYSTEM_ERROR = constants.SYSTEM_ERROR
    }
    res.send(
        {
            patients:result,
            errors: errors
        });
};
module.exports=findEverything;