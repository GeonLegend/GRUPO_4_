const express = require("express");
const router = express.Router();
const searchController = require('../controllers/dbControllers.js/searchController');

router.get('/', searchController.findProduct)

module.exports = router;