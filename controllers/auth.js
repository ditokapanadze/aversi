const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../email");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const { formData } = req.body;

  try {
    const user = await User.create({
      username: formData.userName,
      email: formData.email,
      password: formData.password,
      adress: formData.adress,
      mobileNumber: formData.number,
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
      return res.status(401).json({ message: "იმეილი არასწორია" });
    }

    const password = formData.password;

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // Check that password match
    // const isMatch = await User.matchPassword(password);
    // console.log(isMatch);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "პასვორდი არასწორია" });
    }

    sendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.forgotpassword = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const { resetEmail } = req.body;

  try {
    const user = await User.findOne({ email: resetEmail });

    if (!user) {
      return next(new ErrorResponse("No email could not be sent", 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

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
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (err) {
    next(err);
  }
};

exports.changeAvatar = async (req, res) => {
  const { photo, token } = req.body;
  // console.log(photo.base64);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const updatePhoto = await User.findByIdAndUpdate(
      { _id: decoded.id },
      { photo: photo.base64 },
      { new: true }
    );
    res.json(updatePhoto);
  } catch (err) {
    console.log("err");
  }
};
exports.resetpassword = async (req, res, next) => {
  const { pass } = req.body;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      console.log("ver ipova");
    }

    user.password = pass;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

const sendToken = (user, statusCode, res) => {
  console.log("tokenis funqcia");
  console.log(user);

  getSignedJwtToken = function () {
    return jwt.sign(
      { id: this._id },
      "cc01c24b7ea0c3de7d4844a9d85af41e914b5d95b4d6d36f28515f6eb90a987dbc0747",
      {
        expiresIn: "200min",
      }
    );
  };

  const token = getSignedJwtToken();
  console.log(token);

  res.status(statusCode).json({
    success: true,
    token,
    email: user.email,
    name: user.username,
    mobileNumber: user.mobileNumber,
    adress: user.adress,
  });
};
