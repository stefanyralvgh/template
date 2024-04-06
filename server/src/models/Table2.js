const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Table 2",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            options: {
                type: DataTypes.ENUM("Option 1", "Option 2", "Option 3"),
                allowNull: false,
            }

        }
    );
};