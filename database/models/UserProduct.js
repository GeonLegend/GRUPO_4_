module.exports = (sequelize, DataTypes) => {
    const UserProduct = sequelize.define
    (
        "UserProduct",
        {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            idUser: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                field: "id_user",
            },
            idProduct: { 
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                field: "id_product",
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },{
            tableName: "user_product",
            timestamps: false,
        }
    );
    

    return UserProduct;
}