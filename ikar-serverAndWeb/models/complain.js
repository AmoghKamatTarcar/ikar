// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var complainSchema = new mongoose.Schema({
    userPAN: String,
    merchantName: String,
    transactionAmount: Number,
    transactionItem: Number,
    merchantLocation: String,
    imageproof: String,
    complainDesc: String,
    status: Number
});


// Return model
module.exports = restful.model('Complain', complainSchema);