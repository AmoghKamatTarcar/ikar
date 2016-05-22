
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
require('shelljs/global');
var FACTOM_INSTALL_DIR = '/Applications/FactomApps/';
cors = require('cors')
// MongoDB
mongoose.connect('mongodb://localhost/ikar');

// ROUTES FOR OUR API
// =============================================================================

// Express
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.options('*', cors());
// Routes
app.use(express.static('public'));
app.use('/api',require('./routes/api'));

// handle HTTP GET request to the "/getMerchants" URL
var Transaction = require('./models/transaction');
var Merchant = require('./models/merchant');
var Complain = require('./models/complain')
var merchants;

app.get('/getMerchants', function(req, res) {
    
    Merchant.find(function(error, ids) {
    res.contentType('application/json');
    res.send(JSON.stringify(ids));
});
});

app.get('/getMerchantsByTransaction',function(req,res){
    
    Transaction.aggregate([
                            { "$group": {
                                    "_id": {"merchantTIN":"$merchantTIN"},
                                    "approved": {
                                        "$sum": { "$cond": [
                                            { "$eq": [ "$transactionApproved", true ] },
                                            1,
                                            0
                                        ]}
                                    },
                                    "totalCount": { "$sum": 1 },
                                    "totalRevenue": { $sum:  "$transactionAmount"   }
                                }}


                                 ,
                                  { "$sort": { "totalRevenue": 1} }
                           ],function(error,data){
                            res.contentType('application/json');
                            res.send(JSON.stringify(data));
                            })

})
app.get('/getMerchantComplains',function(req,res){
    
        Complain.find(function(error,data){
                res.contentType('application/json');
                res.send(JSON.stringify(data));
                });

})
app.get('/getEntryForMerchant/:id',function(req,res){
    
        Transaction.find(function(error,data){
                res.contentType('application/json');
                res.send(JSON.stringify(data));
                });

})


var merchantEntryBuildererchants = require('./routes/buildEntryForMerchant');
app.get('/buildEntryForMerchant/:id', function(req,res){
  var merchant = req.params.id;
    
    Transaction.find({merchantTIN :merchant},function(error, data) {
    
        var merchantResultBuilder = [];
        for(var merchantEntries in data){
            merchantResultBuilder.push({userPAN: data[merchantEntries].userPAN,transactionAmount:data[merchantEntries].transactionAmount});
        }
        
        var merchantResultBuilderJSON =  JSON.stringify(merchantResultBuilder);       
        
        res.contentType('application/json');
        res.send(JSON.stringify(merchantResultBuilder));     
        
    });
});

var merchantEntryBuilder = 
app.get('/addEntryForMerchantToBlock/:id', function(req,res){
    
  //  console.log('user ' + req.params.id);
    
    var merchant = req.params.id;
    
    Transaction.find({merchantTIN :merchant},function(error, data) {
    
        var merchantResultBuilder = [];
        for(var merchantEntries in data){
            merchantResultBuilder.push({userPAN: data[merchantEntries].userPAN,transactionAmount:data[merchantEntries].transactionAmount});
        }
        
        var merchantResultBuilderJSON =  JSON.stringify(merchantResultBuilder);       
        
        cd(FACTOM_INSTALL_DIR);  
        
        exec('echo "'+merchantResultBuilderJSON+'" |  ./factom-cli put -e newextid -e anotherextid -c 7be48d59cab630a0998dd151fdb955d7ba21b5c8bec82fe538bdb1c79e5b0076 zeros', function(code, stdout, stderr) {
            if(code==0){
                console.log('Program output:' ); 
                var fMEntryHash = stdout.split(": ")[1].trim();
                console.log(fMEntryHash);
            }
           
        }) ;
        res.contentType('application/json');
        res.send(JSON.stringify(merchantResultBuilder));     
        
    });
});

// Start server
app.listen(3000);
console.log('API is running on port 3000');
