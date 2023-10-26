const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, "products.json");
const usersPath = path.join(__dirname, "users.json");
let model = {
    getProduct : () => {
        /* Se le el contenido del json */
        const content = fs.readFileSync(productsPath, 'utf8');
        /* Se transforma el json a un objeto literal */
        return JSON.parse(content || '[]')
    },
    getProductById: function (productId) {
        let products = this.getProduct();
        return products.find((product) => product.id == productId);
    },
    writeProducts : function(products) {
        fs.writeFileSync(
            /* Ruta del json */
            productsPath, 
            /* Se transforma el objeto literal que recibe como parametro a un json */
            /* El tercer parametro son los espacios de lineas */
            JSON.stringify(products, null, 2),
        )
    },
    updateProduct: function (productId, productCategory, productName, productImage, productPrice, productDiscount, productStock, productDescription, productWarranty, productRating) {
        const products = this.getProduct();
        for(let i = 0; i < products.length; i++){
            if (products[i].id == productId) {
                products[i].category = productCategory;
                products[i].name = productName;
                if (productImage) {
                    products[i].image = '/ruta/de/la/imagen/' + productImage.filename;
                }
                products[i].price = productPrice;
                products[i].discount = productDiscount;
                products[i].stock = productStock;
                products[i].description = productDescription;
                products[i].warranty = productWarranty;
                products[i].rating = productRating;
                break;
            }
        };
        this.writeProducts(products);
    },
    witeProduct : function(product) {
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