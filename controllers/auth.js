const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../email");

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
  // Send Email to email provided but first check if user exists
  const { resetEmail } = req.body;
  console.log("test");

  try {
    const user = await User.findOne({ email: resetEmail });
    console.log(user);
    if (!user) {
      return next(new ErrorResponse("No email could not be sent", 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();
    console.log(resetToken);
    await user.save();

    // Create reset url to email to provided email
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    // HTML Message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please make a put request to the following link:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
      console.log(err);

      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (err) {
    next(err);
  }
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
