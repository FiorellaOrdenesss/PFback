const { Producto } = require("../models");

const productos = [
    {
        nombre: "Kit de estudio básico",
        descripcion: "Cuaderno, lapicera y carpeta para estudiantes.",
        precio: 1290.0,
        stock: 20,
    },
    {
        nombre: "Beca transporte mensual",
        descripcion: "Crédito para movilidad urbana mensual.",
        precio: 5000.0,
        stock: 15,
    },
    {
        nombre: "Acceso a biblioteca digital",
        descripcion: "Suscripción por un mes a recursos académicos.",
        precio: 0.0,
        stock: 100,
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
