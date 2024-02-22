var doctormodel = require('../model/doctormodel')
const bcrypt = require('bcrypt')
login_status = 0
exports.insert = async (req, res) => {

    if (req.body.password == req.body.con_pass) {
        var b_pass = await bcrypt.hash(req.body.password, 10);

        req.body.password = b_pass;
        req.body.con_pass = b_pass;

        var data = await doctormodel.create(req.body);

        res.status(200).json({
            data
        })
    }
    else {
        res.status(200).json({
            status: 'Not match your password or conform password..!'
        })
    }
}
exports.getdata = async (req, res) => {

    var data = await doctormodel.find().populate('cat_id');

    res.status(200).json({
        data
    })
}

exports.login = async (req, res) => {

    var data = await doctormodel.find({ "email": req.body.email });

    if (login_status == 0) {

        if (data.length == 1) {

            bcrypt.compare(req.body.password, data[0].password, function (err, result) {

                if (result == true) {

                    login_status = 1

                    res.status(200).json({
                        status: "login done...✅",data
                    })
                }
                else {
                    res.status(200).json({
                        status: "check your email and password"
                    })
                }

            });
        } else {
            res.status(200).json({
                status: "check your email and password"
            })
        }
    } else {
        res.status(200).json({
            status: "Doctor is already logged in"
        })
    }

}
exports.logout = async (req, res) => {

    login_status = 0

    res.status(200).json({
        status: 'Doctor logout done...'
    })

}