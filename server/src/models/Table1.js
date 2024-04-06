const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Table 1",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }

        }
    );
};