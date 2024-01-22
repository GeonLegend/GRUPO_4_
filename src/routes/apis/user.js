const express = require("express");
const user = require("../../controllers/apis/user");

const router = express.Router();

router.get("/userLast", user.createdLast);
router.get("/:id", user.detail);

module.exports = router;

