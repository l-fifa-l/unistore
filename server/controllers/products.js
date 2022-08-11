const Product = require('../models/product');
const asyncHandler = require('express-async-handler');
const { data } = require('../utils/data');

// insert products into the database
const postProducts = asyncHandler(async (req, res) => {
  const products = await Product.insertMany(data.products);
  res.status(201).json({
    success: true,
    data: products,
  });
});

// get all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

module.exports = {
  postProducts,
  getProducts,
};
