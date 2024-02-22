const mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    con_pass: {
        type: String
    }    
})
module.exports = mongoose.model('User-data', userschema)
