// models/Actividad.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Beneficio = require("./Beneficio");

const Actividad = sequelize.define("Actividad", {
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
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

// Relación con Beneficio
Actividad.belongsTo(Beneficio, { foreignKey: "beneficioId" });
Beneficio.hasMany(Actividad, { foreignKey: "beneficioId" });

module.exports = Actividad;
