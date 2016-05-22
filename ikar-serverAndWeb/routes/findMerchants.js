// Dependencies
var mongoose = require('mongoose');
var exports = module.exports;

var merchants;

// Models
var Transaction = require('../models/transaction');



exports.getMerchants = function(req,res){
    
    Transaction.find().distinct('merchantTIN', function(error, ids) {
// ids is an array of all ObjectIds
    console.log(ids);
    res.contentType('application/json');
    res.send(JSON.stringify(ids));
});
    
  
    
}
