const path = require('path');
const model = require("../data/model");
const products = model.getProduct();

const homeControlador = {
    inicio: (req, res) => res.render('home', { products: products })
};
module.exports = homeControlador;