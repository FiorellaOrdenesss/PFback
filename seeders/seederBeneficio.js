const { Beneficio } = require("../models/index")
const beneficios = [];

beneficios.push(
    {
        titulo: "Beca de Transporte",
        descripcion: "Apoyo económico para cubrir gastos de movilidad urbana.",
        disponibilidad: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: "Curso de Programación",
        descripcion: "Capacitación inicial en desarrollo web con HTML, CSS y JavaScript.",
        disponibilidad: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: "Taller de Inserción Laboral",
        descripcion: "Orientación para entrevistas, armado de CV y búsqueda de empleo.",
        disponibilidad: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: "Beneficio Alimentario",
        descripcion: "Acceso a vales de alimentación para estudiantes en situación vulnerable.",
        disponibilidad: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: "Atención Psicológica",
        descripcion: "Sesiones gratuitas de apoyo emocional y orientación psicológica.",
        disponibilidad: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: "Descuento en Materiales",
        descripcion: "Reducción de costos en la compra de libros y útiles escolares.",
        disponibilidad: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        titulo: "Acceso a Biblioteca Digital",
        descripcion: "Plataforma online con recursos académicos y material de estudio.",
        disponibilidad: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    }

)
Beneficio.bulkCreate(beneficios);