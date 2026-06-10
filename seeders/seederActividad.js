// seeders/seederActividad.js
const { Actividad } = require("../models/index");

const actividades = [];

actividades.push(
    {
        nombre: "Charla sobre movilidad",
        descripcion: "Sesión informativa sobre el uso de la beca de transporte.",
        fecha: new Date("2026-06-20"),
        ubicacion: "Montevideo",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Workshop de programación",
        descripcion: "Introducción práctica a HTML, CSS y JavaScript.",
        fecha: new Date("2026-06-25"),
        ubicacion: "Canelones",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Taller de CV",
        descripcion: "Cómo armar un currículum y prepararse para entrevistas.",
        fecha: new Date("2026-07-01"),
        ubicacion: "Montevideo",

        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Entrega de vales",
        descripcion: "Distribución de vales de alimentación para estudiantes.",
        fecha: new Date("2026-07-05"),
        ubicacion: "Canelones",

        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Sesión de apoyo emocional",
        descripcion: "Encuentro grupal con psicólogos para orientación.",
        fecha: new Date("2026-07-10"),
        ubicacion: "Montevideo",

        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Feria de útiles escolares",
        descripcion: "Evento con descuentos en materiales de estudio.",
        fecha: new Date("2026-07-15"),
        ubicacion: "Canelones",

        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Presentación de biblioteca digital",
        descripcion: "Demostración de la plataforma online de recursos académicos.",
        fecha: new Date("2026-07-20"),
        ubicacion: "Montevideo",

        createdAt: new Date(),
        updatedAt: new Date(),
    }
);

Actividad.bulkCreate(actividades);
