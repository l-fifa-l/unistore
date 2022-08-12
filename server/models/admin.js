const mongoose = require('mongoose');

// ─── ADMIN MODEL ───────────────────────────────────────────────────────────────

const adminSchema = mongoose.Schema(
  {
    totalItemPurchased: { type: Number, required: true, default: 0 },
    totalAmount: { type: Number, required: true, default: 0 },
    totalDiscountAmount: { type: Number, required: true, default: 0 },
    discountCoupons: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Admin', adminSchema);
