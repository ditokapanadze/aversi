const express = require("express");

const router = express.Router();

const { addToBasket, changeBasket } = require("../controllers/basket");
const ggg = () => {
  console.log("Asdasd");
};

router.route("/addToBasket/:id").put(addToBasket);
router.route("/changeBasket/:id").put(changeBasket);

module.exports = router;
