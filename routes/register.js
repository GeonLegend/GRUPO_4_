const express = require('express')
const router = express.Router();
const registerControlador = require('../controllers/registerControllers.js')

router.get('/', registerControlador.inicio);

module.exports = router;