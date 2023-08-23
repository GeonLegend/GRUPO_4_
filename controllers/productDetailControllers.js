const path = require('path');
const productDetailControlador = {
    inicio: (req, res) => res.sendFile(path.join(__dirname, '../views/products/productDetail.html'))
}
module.exports = productDetailControlador;