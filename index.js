// index.js
// Comando para correr seeder;
// npm run seed
//npm.cmd run seed
//dejar también un seeder para asociar usuarios con beneficios y actividades.
//cd "c:\Users\Fiorella Ordenes\Desktop\Repositorios\entregables\Proyecto_Final\PFback" ; node -e "require('./seeders/seed');"
require("dotenv").config();
const express = require("express");
const path = require("path");
const sequelize = require("./config/db");
const cors = require("cors");

const { Usuario, Categoria, Beneficio, Actividad, Producto } = require("./models");

const usuarioRoutes = require("./routes/usuarioRoutes");
const actividadRoutes = require("./routes/actividadRoutes");
const beneficioRoutes = require("./routes/beneficioRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const productoRoutes = require("./routes/productoRoutes")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/img", express.static(path.join(__dirname, "seeders", "img")));

sequelize.sync({ alter: true }).then(() => console.log("Base de datos sincronizada"));

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/actividades", actividadRoutes);
app.use("/api/beneficios", beneficioRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/producto", productoRoutes)

app.listen(8000, () => console.log("Servidor corriendo en http://localhost:8000"));
