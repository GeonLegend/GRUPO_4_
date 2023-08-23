const express = require('express')
const router = express.Router();
const homeControlador = require('../controllers/homeControllers.js')

router.get('/', homeControlador.inicio);

module.exports = router;