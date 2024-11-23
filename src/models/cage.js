const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

const Cage = sequelize.define('Cage', {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
    cageNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
}
  });

  module.exports = { Cage }