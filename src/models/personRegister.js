import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js"

const PersonRegister = sequelize.define('PersonRegister', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
    }
}, {
    tableName: 'personregister',
    timestamps: false,
});

export default PersonRegister