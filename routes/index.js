var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller')
var doctor = require('../controller/doctorcontroller')
var category = require('../controller/categorycontroller')

//===================|| User-site Api's ||========================

router.post('/user-insert', user.insert)//----------// user-insert
router.get('/user-data', user.getdata)//------------// user-data
router.post('/user-login', user.login)//------------// user-login
router.get('/user-logout', user.logout)//-----------// user-logout

//===================|| Doctor-site Api's ||======================

router.post('/doctor-insert', doctor.insert)//------// doctor-insert
router.get('/doctor-data', doctor.getdata)//--------// doctor-data
router.post('/doctor-login', doctor.login)//--------// doctor-login 
router.get('/doctor-logout', doctor.logout)//-------// doctor-logout

//====================|| Category-Api's ||=========================

router.post('/category-insert', category.insert)//--// category-insert
router.get('/category-data', category.getdata)//----// category-data


module.exports = router;
