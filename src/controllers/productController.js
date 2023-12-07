const path = require("path");
const productModel = require("../data/model");

products = productModel.getProduct();

const productController = {
    index: (req, res) => res.render("products", { products }),

    showProductList: (req, res) => {
        const products = productModel.getProduct();
        res.render('listaProductos', { products });
    },

    detail: function(req, res) {
        let details = productModel.getProductById(req.params.id)
        res.render ("productDetail", { details }); 
    },

    showCreateView: (req, res) => res.render('createProduct'),

    create: (req, res) => {
        let product = {
            id: products[products.length - 1].id + 1,
            category: req.body.productCategory,
            name: req.body.productName,
            image: req.file ? req.file.filename : 'default.jpg',
            price: parseFloat(req.body.productPrice),
            discount: parseInt(req.body.productDiscount),
            stock: parseInt(req.body.productStock),
            description: req.body.productDescription,
            warranty: parseInt(req.body.productWarranty),
            rating: parseInt(req.body.productRating),
        }
        productModel.witeProduct(product);
        res.redirect('/product/lista-de-productos');
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

    borrado:function (req, res) {
        const id = req.params.id;
        const actuProductos = products.filter((producto) => producto.id != id);
        productModel.writeProducts(actuProductos);
        res.redirect("/product/lista-de-productos");
    }
};

module.exports = productController;