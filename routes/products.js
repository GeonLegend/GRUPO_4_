const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', productController.index);
router.get('/vista-crear-producto', productController.showCreateView);
router.post('/crear-producto', productController.create);
router.get('/vista-editar-producto/:id', productController.showEditView);
router.put('/editar-producto', productController.updateProduct);
router.get('/lista-de-productos', productController.showProductList);

module.exports = router;