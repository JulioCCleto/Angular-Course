var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/authController.js');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

router.use(AuthController.check_token);
router.get('/user', AuthController.user_data);

module.exports = router;