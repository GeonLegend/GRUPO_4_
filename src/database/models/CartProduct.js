module.exports = (sequelize, dataTypes) => {
    const CartProduct = sequelize.define
    (
        "CartProduct",
        {
            id: {
                type: dataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            idProduct: {
                type: dataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                field: "id_product",
            },
            idCart: {
                type: dataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                field: "id_cart",
            },
            number: {
                type: dataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            }
        },{
            tableName: "carts_products",
            timestamps: false,
        }
    );

    return CartProduct;
}