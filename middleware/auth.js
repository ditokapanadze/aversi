const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const ErrorResponse = require("../utils/errorResponse");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }
    req.user = user;
    console.log("test");
    next();
  } catch (error) {
    return next(new ErrorResponse("not authprized to access this route", 401));
  }
};
