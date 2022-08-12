const Admin = require('../models/admin');
const asyncHandler = require('express-async-handler');
//
// ─── ADMIN CONTROLLER ───────────────────────────────────────────────────────────────
//
// Admin Api Value update
const putAdminApi = asyncHandler(async (req, res) => {
  const { totalItemPurchased, totalAmount, totalDiscountAmount } = req.body;
  //   update the admin data
  const updateValues = await Admin.updateMany({
    $inc: {
      totalItemPurchased: totalItemPurchased,
      totalAmount: totalAmount,
      totalDiscountAmount: totalDiscountAmount,
    },
  });
  res.status(201).json({
    success: true,
    data: updateValues,
  });
});
//

// Admin Api Value get
const getAdminApi = asyncHandler(async (req, res) => {
  const adminApi = await Admin.find();
  res.status(200).json(adminApi);
});
//

// Admin Api Coupon generate
const Coupon = asyncHandler(async (req, res) => {
  let r = (Math.random() + 1).toString(36).substring(7).toUpperCase();
  const discountCoupons = await Admin.updateOne({
    $push: { discountCoupons: r },
  });
  res.status(200).json(discountCoupons);
});

module.exports = {
  putAdminApi,
  getAdminApi,
  Coupon,
};
