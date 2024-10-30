const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Role = sequelize.define("Role", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    personregisterid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    roletype: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            isIn: [["Tutor", "Vet", "Nurse"]]
        },
    },
    crmv: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
}, {
    tableName: "role",
    timestamps: false,
});

module.exports = Role;