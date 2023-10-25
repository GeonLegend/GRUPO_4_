const productModel = require('../data/model');
module.exports = {
    updateProduct: (req, res) => {
        productModel.updateProduct(req.body.productId, req.body.productCategory, req.body.productName, req.body.image, req.body.productPrice, req.body.productDiscount, req.body.productStock, req.body.productDescription, req.body.productWarranty, req.body.productRating);
        res.redirect('/lista-de-productos');
    },
    showEditView: (req, res) => {
        const productId = req.params.id;
        const product = productModel.getProductById(productId);
        if (product) {
            res.render('editProduct', { product });
            return;
        }
        res.status(404).send('Producto no encontrado');
    },
    showProductList: (req, res) => {
        const products = productModel.getProduct();
        res.render('listaProductos', { products });
    },
}