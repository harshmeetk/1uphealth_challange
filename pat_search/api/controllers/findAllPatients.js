const axios=require('axios');
const constants = require("../../config/constants.json");


const findAllAuthorizedPatients = async (req, res, next)=>
{
    let accessToken=req.body.accessToken;
    let patientObject={};
    let patients=[];
    let url="https://api.1up.health/fhir/dstu2/Patient";
    let errors={};
    if(accessToken)
    {
        let result={};
        try{
            result = await axios.get(url, {
                headers:{
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if(result.data.entry.length>0) {
                for (let entries of result.data.entry) {
                    for(let names of entries.resource.name)
                    {
                        patients.push({"patient_id":entries.resource.id, "patient_name" : names.text})
                    }
                }

            }
            else{
                errors.NO_PATIENT_FOUND= constants.NO_PATIENT_FOUND;
            }
        }
        catch (e) {
            errors = e.message;
        }
    }
    else{
        errors.SYSTEM_ERROR = constants.SYSTEM_ERROR
    }
    res.send(
        {
            patients:patients,
            errors : errors
        });
};
module.exports=findAllAuthorizedPatients;