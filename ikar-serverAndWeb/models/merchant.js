// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var merchantSchema = new mongoose.Schema({
    merchantPAN: String,
    merchantTIN: String,
    merchantName: String,
    merchantAddress: String
});


// Return model
module.exports = restful.model('Merchant', merchantSchema);