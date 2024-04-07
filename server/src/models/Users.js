const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define(
        "Users",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,

            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                isEmail: true,
                notNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                isEmail: true,
                notNull: false,
            },
        },
        {
            timestamps: false
        }
    );
};