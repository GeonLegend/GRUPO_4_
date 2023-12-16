const express = require('express');
const multer = require('../middlewares/multerProduct.js')
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', productController.index);
router.get('/lista-de-productos', productController.showProductList);
router.get('/vista-crear-producto', productController.showCreateView);
router.post('/crear-producto', multer.single("productImage"), productController.create);
router.get('/vista-editar-producto/:id', productController.showEditView);
router.put('/editar-producto', productController.updateProduct);
router.get('/eliminar/:id', productController.borrado);
router.get('/:id', productController.detail);

module.exports = router;