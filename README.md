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
There are two ways to execute the project : Create a new user and authorize test patient data to that user or
refresh the access token of existing user and view EHR results for test patients 

#### EXECUTION PATH 1
1) CREATE NEW USER BY RUNNING :
 curl -X POST "https://api.1up.health/user-management/v1/user" -d "app_user_id=harshmee_v3" -d   "client_id=67c449669e5949e7896a7a3c0e7f77ad" -d "client_secret=tzO0NpqHRwd01G1RLspIQEZaV8wI0v4b"
 
2) AUTHORIZE THIS USER BY RUNNING :
curl -X POST https://api.1up.health/fhir/oauth2/token -d "client_id=67c449669e5949e7896a7a3c0e7f77ad" -d "client_secret=tzO0NpqHRwd01G1RLspIQEZaV8wI0v4b" -d "code=a6d670cd2ea44dde91daf533dd8a85ba" -d "grant_type=authorization_code"

3) QUICK CONNECT THE APPLICATION BY RUNNING : 
https://quick.1up.health/connect/4706?access_token=204758348dce4cc88bcc4c6b63dd4bb9&state=MA&bg=ff00ff

4) THE APP WILL REDIRECT TO SEARCH PAGE :  ENTER THE ACCESS CODE AND VERIFY THE RESULTS 


#### EXECUTION PATH 2







Unzip project file.
2) Open command prompt.
3) Navigate to directory where project files unzipped.
4) Do Mvn clean , mvn install and then run FindFollowersRSR.scala or FindFollowersREPD.scala or FindFollowersREPR.scala or FindFollowersRSD.scala
5) Please give program arguements as input and output
6) Edit the Makefile to customize the environment at the top.
7) AWS EMR Hadoop: (you must configure the emr.* config parameters at top of Makefile)
	make upload-input-aws		              -- only before first execution
	make aws				 -- check for successful execution with web interface (aws.amazon.com)
	download-output-aws			       -- after successful execution & termination
	Change the number of nodes in make file to 6 or 11 
  Change the job.name in the make file according to the scala program being run from the package wc
  Change the name of the cluster at aws emr create-cluster \
		--name "<Program name> Spark Cluster" \(optional)
8) make sure that input folder has edges file in it 
9) The program will take 2 arguements input and output 
