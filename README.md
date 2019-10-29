# 1uphealth_challange




## Installation

These components are needed to be installed if the project needs to be run locally 
- Node v12.6.0
- Mongodb v4.2.1
- Webstorm IDE or IntelliJ IDE 


## To setup the project locally 
 - clone this repo to your local machine using 
 - npm install
 - brew install mongodb-community@4.2
 

## Execution
---------

1) CREATE NEW USER BY RUNNING :
 curl -X POST "https://api.1up.health/user-management/v1/user" -d "app_user_id=harshmee_v3" -d   "client_id=67c449669e5949e7896a7a3c0e7f77ad" -d "client_secret=tzO0NpqHRwd01G1RLspIQEZaV8wI0v4b"
 
2) AUTHORIZE THIS USER BY RUNNING :
curl -X POST https://api.1up.health/fhir/oauth2/token -d "client_id=67c449669e5949e7896a7a3c0e7f77ad" -d "client_secret=tzO0NpqHRwd01G1RLspIQEZaV8wI0v4b" -d "code={{GENERATEDCODE}}" -d "grant_type=authorization_code"

3) QUICK CONNECT THE APPLICATION BY RUNNING : 
https://quick.1up.health/connect/4706?access_token={{GENERATEDACCESSTOKEN}}&state=MA&bg=ff00ff

4) ENTER THE FOLLOWING CREDENTIALS FOR EPIC :
Username : fhirjason Password : epicepic1

5) THE APP WILL REDIRECT TO THE AWS SEARCH PAGE :  ENTER THE ACCESS CODE AND VERIFY THE RESULTS 

## LINK : 

- The app is running at http://ec2-34-201-132-65.compute-1.amazonaws.com:8000/#/getallpatients

## APPLICATION CREDENTIALS : 

Application Name
harshmeet_deployed

OAuth2 Redirect URL
http://ec2-34-201-132-65.compute-1.amazonaws.com:8000/#/getallpatients

OAuth2 Client Id
67c449669e5949e7896a7a3c0e7f77ad

OAuth2 Client Secret
tzO0NpqHRwd01G1RLspIQEZaV8wI0v4b

