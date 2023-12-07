module.exports = (sequelize, DataTypes) => {
    const UserType = sequelize.define
    (
        "UserType",
        {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(80),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(240),
                allowNull: false,
            }
        },{
            tableName: "user_type",
            timestamps: false,
        }
    );

    UserType.associate = function(models){
        UserType.hasMany(models.User, {
            as: "usuariosT",
            foreignKey: "id_user_type"
        })
    }

    return UserType;
}