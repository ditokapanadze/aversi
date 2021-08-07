const mongoose = require("mongoose");
const express = require("express");
const Product = require("../models/Products");
const { findById } = require("../models/Products");
exports.getProducts = async (req, res) => {
  const { page } = req.params;
  console.log(page);
  try {
    const LIMIT = 20;
    const startIndex = (Number(page) - 1) * LIMIT;
    console.log(startIndex);
    const total = await Product.countDocuments({});
    console.log(total);
    const product = await Product.find()
      .sort({ _id: 1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: product,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (err) {
    res.status(566).json({ err });
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const product = await Product.findById(id);
    console.log(product);
    res.status(200).json({ data: product });
  } catch (err) {
    res.status(400).json({ message: "product not found" });
  }
};
