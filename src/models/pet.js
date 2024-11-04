const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Pet = sequelize.define('Pet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    sex: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    behavior: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    neurologicalDisorders: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  module.exports = { Pet }