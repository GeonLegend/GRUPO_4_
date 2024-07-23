const express = require('express');
const router = express.Router();
const cartController = require("../controllers/dbControllers.js/cartController");

router.get('/', cartController.cartView);
router.get("/delete/:id", cartController.deleteOfTheCart);
router.get("/deleteOne/:id", cartController.deleteOne);
router.get("/addOne/:id", cartController.addOne);
router.get("/:id", cartController.addToCart);

module.exports = router;
