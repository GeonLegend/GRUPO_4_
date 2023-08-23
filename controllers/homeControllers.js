const path = require('path');
const homeControlador = {
    inicio: (req, res) => res.sendFile(path.join(__dirname, '../views/home.html'))
}
module.exports = homeControlador;