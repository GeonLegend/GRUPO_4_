module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define
    (
        "Product",
        {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            idCategory: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,  
                field: "id_category",
            },
            idProductFeatures: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                field: "id_product_features",
            },
            name: {
                type: DataTypes.STRING(120),
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            discount: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                defaultValue: 0,
            },
            
            image: {
                type: DataTypes.STRING(300),
                allowNull: false,
            }
        },{
            tableName: "products",
            timestamps: false,
        } 
    );

    Product.associate = function (models){
        Product.belongsTo(models.Category, {
            as: "categorias",
            foreignKey: "id_category"
        }),
        Product.belongsTo(models.ProductFeatures, {
            as: "productoCaracteristicas",
            foreignKey: "id_product_features"
        }),
        Product.belongsToMany(models.User, {
            as: "usuarios",
            through: "user_product",
            foreignKey: "id_product",
            otherKey: "id_user",
            timestamps: false
        })
    }
    
    return Product;

}
