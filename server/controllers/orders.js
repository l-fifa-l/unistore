const Order = require('../models/order');
const asyncHandler = require('express-async-handler');

// Store Orders in the database
// ─── ORDER CONTROLLER ───────────────────────────────────────────────────────────────

const postOrders = asyncHandler(async (req, res) => {
  const { user, allProduct, amount } = req.body;
  // console.log(user, allProduct, amount);
  const order = await Order.create({ user, allProduct, amount });
  res.status(201).json({
    success: true,
    data: order,
  });
});

module.exports = {
  postOrders,
};
