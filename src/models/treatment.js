const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Treatment = sequelize.define('Treatment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    exams: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    symptoms: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    diagnosis: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recomendations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isAlergic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    alergicTo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    specialConditions: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dischargePreview: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dischargeNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  module.exports = { Treatment }