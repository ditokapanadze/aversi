const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../email");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.changeAvatar = async (req, res) => {
  console.log("Asdasd");
  const { token, photo } = req.body;

  console.log(photo);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const updatePhoto = await User.findByIdAndUpdate(
      { _id: decoded.id },
      { photo: photo.base64 },
      { new: true }
    );
    res.json(updatePhoto);
  } catch (err) {
    res.status(404).json({ err });
  }
};

exports.changeInfo = async (req, res) => {
  const { number, adress, token } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById({ _id: decoded.id });

    const updateInfo = await User.findByIdAndUpdate(
      { _id: decoded.id },
      {
        adress: adress ? adress : user.adress,
        mobileNumber: number ? number : user.number,
      },

      { new: true }
    );
    res.json(updateInfo);
  } catch (err) {
    console.log(err);
  }
};
