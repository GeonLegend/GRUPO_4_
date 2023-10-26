const express = require('express');
const router = express.Router();
const productController = require('../controllers/createProductController');
router.get('/crear-producto', productController.inicio);
module.exports = router;