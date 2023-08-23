const path = require('path');
const loginControlador = {
    inicio: (req, res) => res.sendFile(path.join(__dirname, '../views/login.html'))
}
module.exports = loginControlador;