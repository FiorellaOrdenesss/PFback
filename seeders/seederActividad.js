const { Actividad, Beneficio } = require("../models");

const actividades = [
    {
        nombre: "Charla sobre movilidad",
        descripcion: "Sesión informativa sobre el uso de la beca de transporte.",
        fecha: new Date("2026-06-20"),
        ubicacion: "Montevideo",
        beneficio: "Beca de Transporte",
    },
    {
        nombre: "Workshop de programación",
        descripcion: "Introducción práctica a HTML, CSS y JavaScript.",
        fecha: new Date("2026-06-25"),
        ubicacion: "Canelones",
        beneficio: "Curso de Programación",
    },
    {
        nombre: "Taller de CV",
        descripcion: "Cómo armar un currículum y prepararse para entrevistas.",
        fecha: new Date("2026-07-01"),
        ubicacion: "Montevideo",
        beneficio: "Taller de Inserción Laboral",
    },
    {
        nombre: "Entrega de vales",
        descripcion: "Distribución de vales de alimentación para estudiantes.",
        fecha: new Date("2026-07-05"),
        ubicacion: "Canelones",
        beneficio: "Beneficio Alimentario",
    },
    {
        nombre: "Sesión de apoyo emocional",
        descripcion: "Encuentro grupal con psicólogos para orientación.",
        fecha: new Date("2026-07-10"),
        ubicacion: "Montevideo",
        beneficio: "Atención Psicológica",
    },
    {
        nombre: "Feria de útiles escolares",
        descripcion: "Evento con descuentos en materiales de estudio.",
        fecha: new Date("2026-07-15"),
        ubicacion: "Canelones",
        beneficio: "Descuento en Materiales",
    },
    {
        nombre: "Presentación de biblioteca digital",
        descripcion: "Demostración de la plataforma online de recursos académicos.",
        fecha: new Date("2026-07-20"),
        ubicacion: "Montevideo",
        beneficio: "Acceso a Biblioteca Digital",
    },
];

async function seedActividades() {
    const beneficios = await Beneficio.findAll();
    const beneficioPorTitulo = Object.fromEntries(beneficios.map((beneficio) => [beneficio.titulo, beneficio.id]));

    for (const actividad of actividades) {
        const { beneficio, ...datosActividad } = actividad;
        const beneficioId = beneficioPorTitulo[beneficio];

        const [registro, created] = await Actividad.findOrCreate({
            where: { nombre: actividad.nombre },
            defaults: {
                ...datosActividad,
                beneficioId,
            },
        });

        if (!created) {
            await registro.update({
                descripcion: datosActividad.descripcion,
                fecha: datosActividad.fecha,
                ubicacion: datosActividad.ubicacion,
                beneficioId,
            });
        }
    }
}

module.exports = seedActividades;

if (require.main === module) {
    seedActividades()
        .then(() => console.log("Actividades sembradas correctamente"))
        .catch((error) => {
            console.error("Error al sembrar actividades", error);
            process.exit(1);
        });
}
