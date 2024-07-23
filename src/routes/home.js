const express = require('express')
const router = express.Router();
const dbHomeControlador = require('../controllers/dbControllers.js/homeController.js');

router.get('/', dbHomeControlador.userFind);
router.get('/search', dbHomeControlador.findProduct);

module.exports = router;