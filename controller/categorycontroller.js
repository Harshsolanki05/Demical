var categorymodel = require('../model/categorymodel')

exports.insert = async  (req, res) => {

    // var img = await req.file.originalname;

    // req.body.cat_image = img;
        
    var data = await categorymodel.create(req.body);

    res.status(200).json({
        // status:'insert.......ok',
        data   
    })
}
exports.getdata = async  (req, res) => {    
    
    var data = await categorymodel.find();
    
    var totaldata = await categorymodel.find().count();
    
    res.status(200).json({        
        data,
        totaldata 
    })
}

// exports.getdata = async  (req, res) => {

//     var data = await categorymodel.find();

//     res.status(200).json({        
//         data    
//     })
// }