const express = require("express");
const user = require("../../controllers/apis/user");

const router = express.Router();

router.get("/:id", user.detail);
router.get("/userLast", user.createdLast);

module.exports = router;

