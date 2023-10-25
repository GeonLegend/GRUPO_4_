const express = require('express');
const router = express.Router();
const productController = require('../controllers/editProductController');
router.put('/editar-producto', productController.updateProduct);
router.get('/vista-editar-producto/:id', productController.showEditView);
router.get('/lista-de-productos', productController.showProductList);
module.exports = router;