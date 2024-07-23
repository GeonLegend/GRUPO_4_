const path = require('path');
const db = require('../../database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;

const homeControlador = {
    userFind: async (req, res) => {
        let products = await db.Product.findAll();
        res.render("home", { products });
    },

    findProduct: async(req, res) => {
        const products = await db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.query.search}%`
                }
            }
        });

        res.render('products', { products })
    },
};

module.exports = homeControlador;