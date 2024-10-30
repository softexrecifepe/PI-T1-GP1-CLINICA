const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Contact = sequelize.define("Contact", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    personregisterid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    phonenumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
}, {
    tableName: "contact",
    timestamps: false,
});

module.exports = Contact;
