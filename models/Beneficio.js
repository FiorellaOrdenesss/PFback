// models/Beneficio.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Beneficio = sequelize.define(
  "Beneficio",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    disponibilidad: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Beneficio;
