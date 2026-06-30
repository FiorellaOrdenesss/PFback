require("dotenv").config();
const sequelize = require("../config/db");

const seedCategorias = require("./seederCategoria");
const seedBeneficios = require("./seederBeneficio");
const seedActividades = require("./seederActividad");
const seedUsuarios = require("./seederUsuario");
const seedProductos = require("./seederProducto");

async function seedAll() {
    try {
        await sequelize.sync({ force: false });
        console.log("Base de datos lista para sembrar");

        await seedCategorias();
        await seedBeneficios();
        await seedActividades();
        await seedUsuarios();
        await seedProductos();

        console.log("Base de datos sembrada correctamente");
    } catch (error) {
        console.error("Error al sembrar la base de datos", error);
        process.exit(1);
    } finally {
        await sequelize.close();
    }
}

seedAll();
