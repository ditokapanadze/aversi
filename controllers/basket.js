const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../email");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Product = require("../models/Products");

exports.addToBasket = async (req, res, next) => {
  const { id } = req.params;

  const user_id = req.body.user_id;
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
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.changeBasket = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  const { value } = req.body;

  const product_id = id;

  if (value === "delete") {
    try {
      const product = await Product.findById(product_id);
      const user = await User.findById(user_id);
      const basket = user.basket;

      const index = basket.findIndex(
        (basketItem) => basketItem._id == product_id
      );

      if (index >= 0) {
        basket.splice(index, 1);
        const changeBasket = await User.findByIdAndUpdate(
          user_id,
          { basket: basket },
          { new: true }
        );
        res.status(200).json({ data: changeBasket });
      } else {
        res.status(400).json({ message: "product in not in the basket" });
      }
    } catch (err) {
      res.status(400).json({ message: "something want wrong" });
    }
  }

  if (value === "add") {
    try {
      const product = await Product.findById(product_id);

      const test = await User.findById(user_id);

      const changeBasket = await User.findByIdAndUpdate(
        user_id,
        { basket: test.basket.concat(product) },
        { new: true }
      );
      res.status(200).json({ data: changeBasket });
    } catch (err) {
      res.status(400).json(err);
    }
  }
};
