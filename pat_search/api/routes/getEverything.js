const axios=require('axios');
const getEverything = async (req, res, next)=>
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
            result = await axios.get(url, {
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
            })
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
module.exports=getEverything;