const express = require("express");

const router = express.Router();

const { changeAvatar, changeInfo } = require("../controllers/info.js");

router.route("/changeAvatar").put(changeAvatar);
router.route("/changeInfo").put(changeInfo);

module.exports = router;
