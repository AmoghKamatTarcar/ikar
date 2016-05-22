# ikar
Project Mission: Empower citizens to fight income tax evasion by leveraging 
Block chain and gamification
Project Description: 
Tax evasion is one of the most serious problems faced by the Income Tax Department. Currently income tax department has limited options for cross verifying cash transaction data. Ikar will be a product build for the Income tax department and run by the government. 

Prototype Implementation
•	Ionic mobile application which has the functionality to record transactions and register complains
•	Angular.js based web application to view transactions and complains
•	Node.js Server with mongo DB implementation and Factom block chain connectivity

Instructions for running ikar: 
Requirements : 
1. Node.js 
2. MongoDB 
3. Factom sandbox environment (https://github.com/FactomProject/FactomDocs/blob/master/developerSandboxSetup.md)
4. Ionic hybrid mobile framework
5. Android SDK

Before deployement
1. Make sure mongoDB is running on the host machine 
2. Factomd and Fct wallet is running on the host machine (make a new chain and configure its ID in the server.js file)
3. MongoDB connection details are set in' server.js' file in ikar-serverAndWeb folder
4. Import the .bson files in ikar-serverAndWeb/ikar.json folder into mongoDB 
5. Set factom install directly in 'server.js' file in ikar-serverAndWeb folder as configured on host machine
6. Make sure server URL is set correctly in ' AppCtrl.js' in ikar-mobile folder

Process for Deployment
For deploying server 
1. Run 'npm install' command from command line by navigating to ikar-serverAndWeb folder
2. While in ikar-serverAndWeb folder,run server.js file using 'node server.js' command (make sure mongoDB is running)
3. The web application can be accesed on port 3000 on localhost

For deploying mobile application
1. While in ikar-mobile folder,run 'ionic build' command to build project 
2. Run 'ionic run android' command to deploy the application on a connected android device
3. The mobile application can be accesed on phone
