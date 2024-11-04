const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Patient = sequelize.define('Patient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admission: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    atArrivalPatientStatus: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    injuries: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    medicatedAtArrival: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    contagious: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
  });

  module.exports = { Patient }