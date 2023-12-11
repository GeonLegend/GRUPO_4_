module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define
    (
        "User",
        {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            firstName: {
                type: DataTypes.STRING(120),
                allowNull: false,
                field: "first_name",
            },
            lastName: {
                type: DataTypes.STRING(80),
                allowNull: false,
                field: "last_name",
            },
            password: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(120),
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING(1),
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING(80),
                allowNull: false,
            },
            dateOfBirth: {
                type: DataTypes.DATE,
                allowNull: false,
                field: "date_of_birth",
            },
            avatar: {
                type: DataTypes.STRING(80),
                allowNull: false,
            },
            idUserType: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                field: "id_user_type",
                defaultValue: 2,
            },  
        },{
            tableName: "users",
            timestamps: false,
        }
    );

    User.associate = function(models){
        User.belongsTo(models.UserType, {
            as: "tiposDeUsuario",
            foreignKey: "id_user_type"
        }),
        User.belongsToMany(models.Product, {
            as: "productos",
            through: "user_product",
            foreignKey: "id_user",
            otherKey: "id_product",
            timestamps: false
        })
    }

    return User;
}