const path = require('path');
const registerControlador = {
    inicio: (req, res) => res.sendFile(path.join(__dirname, '../views/register.html'))
}
module.exports = registerControlador;