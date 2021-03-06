// Dependencies
var express = require('express');
var router = express.Router();

// Models
var User = require('../models/user');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

// Return router
module.exports = router;