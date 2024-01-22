const db = require("../../database/models");

module.exports = {
    detail: async (req, res) => {
        const product = await db.Product.findByPk(req.params.id, { include: ["categorias", "productoCaracteristicas", "usuarios"]});
        product.image = req.protocol + '://' + req.get('host') + '/images/products/' + product.image;
        return res.status(200).json(product)
    },
    
    createdLast: async (req, res) => {    
        return res.status(200).json(await db.Product.findOne(
            {
                include: ["productoCaracteristicas"],
                order: [ ["id", "DESC"] ],
            }
        ))
    }

}
