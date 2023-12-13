const express = require('express')
const router = express.Router();
const homeControlador = require('../controllers/homeControllers.js');
const dbHomeControlador = require('../controllers/dbControllers.js/homeController.js');

/* router.get('/', homeControlador.inicio); */
router.get('/', homeControlador.userFind);

module.exports = router;