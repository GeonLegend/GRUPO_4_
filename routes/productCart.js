const express = require('express')
const router = express.Router();
const productCartControlador = require('../controllers/productCartControllers.js');

router.get('/', productCartControlador.inicio);

module.exports = router;