const express = require('express')
const router = express.Router();
const loginControlador = require('../controllers/loginControllers.js');

router.get('/', loginControlador.inicio);

module.exports = router;