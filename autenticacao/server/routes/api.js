var express = require("express");
var router = express.Router();
var PersonController = require("../controllers/personController");
var ProductController = require("../controllers/productController");

router.get('/people', PersonController.all);
router.get('/products', ProductController.all);

module.exports = router;