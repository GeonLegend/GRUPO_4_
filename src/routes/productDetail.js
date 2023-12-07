const express = require('express')
const router = express.Router();
const productDetailControlador = require('../controllers/productDetailControllers.js');

router.get('/', productDetailControlador.inicio);

module.exports = router;