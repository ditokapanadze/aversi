const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a username"],
  },
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "please add a password"],
    minlength: 6,
    select: false,
  },
  mobileNumber: { type: String, required: false, default: "" },
  adress: {
    type: String,
    required: false,
    default: "",
  },
  photo: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
  },
  basket: {
    type: Array,
    default: [],
  },
  test: {
    type: String,
    default: "Test",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare.apply(password, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign(
    { id: this._id },
    "cc01c24b7ea0c3de7d4844a9d85af41e914b5d95b4d6d36f28515f6eb90a987dbc0747"
  );
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
