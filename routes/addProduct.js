const express = require('express');
const router = express.Router();
const mainController = require('../controllers/addProductController');

router.get('/addIndex', mainController.index);

router.post('/addIndex/addProduct', mainController.create);
router.post('/addIndex/addProduct/edit', mainController.edit);
router.get('/addIndex/addProduct/delete/:id', mainController.delete);

module.exports = router;