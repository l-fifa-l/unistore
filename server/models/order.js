const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// ─── ORDER MODEL ───────────────────────────────────────────────────────────────

const orderSchema = new mongoose.Schema(
  {
    allProduct: [
      {
        id: { type: ObjectId, ref: 'Product' },
        quantitiy: Number,
      },
    ],
    user: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model('orders', orderSchema);
module.exports = orderModel;
