const { Producto } = require("../models");

const productos = [
  {
    nombre: "Silla de ruedas estándar",
    descripcion: "Silla de ruedas plegable de acero, ideal para uso diario.",
    precio: 12990,
    stock: 10,
    imagen: "/productos/silla_ruedas.png",
  },
  {
    nombre: "Andador de aluminio",
    descripcion: "Andador liviano con altura regulable.",
    precio: 4890,
    stock: 15,
    imagen: "/productos/andador_aluminio.png",
  },
  {
    nombre: "Bastón blanco plegable",
    descripcion: "Bastón para personas con discapacidad visual.",
    precio: 1490,
    stock: 25,
    imagen: "/productos/baston_blanco.png",
  },
  {
    nombre: "Muletas canadienses",
    descripcion: "Par de muletas regulables de aluminio.",
    precio: 2190,
    stock: 20,
    imagen: "/productos/muletas_canadienses.png",
  },
  {
    nombre: "Almohadón antiescaras",
    descripcion: "Almohadón viscoelástico para prevenir úlceras por presión.",
    precio: 2690,
    stock: 18,
    imagen: "/productos/almohadon_antiescaras.png",
  },
  {
    nombre: "Colchón antiescaras",
    descripcion: "Colchón de presión alternante para uso domiciliario.",
    precio: 9990,
    stock: 8,
    imagen: "/productos/colchon_antiescaras.png",
  },
  {
    nombre: "Barra de apoyo para baño",
    descripcion: "Barra de acero inoxidable para baño.",
    precio: 1690,
    stock: 30,
    imagen: "/productos/barra_apoyo_banio.png",
  },
  {
    nombre: "Banco para ducha",
    descripcion: "Banco plástico antideslizante para ducha.",
    precio: 3490,
    stock: 12,
    imagen: "/productos/banco_ducha.png",
  },
  {
    nombre: "Elevador para inodoro",
    descripcion: "Elevador sanitario con apoyabrazos.",
    precio: 5490,
    stock: 10,
    imagen: "/productos/elevador_inodoro.png",
  },
  {
    nombre: "Audífono digital",
    descripcion: "Audífono digital para hipoacusia leve y moderada.",
    precio: 18990,
    stock: 6,
    imagen: "/productos/audifono_digital.png",
  },
  {
    nombre: "Amplificador de sonido",
    descripcion: "Amplificador portátil de sonido personal.",
    precio: 3990,
    stock: 8,
    imagen: "/productos/amplificador_sonido.png",
  },
  {
    nombre: "Teclado de teclas grandes",
    descripcion: "Teclado de alto contraste para baja visión.",
    precio: 1990,
    stock: 15,
    imagen: "/productos/teclado_grande.png",
  },
  {
    nombre: "Mouse Trackball",
    descripcion: "Mouse ergonómico para movilidad reducida.",
    precio: 2590,
    stock: 10,
    imagen: "/productos/mouse_trackball.png",
  },
  {
    nombre: "Lupa electrónica",
    descripcion: "Lupa digital portátil con aumento.",
    precio: 8990,
    stock: 5,
    imagen: "/productos/lupa_electronica.png",
  },
  {
    nombre: "Reloj parlante",
    descripcion: "Reloj que anuncia la hora mediante voz.",
    precio: 1790,
    stock: 14,
    imagen: "/productos/reloj_parlante.png",
  },
  {
    nombre: "Calculadora parlante",
    descripcion: "Calculadora accesible con síntesis de voz.",
    precio: 2490,
    stock: 10,
    imagen: "/productos/calculadora_parlante.png",
  },
  {
    nombre: "Tensiómetro automático",
    descripcion: "Monitor digital de presión arterial.",
    precio: 2990,
    stock: 18,
    imagen: "/productos/tensiometro.png",
  },
  {
    nombre: "Oxímetro de pulso",
    descripcion: "Medidor digital de saturación de oxígeno.",
    precio: 1490,
    stock: 22,
    imagen: "/productos/oximetro.png",
  },
  {
    nombre: "Pastillero semanal",
    descripcion: "Organizador semanal de medicamentos.",
    precio: 590,
    stock: 40,
    imagen: "/productos/pastillero.png",
  },
  {
    nombre: "Silla para ducha con respaldo",
    descripcion: "Silla de baño ergonómica con respaldo y patas antideslizantes.",
    precio: 4590,
    stock: 10,
    imagen: "/productos/silla_ducha.png",
  },
];

async function seedProductos() {
  for (const producto of productos) {
    const [registro, created] = await Producto.findOrCreate({
      where: { nombre: producto.nombre },
      defaults: producto,
    });

    if (!created) {
      await registro.update(producto);
    }
  }
}

module.exports = seedProductos;

if (require.main === module) {
  seedProductos()
    .then(() => console.log("Productos sembrados correctamente"))
    .catch((error) => {
      console.error("Error al sembrar productos", error);
      process.exit(1);
    });
}