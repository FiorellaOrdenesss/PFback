const { Categoria } = require("../models/index");

const categorias = [];

categorias.push(
    {
        nombre: "Transporte",
        descripcion: "Beneficios relacionados con movilidad urbana.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Educación",
        descripcion: "Cursos, talleres y capacitaciones.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Alimentación",
        descripcion: "Apoyo en vales y descuentos de comida.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Salud",
        descripcion: "Atención psicológica y médica.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Materiales",
        descripcion: "Descuentos en útiles escolares y libros.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Tecnología",
        descripcion: "Acceso a herramientas digitales y software.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        nombre: "Cultura",
        descripcion: "Actividades culturales y acceso a bibliotecas.",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
);

Categoria.bulkCreate(categorias);
