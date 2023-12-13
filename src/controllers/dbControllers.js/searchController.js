const model = require("../../data/model");
products = model.getProduct();

module.exports = {
    findProduct: (req, res) => {
        let findProducts = products.filter(product => {
            return product.name.toLowerCase().includes(req.query.search) || product.name.includes(req.query.search)
        });        

        res.render('products', { products: findProducts})
    }
}