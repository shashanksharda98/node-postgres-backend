const express = require('express');
const router = express.Router();

const userApiHandler = require('../../handlers/userApiHandler');


router.post('/login', userApiHandler.userLogin);
router.post('/register', userApiHandler.userRegister);
router.post('/resetPassword', userApiHandler.userResetPassword);

module.exports = router;