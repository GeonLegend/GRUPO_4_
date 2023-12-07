const db = require("../database/models");
const sequelize = db.sequelize;

const prueba = {
    list: async function(req, res){
        let users = await db.User.findAll({
            include: ["tiposDeUsuario", "productos" ]
        });
        res.send(users);
    },
}
 
module.exports = prueba;