const express = require("express");
const cors = require("cors");
const router = express.Router();

const { addToBasket, changeBasket } = require("../controllers/basket");
const ggg = () => {
  console.log("Asdasd");
};

router.route("/addToBasket/:id").put(addToBasket);
router.route("/changeBasket/:id").put(cors(), changeBasket);

module.exports = router;
