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
  const { formData } = req.body;
  console.log(formData.email);
  // Check if email and password is provided
  if (!formData.email || !formData.password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  const email = formData.email;

  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select("+password");
    console.log(user);
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    console.log(formData.password);
    const password = formData.password;

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log("isPasswordCorrect");
    console.log(user);
    // Check that password match
    // const isMatch = await User.matchPassword(password);
    // console.log(isMatch);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    sendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
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
