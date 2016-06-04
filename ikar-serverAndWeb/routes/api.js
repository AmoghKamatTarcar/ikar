
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Transaction = require('../models/transaction');
var Complain = require('../models/complain');
// Routes
Transaction.methods(['get', 'put', 'post', 'delete']);
Transaction.register(router, '/transactions');


Complain.methods(['get', 'put', 'post', 'delete']);
Complain.register(router, '/complains');


// Return router
module.exports = router;