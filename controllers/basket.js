const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../email");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Product = require("../models/Products");

exports.addToBasket = async (req, res, next) => {
  const { id } = req.params;
  const user_id = req.body.auth.user._id;
  const quantity = req.body.quantity;
  try {
    const product = await Product.findById(id);
    const test = await User.findById(user_id);
    productObject = [];
    const add = () => {
      for (var i = 1; i <= quantity; i++) {
        productObject.push(product);
      }
    };
    add();

    const user = await User.findByIdAndUpdate(
      user_id,
      { basket: test.basket.concat(productObject) },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
};
