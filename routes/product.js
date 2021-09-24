const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProduct,
  searchProduct,
} = require("../controllers/product");

router.route("/getproducts/:page").get(getProducts);
router.route("/getproduct/:id").get(getProduct);
router.route("/getproductSearch").get(searchProduct);

module.exports = router;
