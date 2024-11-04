const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const PersonRegister = sequelize.define('PersonRegister', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
    }
});

module.exports = {PersonRegister};