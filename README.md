# ikar
Project Mission: Empower citizens to fight income tax evasion by leveraging 
Block chain and gamification
Project Description: 
Tax evasion is one of the most serious problems faced by the Income Tax Department. Currently income tax department has limited options for cross verifying cash transaction data. Ikar will be a product build for the Income tax department and run by the government. 
IKar aims to help Income tax department with the help of informed citizens. It empowers the citizens to provide information about their transactions in a secure and intuitive way using smartphone app. It leverages the latest in security such as block-chain technology to record user transactions essentially making data entries immutable. These records are used while auditing the merchant records. 

Ikar Goals:
•	Increase no. of tax payers by citizen involvement
•	Reward citizens for helping IT Dept.
•	Smart monitoring tool for IT Dept. auditors
•	Enhance financial accountability by leveraging block chain technology

Ikar solution will have 2 major components: 
1.	Provide Robust Solution To Income Tax Dept.
•	Easy integration into existing IT dept. infrastructure with intuitive web user interface
•	Generate QR codes for all registered merchants and make it mandatory to display them
•	Enhanced security by using block chain technology for auditing transaction data
2.	Citizen Involvement
•	Intuitive smartphone application for tracking progress and utilizing rewards 
•	Instantly report cash transaction data directly to IT dept.
•	Quickly Report fraudulent merchants

Ikar product will have 3 major components: 
1.	Hybrid mobile applications for consumer and merchant
2.	Robust Server and Database solution
3.	Intuitive Web interface for IT Dept. Officials



IKar Feature: Block Chain
•	Block chain is a distributed database that maintains a continuously-growing list of data records hardened against tampering and revision
•	Each block includes the hash of the prior block, linking the blocks together. The linked blocks form a chain.
•	This results into a storage which is Secure and Immutable
Benefits: 
Citizen Benefits  
•	Earn 5% cash-back points on transactions reported
•	This cash-back points can be redeemed towards tax saving( Similar to tax benefits claimed as medical expenses) 
•	or avail free Wi-Fi under Digital India
•	Easy access to reach IT department for reporting fraudulent business owners
Income Tax department Benefits
•	Brand new approach to crowdsourcing data related to cash transactions
•	Irrefutable proofs Like never before while running audits for business owners
•	Intelligent dashboard for Income tax auditors 
•	Convenient way to deal with consumer complaints
Long term citizen benefits
•	If everyone starts paying up correct taxes Government is going to get more money from businesses
•	Ideal democracy like India believes in helping everyone , so the tax rate for citizens will eventually come down
•	Happy Government = Happy Citizens!

Prototype Implementation
•	Ionic mobile application which has the functionality to record transactions and register complains
•	Angular.js based web application to view transactions and complains
•	Node.js Server with mongo DB implementation and Factom block chain connectivity
Future Enhancements
•	The iKar web application can be customized for better integration with Income tax department infrastructure
•	Develop merchant iKar application with rich features for catering to merchant requirements
•	Enhance block chain implementation further by exploring smart contract platforms such as Etherium and IBM Open Block Chain




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
