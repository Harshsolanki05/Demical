var mongoose = require('mongoose')

var categoryschema = new mongoose.Schema({

    cat_name:{
        type:String
    },    
    // cat_image:{
    //     type:String
    // }

})

module.exports = mongoose.model('Category-data',categoryschema)