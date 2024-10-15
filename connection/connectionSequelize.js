const { Sequelize } = require ("sequelize");
require("dotenv").config();

const sequelize = new Sequelize('MASCOTS', "root", `${process.env.mysql_password}`, {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {sequelize};