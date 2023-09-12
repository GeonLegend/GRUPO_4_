const path = require("path");
const model = require("../data/model");

products = model.getProduct();

const productController = {
    index: (req, res) => res.render("products", { products })
};

module.exports = productController;