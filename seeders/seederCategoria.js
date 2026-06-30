const { Categoria } = require("../models");

const categorias = [
    {
        nombre: "Transporte",
        descripcion: "Beneficios relacionados con movilidad urbana.",
    },
    {
        nombre: "Educación",
        descripcion: "Cursos, talleres y capacitaciones.",
    },
    {
        nombre: "Alimentación",
        descripcion: "Apoyo en vales y descuentos de comida.",
    },
    {
        nombre: "Salud",
        descripcion: "Atención psicológica y médica.",
    },
    {
        nombre: "Materiales",
        descripcion: "Descuentos en útiles escolares y libros.",
    },
    {
        nombre: "Tecnología",
        descripcion: "Acceso a herramientas digitales y software.",
    },
    {
        nombre: "Cultura",
        descripcion: "Actividades culturales y acceso a bibliotecas.",
    },
];

async function seedCategorias() {
    for (const categoria of categorias) {
        const [registro, created] = await Categoria.findOrCreate({
            where: { nombre: categoria.nombre },
            defaults: categoria,
        });

        if (!created) {
            await registro.update({ descripcion: categoria.descripcion });
        }
    }
}

module.exports = seedCategorias;

if (require.main === module) {
    seedCategorias()
        .then(() => console.log("Categorías sembradas correctamente"))
        .catch((error) => {
            console.error("Error al sembrar categorías", error);
            process.exit(1);
        });
}
