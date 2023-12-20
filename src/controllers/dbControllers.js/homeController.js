const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const homeControlador = {
    userFind: async (req, res) => {
        let products = await db.Product.findAll();
        res.render("home", { products });
    },

    findProduct: async(req, res) => {
        const products = await db.Product.findAll();
        
        let findProducts = products.filter(product => {
            return product.name.toLowerCase().includes(req.query.search) || product.name.includes(req.query.search)
        });        

        res.render('products', { products: findProducts})
    }
};

module.exports = homeControlador;