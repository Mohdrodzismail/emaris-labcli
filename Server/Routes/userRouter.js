const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/userController')


 router.post('/auth', UserController.auth); 
 router.post('/Register', UserController.RegisterNewUser);
 router.get('/Secret', UserController.authMiddleWare);

module.exports = router;