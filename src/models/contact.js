const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Contact = sequelize.define("Contact", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    phonenumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
});

module.exports = { Contact };