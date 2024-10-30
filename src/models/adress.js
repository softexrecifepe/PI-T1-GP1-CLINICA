const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Address = sequelize.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    addressstreet: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    addressnumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    postalcode: {
        type: DataTypes.STRING(9),
        allowNull: false,
    },
    personregisterid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "address",
    timestamps: false,
});

module.exports = Address;
