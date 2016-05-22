// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var transactionSchema = new mongoose.Schema({
    userPAN: String,
    merchantTIN: String,
    transactionAmount: Number,
    transactionDate: Date,
    transactionApproved: Boolean,
    transactionDesc: String
});


// Return model
module.exports = restful.model('Transaction', transactionSchema);