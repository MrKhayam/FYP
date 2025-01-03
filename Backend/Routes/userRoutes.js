const express = require('express');
const { registerUser, loginUser, findMyProfile } = require('../Controller/userController');
const router = express.Router();

router.post('/register-user', registerUser);
router.post('/login-user', loginUser);
router.get('/find-user/:id', findMyProfile);

module.exports = router;