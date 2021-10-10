const mongoose = require("mongoose");
const express = require("express");
const Product = require("../models/Products");
const { findById } = require("../models/Products");
const { search } = require("../routes/product");

exports.getProducts = async (req, res) => {
  const { page } = req.params;
  const { filter } = req.params;
  // ეს უნდა დაიტესტოს, შეიძლება რაღცები გააფუჭოს
  if (page == 0 && filter) {
    const product = await Product.find();
    res.json({
      data: product,
    });
  } else if (page > 0) {
    try {
      const LIMIT = 20;
      const startIndex = (Number(page) - 1) * LIMIT;

      const total = await Product.countDocuments({});

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
  } else if (filter.length > 3) {
    try {
      const filterQuery = new RegExp(filter, "i");
      const product = await Product.find({
        type: filterQuery,
      });

      res.json({
        data: product,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    res.status(200).json({ data: product });
  } catch (err) {
    res.status(400).json({ message: "product not found" });
  }
};

exports.searchProduct = async (req, res) => {
  const { search } = req.query;

  try {
    const searchQuery = new RegExp(search, "i");
    const product = await Product.find({
      name: searchQuery,
    });

    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};
