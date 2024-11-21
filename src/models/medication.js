const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Medication = sequelize.define('Medication', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    doseByKg: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    administrationRoute: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    administredAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    frequency: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    isAdministred: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  module.exports = { Medication }