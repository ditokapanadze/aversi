const express = require("express");

const router = express.Router();

const { addToBasket } = require("../controllers/basket");

router.route("/addToBasket/:id").put(addToBasket);

module.exports = router;
