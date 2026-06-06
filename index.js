// index.js
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const cors = require("cors");
const db = require("./config/db");
const Usuario = require("./models/Usuario");
const usuarioRoutes = require("./routes/usuarioRoutes");
const Actividad = require("./models/Actividad");
const actividadRoutes = require("./routes/actividadRoutes");
const Beneficio = require("./models/Beneficio");
const beneficioRoutes = require("./routes/beneficioRoutes");
const Categoria = require("./models/Categoria");
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