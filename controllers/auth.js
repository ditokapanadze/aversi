const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { formData } = req.body;
  console.log(formData);
  try {
    const user = await User.create({
      username: formData.userName,
      email: formData.email,
      password: formData.password,
    });

    sendToken(user, 200, res);
  } catch (err) {
    res.status(200).json({
      err,
    });
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check that password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.FondOne({ email });
    if (!user) {
      return next(new ErrorResponse("Email could not be send", 404));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    const messsage = `<h1> you have requested a password reset </h1>
    <p>Please go to this link to reset your password </p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`;

    try {
    } catch (error) {}
  } catch (error) {}
};
exports.resetpassword = (req, res, next) => {
  res.send("resetpassword route");
};

const sendToken = (user, statusCode, res) => {
  console.log("tokenis funqcia");
  const token = user.getSighedToken();
  console.log(token);
  res.status(statusCode).json({
    success: true,
    token,
    email: user.email,
    name: user.username,
  });
};
