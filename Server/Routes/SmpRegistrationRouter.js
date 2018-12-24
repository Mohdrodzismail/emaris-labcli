const express = require('express');
const SmpRegistrationDet = require('../Controllers/GeneralLab/SmpRegistrationDetCtrl')
const router = express.Router();
const userController = require('../Controllers/userController')


//const smpRegistrationDetail = require('../Models/GeneralLab/SmpRegistrationDet');


 router.get('/', SmpRegistrationDet.SelectAll); 
 router.get('/:LabNo', SmpRegistrationDet.SelectByLabNo);
 router.post('/Update', SmpRegistrationDet.UpdateBySampleID);
 router.get('/Secret', userController.authMiddleWare);

module.exports = router;