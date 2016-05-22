// Dependencies
var mongoose = require('mongoose');
var exports = module.exports;

// Models
var Transaction = require('../models/transaction');

exports.buildEntryForMerchant = function(req,res){
    
    console.log('user ' + req.params.id);
    
    var merchant = req.params.id;
    
    Transaction.find({merchantTIN :merchant},function(error, data) {
    
        var merchantResultBuilder = [];
        for(var merchantEntries in data){
            console.log(merchantEntries+": "+data[merchantEntries]);
            merchantResultBuilder.push({userPAN: data[merchantEntries].userPAN, transactionAmount:data[merchantEntries].transactionAmount});
        }
        
        console.log(merchantResultBuilder);
        res.contentType('application/json');
        res.send(JSON.stringify(merchantResultBuilder));
    });
    
}