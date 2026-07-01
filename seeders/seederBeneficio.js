const { Categoria, Beneficio } = require("../models");

const beneficios = [
  {
    titulo: "Pensión por Invalidez",
    descripcion:
      "Prestación económica destinada a personas con discapacidad que cumplen con los requisitos establecidos por el BPS.",
    disponibilidad: true,
    categoria: "Salud",
    imagen: "/beneficios/pension_invalidez.png",
    link: "https://www.bps.gub.uy",
  },
  {
    titulo: "Credencial de Discapacidad",
    descripcion:
      "Documento que permite acceder a diversos beneficios y programas destinados a personas con discapacidad.",
    disponibilidad: true,
    categoria: "Salud",
    imagen: "/beneficios/credencial_discapacidad.png",
    link: "https://www.gub.uy",
  },
  {
    titulo: "Ayudas Técnicas",
    descripcion:
      "Acceso a sillas de ruedas, bastones, audífonos y otros elementos de apoyo para mejorar la autonomía.",
    disponibilidad: true,
    categoria: "Salud",
    imagen: "/beneficios/ayudas_tecnicas.png",
    link: "https://www.gub.uy",
  },
  {
    titulo: "Transporte Accesible",
    descripcion:
      "Programas y beneficios destinados a facilitar el traslado de personas con discapacidad.",
    disponibilidad: true,
    categoria: "Transporte",
    imagen: "/beneficios/transporte_accesible.png",
    link: "https://www.gub.uy",
  },
  {
    titulo: "Inserción Laboral Inclusiva",
    descripcion:
      "Programas de capacitación y oportunidades laborales para personas con discapacidad.",
    disponibilidad: true,
    categoria: "Educación",
    imagen: "/beneficios/insercion_laboral.png",
    link: "https://www.gub.uy",
  },
  {
    titulo: "Educación Inclusiva",
    descripcion:
      "Apoyos educativos, becas y recursos para garantizar una educación accesible e inclusiva.",
    disponibilidad: true,
    categoria: "Educación",
    imagen: "/beneficios/educacion_inclusiva.png",
    link: "https://www.gub.uy",
  },
  {
    titulo: "Beneficios en Salud",
    descripcion:
      "Acceso a rehabilitación, tratamientos especializados y servicios de apoyo en salud.",
    disponibilidad: true,
    categoria: "Salud",
    imagen: "/beneficios/beneficios_salud.png",
    link: "https://www.gub.uy",
  },
  {
    titulo: "Descuentos y Beneficios Comerciales",
    descripcion:
      "Descuentos especiales en comercios, farmacias, actividades recreativas y servicios adheridos.",
    disponibilidad: true,
    categoria: "Materiales",
    imagen: "/beneficios/descuentos_comerciales.png",
    link: "https://www.gub.uy",
  },
];

async function seedBeneficios() {
  const categorias = await Categoria.findAll();

  const categoriaPorNombre = Object.fromEntries(
    categorias.map((categoria) => [categoria.nombre, categoria.id])
  );

  for (const beneficio of beneficios) {
    const { categoria, ...datosBeneficio } = beneficio;

    const categoriaId = categoriaPorNombre[categoria];

    const [registro, created] = await Beneficio.findOrCreate({
      where: {
        titulo: beneficio.titulo,
      },
      defaults: {
        ...datosBeneficio,
        categoriaId,
      },
    });

    if (!created) {
      await registro.update({
        titulo: datosBeneficio.titulo,
        descripcion: datosBeneficio.descripcion,
        disponibilidad: datosBeneficio.disponibilidad,
        imagen: datosBeneficio.imagen,
        link: datosBeneficio.link,
        categoriaId,
      });
    }
  }

  console.log("✅ Beneficios sembrados correctamente.");
}

module.exports = seedBeneficios;

if (require.main === module) {
  seedBeneficios()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("❌ Error al sembrar beneficios:", error);
      process.exit(1);
    });
}