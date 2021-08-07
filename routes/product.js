const express = require("express");

const router = express.Router();

const { getProducts } = require("../controllers/product");

router.route("/getproducts/:page").get(getProducts);

module.exports = router;
