var categorymodel = require('../model/categorymodel')

exports.insert = async  (req, res) => {

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

