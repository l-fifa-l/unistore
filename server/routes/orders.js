const express = require('express');
const router = express.Router();
const { postOrders } = require('../controllers/orders');

// post order
router.post('/', postOrders);

module.exports = router;
