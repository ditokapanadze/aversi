const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  form: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  anotation: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
