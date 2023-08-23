const path = require('path');
const productCartControlador = {
    inicio: (req, res) => res.sendFile(path.join(__dirname, '../views/productCart.html'))
}
module.exports = productCartControlador;