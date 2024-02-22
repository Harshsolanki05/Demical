var mongoose = require('mongoose')
var doctorschema = new mongoose.Schema({
    name: {
        type: String
    },
    doc_img: {
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
    },
    cat_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category-data"
    }
})
module.exports = mongoose.model('Doctor-data', doctorschema)