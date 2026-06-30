const { Categoria, Beneficio } = require("../models");

const beneficios = [
    {
        titulo: "Beca de Transporte",
        descripcion: "Apoyo económico para cubrir gastos de movilidad urbana.",
        disponibilidad: true,
        categoria: "Transporte",
    },
    {
        titulo: "Curso de Programación",
        descripcion: "Capacitación inicial en desarrollo web con HTML, CSS y JavaScript.",
        disponibilidad: true,
        categoria: "Tecnología",
    },
    {
        titulo: "Taller de Inserción Laboral",
        descripcion: "Orientación para entrevistas, armado de CV y búsqueda de empleo.",
        disponibilidad: true,
        categoria: "Educación",
    },
    {
        titulo: "Beneficio Alimentario",
        descripcion: "Acceso a vales de alimentación para estudiantes en situación vulnerable.",
        disponibilidad: true,
        categoria: "Alimentación",
    },
    {
        titulo: "Atención Psicológica",
        descripcion: "Sesiones gratuitas de apoyo emocional y orientación psicológica.",
        disponibilidad: true,
        categoria: "Salud",
    },
    {
        titulo: "Descuento en Materiales",
        descripcion: "Reducción de costos en la compra de libros y útiles escolares.",
        disponibilidad: true,
        categoria: "Materiales",
    },
    {
        titulo: "Acceso a Biblioteca Digital",
        descripcion: "Plataforma online con recursos académicos y material de estudio.",
        disponibilidad: true,
        categoria: "Cultura",
    },
];

async function seedBeneficios() {
    const categorias = await Categoria.findAll();
    const categoriaPorNombre = Object.fromEntries(categorias.map((categoria) => [categoria.nombre, categoria.id]));

    for (const beneficio of beneficios) {
        const { categoria, ...datosBeneficio } = beneficio;
        const categoriaId = categoriaPorNombre[categoria];

        const [registro, created] = await Beneficio.findOrCreate({
            where: { titulo: beneficio.titulo },
            defaults: {
                ...datosBeneficio,
                categoriaId,
            },
        });

        if (!created) {
            await registro.update({
                descripcion: datosBeneficio.descripcion,
                disponibilidad: datosBeneficio.disponibilidad,
                categoriaId,
            });
        }
    }
}

module.exports = seedBeneficios;

if (require.main === module) {
    seedBeneficios()
        .then(() => console.log("Beneficios sembrados correctamente"))
        .catch((error) => {
            console.error("Error al sembrar beneficios", error);
            process.exit(1);
        });
}