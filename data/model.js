const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, "products.json");
const usersPath = path.join(__dirname, "users.json");

let model = {
    getProduct : () => {
        const content = fs.readFileSync(notesPath, 'utf8');
        return JSON.parse(content || '[]')
    },
    writeProduct : (notes) => {
        fs.writeFileSync(
            notesPath, 
            JSON.stringify(notes, null, 2),
        )
    },
    

    getProduct : () => {
        /* Se le el contenido del json */
        const content = fs.readFileSync(productsPath, 'utf8');
        /* Se transforma el json a un objeto literal */
        return JSON.parse(content || '[]')
    },
    WriteProduct : function(product) {
        let products = this.getProduct();
        products.push(product);

        fs.writeFileSync(
            /* Ruta del json */
            productsPath, 
            /* Se transforma el objeto literal que recibe como parametro a un json */
            /* El tercer parametro son los espacios de lineas */
            JSON.stringify(products, null, 2),
        )
    },

    getUser : () => {
        /* Se le el contenido del json */
        const content = fs.readFileSync(usersPath, 'utf8');
        /* Se transforma el json a un objeto literal */
        return JSON.parse(content || '[]')
    },
    writeUser : function(user) {
        let users = this.getUser();
        users.push(user);

        fs.writeFileSync(
            /* Ruta del json */
            usersPath, 
            /* Se transforma el objeto literal que recibe como parametro a un json */
            /* El tercer parametro son los espacios de lineas */
            JSON.stringify(users, null, 2),
        )
    },
}

module.exports = model;