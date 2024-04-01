var mongoose = require('mongoose');

var Blogschema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
})
module.exports = mongoose.model('Blog-data', Blogschema)