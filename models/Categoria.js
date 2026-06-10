// models/Categoria.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Categoria = sequelize.define("Categoria", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: true,
},
    {
        tableName: "categorias",
        timestamps: true,
    });

module.exports = Categoria;
