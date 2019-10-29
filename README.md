# 1uphealth_challange

-----------
Harshmeet Johal

## Installation
------------
These components are installed:
- Node v12.6.0
- Mongodb v4.2.1
- Webstorm IDE or IntelliJ IDE 

##Execution
---------
There are two ways to execute the project : Create a new user and authorize test patient data to that user or refresh the access token of existing user and view EHR results for test patients 

####
1) Unzip project file.
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
