const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Cage = sequelize.define('Cage', {
    cageNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  module.exports = { Cage }