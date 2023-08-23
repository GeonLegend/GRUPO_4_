const path = require('path');
const productDetailControlador = {
    inicio: (req, res) => res.sendFile(path.join(__dirname, '../views/productDetail.html'))
}
module.exports = productDetailControlador;