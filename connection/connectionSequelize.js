const { Sequelize } = require ("sequelize");

const sequelize = new Sequelize('MASCOTS', "root", 'admin', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {sequelize};