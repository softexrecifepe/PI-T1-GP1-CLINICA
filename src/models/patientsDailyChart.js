const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const PatientsDailyChart = sequelize.define('PatientsDailyChart', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    avaliationTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    symptoms: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    alimentation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    feedingProbe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    temperature: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    glicose: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    bpm: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    fr: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    normalUrine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isBetter: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    generalStatus: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    vetNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  module.exports = { PatientsDailyChart }