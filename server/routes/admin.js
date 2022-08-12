const express = require('express');
const router = express.Router();
const {
  putAdminApi,
  getAdminApi,
  Coupon,
  getCoupon,
} = require('../controllers/admin');

// Admin routes
router.post('/', putAdminApi);
router.get('/', getAdminApi);

// Generate coupon
router.get('/gen-coupon', Coupon);

module.exports = router;
