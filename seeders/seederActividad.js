const { Actividad } = require("../models");

const actividades = [
  {
    nombre: "Fútbol Inclusivo",
    descripcion:
      "Espacio deportivo adaptado para personas con discapacidad. Promueve el trabajo en equipo, la actividad física y la inclusión.",
    fecha: new Date("2026-07-05"),
    ubicacion: "Montevideo",
    imagen: "/actividades/futbol_inclusivo.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Natación Inclusiva",
    descripcion:
      "Clases de natación adaptadas con apoyo de profesionales especializados para todas las edades.",
    fecha: new Date("2026-07-10"),
    ubicacion: "Canelones",
    imagen: "/actividades/natacion_inclusiva.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Boccia Adaptado",
    descripcion:
      "Actividad recreativa y competitiva dirigida a personas con discapacidad motriz.",
    fecha: new Date("2026-07-15"),
    ubicacion: "Maldonado",
    imagen: "/actividades/boccia_adaptado.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Taller de Arte y Pintura",
    descripcion:
      "Espacio creativo para desarrollar habilidades artísticas en un entorno inclusivo.",
    fecha: new Date("2026-07-20"),
    ubicacion: "Colonia",
    imagen: "/actividades/taller_arte_pintura.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Teatro Inclusivo",
    descripcion:
      "Taller de expresión corporal y actuación abierto a personas con y sin discapacidad.",
    fecha: new Date("2026-07-25"),
    ubicacion: "Montevideo",
    imagen: "/actividades/teatro_inclusivo.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Informática Inclusiva",
    descripcion:
      "Capacitación en herramientas digitales y computación accesible.",
    fecha: new Date("2026-08-01"),
    ubicacion: "Rivera",
    imagen: "/actividades/informatica_inclusiva.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Lengua de Señas Uruguaya",
    descripcion:
      "Curso introductorio para fomentar la comunicación inclusiva.",
    fecha: new Date("2026-08-08"),
    ubicacion: "Montevideo",
    imagen: "/actividades/lengua_senas_uruguaya.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Musicoterapia",
    descripcion:
      "Actividad terapéutica mediante la música para favorecer la expresión y el bienestar.",
    fecha: new Date("2026-08-12"),
    ubicacion: "Salto",
    imagen: "/actividades/musicoterapia.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Caminatas Accesibles",
    descripcion:
      "Recorridos adaptados en espacios públicos para disfrutar al aire libre.",
    fecha: new Date("2026-08-18"),
    ubicacion: "Rocha",
    imagen: "/actividades/caminatas_accesibles.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Turismo Accesible",
    descripcion:
      "Excursiones y paseos adaptados para promover un turismo sin barreras.",
    fecha: new Date("2026-08-25"),
    ubicacion: "Punta del Este",
    imagen: "/actividades/turismo_accesible.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Taller de Inclusión Laboral",
    descripcion:
      "Orientación para la búsqueda de empleo, armado de CV y preparación para entrevistas.",
    fecha: new Date("2026-09-01"),
    ubicacion: "Montevideo",
    imagen: "/actividades/taller_inclusion_laboral.png",
    link: "https://www.gub.uy/",
  },
  {
    nombre: "Eventos Inclusivos",
    descripcion:
      "Encuentros comunitarios para promover la participación, el intercambio y la convivencia.",
    fecha: new Date("2026-09-10"),
    ubicacion: "Durazno",
    imagen: "/actividades/eventos_inclusivos.png",
    link: "https://www.gub.uy/",
  },
];

async function seedActividades() {
  for (const actividad of actividades) {
    const [registro, created] = await Actividad.findOrCreate({
      where: { nombre: actividad.nombre },
      defaults: actividad,
    });

    if (!created) {
      await registro.update(actividad);
    }
  }

  console.log("✅ Actividades sembradas correctamente.");
}

module.exports = seedActividades;

if (require.main === module) {
  seedActividades()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("❌ Error al sembrar actividades:", error);
      process.exit(1);
    });
}