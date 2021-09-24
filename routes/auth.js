const express = require("express");

const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
  changeAvatar,
} = require("../controllers/auth");

// იგივეა   router..port("/register", register)
router.route("/register").post(register);
router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;
