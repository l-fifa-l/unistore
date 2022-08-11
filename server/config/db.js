// imports mongoose
const mongoose = require('mongoose');

// connect to database function
const connnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connnectDB;
