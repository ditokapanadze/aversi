const mongoose = require("mongoose");
const express = require("express");
const Product = require("../models/Products");
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
