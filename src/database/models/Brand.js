module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define
    (
        "Brand",
        {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(300),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(600),
                allowNull: true,
            }
        },{
            tableName: "brand",
            timestamps: false,
        }
    );

    Brand.associate = function(models){
        Brand.hasMany(models.Product, {
            as: "productosM",
            foreignKey: "id_brand"
        })
    }

    return Brand;
}