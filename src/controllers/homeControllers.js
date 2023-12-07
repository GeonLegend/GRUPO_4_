const fs = require('fs');
const path = require('path');
const model = require("../data/model");
const { Console } = require('console');
const products = model.getProduct();

const homeControlador = {
    inicio: (req, res) => res.render('home', { products: products }),
    userFind: (req, res) => {
        const user = req.session.user;
        console.log(user)
        res.render('home', { user: user });
    }
};
module.exports = homeControlador;