const express = require('express');
const router = express.Router();
const { getProducts, postProducts } = require('../controllers/products');

// post all products
router.post('/', postProducts);

// get all products
router.get('/', getProducts);

module.exports = router;
