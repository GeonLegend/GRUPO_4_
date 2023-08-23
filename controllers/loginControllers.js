const path = require('path');
const loginControlador = {
    inicio: (req, res) => res.sendFile(path.join(__dirname, '../views/users/login.html'))
}
module.exports = loginControlador;