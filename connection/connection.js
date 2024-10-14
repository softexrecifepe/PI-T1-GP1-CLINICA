import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('MASCOTS', "root", 'admin', {
    host: "localhost",
    dialect: "mysql"
});