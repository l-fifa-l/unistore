const mongoose = require('mongoose');

// ─── USER MODEL ───────────────────────────────────────────────────────────────

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'A user must have a name'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
