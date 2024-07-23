module.exports = (sequelize, dataTypes) => {
    const Cart = sequelize.define
    (
        "Cart",
        {
            id: {
                type: dataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            idUser: {
                type: dataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                field: "id_user",
            },
            status: {
                type: dataTypes.BOOLEAN,
                allowNull: false,
            }
        },{
            tableName: "carts",
            timestamps: false,
        }
    );

    Cart.associate = function(models){
        Cart.belongsTo(models.User, {
            as: "usuarioDelCarrito",
            foreignKey: "id_user",
        }),
        Cart.belongsToMany(models.Product, {
            as: "productosDelCarrito",
            through: models.CartProduct,
            foreignKey: "id_cart",
            otherKey: "id_product",
            timestamps: false
        })        
    }

    return Cart;
}