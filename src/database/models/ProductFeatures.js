module.exports = (sequelize, DataTypes) => {
    const ProductFeatures = sequelize.define
    (
        "ProductFeatures",
        {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            brand: {
                type: DataTypes.STRING(300),
                allowNull: false,

            },
            stock: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: 0,
            },
            description: {
                type: DataTypes.STRING(1800),
                allowNull: false,
            },
            warranty: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            rating: {
                type: DataTypes.FLOAT.UNSIGNED,
                allowNull: false,
            },
        },{
            tableName: "products_features",
            timestamps: false,
        }
    );

    ProductFeatures.associate = function(models){
        ProductFeatures.hasMany(models.Product, {
            as: "productosC",
            foreignKey: "id_product_features"
        })
    }

    return ProductFeatures;
}