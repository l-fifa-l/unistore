const User = require('../models/user');
const asyncHandler = require('express-async-handler');

const getUser = asyncHandler(async (req, res) => {
  // get usename from request body
  const { username } = req.body;

  //   find user in database
  const user = await User.findOne({ username });

  //   if user found, return user data
  if (user) {
    res.status(200).json({
      success: true,
      data: user,
    });
  }
  // if user not found, create user and return user data
  else {
    const user = await User.create({
      username,
    });
    res.status(201).json({
      success: true,
      data: user,
    });
  }
});

module.exports = {
  getUser,
};
