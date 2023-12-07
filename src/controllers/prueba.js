const db = require("../database/models");
const sequelize = db.sequelize;

const prueba = {
    list: async function(req, res){
        let users = await db.Product.findAll({
            include: ["categorias", "marcas", "usuarios" ]
        });
        res.send(users);
    },
}
 
module.exports = prueba;