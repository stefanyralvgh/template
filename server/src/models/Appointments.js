const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define(
        "Appointments",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            options: {
                type: DataTypes.ENUM("Option 1", "Option 2", "Option 3"),
                allowNull: false,
            }

        }
    );
};