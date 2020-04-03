var express = require("express");
var router = express.Router();
var PersonController = require("../controllers/personController");
var ProductController = require("../controllers/productController");
var AuthController = require('../controllers/authController');

router.use(AuthController.check_token);

router.get('/people', PersonController.all);
router.get('/products', ProductController.all);

module.exports = router;