const mongoose = require('mongoose');

// ─── PRODUCT MODEL ───────────────────────────────────────────────────────────────
const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
