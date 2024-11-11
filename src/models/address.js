const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Address = sequelize.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    addressStreet: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    addressNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.STRING(9),
        allowNull: false,
    }
});

module.exports = { Address };