const express = require("express");

const router = express.Router();

const { getProducts, getProduct } = require("../controllers/product");

router.route("/getproducts/:page").get(getProducts);
router.route("/getproduct/:id").get(getProduct);

module.exports = router;
