const path = require('path');
const model = require("../data/model");
products = model.getProduct();

const productDetailControlador = {
    inicio: (req, res) => res.render('productDetail', { product: products })
};
module.exports = productDetailControlador;