module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define
    (
        "Category",
        {
            id: {
                type: dataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: dataTypes.STRING(80),
                allowNull: false,
            },
            description: {
                type: dataTypes.STRING(600),
                allowNull: true,
            },
        },{
            tableName: "category",
            timestamps: false,
        }
    );

    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: "productosC",
            foreignKey: "id_category",
        })
    }

    return Category;
}