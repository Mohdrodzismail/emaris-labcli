const express = require('express');
const UserController = require('../Controllers/userController')
const router = express.Router();



 router.post('/auth', UserController.auth); 
 router.post('/Register', UserController.RegisterNewUser);
 router.get('/Secret', UserController.authMiddleWare);

module.exports = router;