const db = require("../../database/models");

module.exports = {
    index: async (req, res) => {
        const producstTotal = await db.Product.count();
        const usersTotal = await db.User.count();
        const categoriesTotal = await db.Category.count();
        
        return res.status(200).json([
            {
                title: "Productos",
                icon: "fa-brands fa-product-hunt",
                color: "primary",
                count: producstTotal,
                config: {
                    name: "Tarjeta especial"
                }
            },
            {
                title: "Usuarios",
                icon: "fa-regular fa-user",
                color: "success",
                count: usersTotal,
                config: {
                    name: "Tarjeta especial"
                }
            },
            {
                title: "Categorias",
                icon: "fa-solid fa-layer-group",
                count: categoriesTotal,
                config: {
                    name: "Tarjeta especial"
                }
            }
        ])
    }
}
