const express = require("express");
const cors = require("cors");
const router = express.Router();

const { addToBasket, changeBasket } = require("../controllers/basket");

router.route("/addToBasket/:id").put(addToBasket);
router.route("/changeBasket/:id").put(changeBasket);

module.exports = router;
