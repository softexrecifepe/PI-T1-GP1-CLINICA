const { Sequelize } = require ("sequelize");
require("dotenv").config();

// cria a conexão entre o banco de dados MASCOTS e o sistema
const sequelize = new Sequelize('MASCOTS', "root", `${process.env.mysql_password}`, {
    host: "localhost",
    dialect: "mysql"
});

//exporta a conexão
module.exports = {sequelize};