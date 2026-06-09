// index.js
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const cors = require("cors");

const { Usuario, Categoria, Beneficio, Actividad } = require("./models");

const usuarioRoutes = require("./routes/usuarioRoutes");
const actividadRoutes = require("./routes/actividadRoutes");
const beneficioRoutes = require("./routes/beneficioRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");

const app = express();
app.use(cors());
app.use(express.json());

sequelize.sync().then(() => console.log("Base de datos sincronizada"));

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/actividades", actividadRoutes);
app.use("/api/beneficios", beneficioRoutes);
app.use("/api/categorias", categoriaRoutes);

app.listen(8000, () => console.log("Servidor corriendo en http://localhost:8000"));
