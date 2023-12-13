const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const homeControlador = {
    
    userFind: async (req, res) => {
        const user = req.session.user;

        let products = await db.Product.findAll();
        res.render("home", { products, user: user})
    }
};

module.exports = homeControlador;