const axios=require('axios');


const findAllAuthorizedPatients = async (req, res, next)=>
{
    let accessToken=req.body.accessToken;
    let patientObject={};
    let patients=[];
    console.log("a",accessToken);
    let url="https://api.1up.health/fhir/dstu2/Patient";
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
                //TEST THIS TESTCASE
                console.log("no patient found!");
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
                patients:patients
            });
    }
    else{
        console.log("Access Token has expired")
    }
};
module.exports=findAllAuthorizedPatients;