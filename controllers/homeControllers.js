const fs = require('fs');
const path = require('path');
const model = require("../data/model");
const products = model.getProduct();

const homeControlador = {
    inicio: (req, res) => res.render('home', { products: products }),
    userFind: (req, res) => {
        const usersData = fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'));
        const users = JSON.parse(usersData);
        const user = req.session.user;
        res.render('home', { user: user });
    }
};
module.exports = homeControlador;