const express = require('express')
const router = express.Router();
const loginControlador = require('../controllers/loginControllers.js');

router.get('/', loginControlador.inicio);
router.get('/login', loginControlador.getLogin);
router.post('/login', loginControlador.postLogin);
router.get('/logout', loginControlador.logout);

module.exports = router;