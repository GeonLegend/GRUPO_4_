const path = require("path");
const productModel = require("../data/model");

products = productModel.getProduct();

const productController = {
    index: (req, res) => res.render("products", { products }),

    showCreateView: (req, res) => res.render('createProduct'),

    create: (req, res) => {
        let product = {
            id: products[products.length - 1].id + 1,
            category: req.body.productCategory,
            name: req.body.productName,
            image: req.file ? req.file.filename : 'default.jpg',
            price: req.body.productPrice,
            discount: req.body.productDiscount,
            stock: req.body.productStock,
            description: req.body.productoDescription,
            warranty: req.body.productWarranty,
            rating: req.body.productRating,
        }
        productModel.witeProduct(product);
        res.redirect('/product/lista-de-productos');
    },

    showProductList: (req, res) => {
        const products = productModel.getProduct();
        res.render('listaProductos', { products });
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

    updateProduct: (req, res) => {
        productModel.updateProduct(req.body.productId, req.body.productCategory, req.body.productName, req.body.image, req.body.productPrice, req.body.productDiscount, req.body.productStock, req.body.productDescription, req.body.productWarranty, req.body.productRating);
        res.redirect('/product/lista-de-productos');
    },
    
    
};

module.exports = productController;