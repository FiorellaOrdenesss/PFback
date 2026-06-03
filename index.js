// Hola vic todo listo para empezar!
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const cors = require("cors");
const db = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

sequelize.sync().then(() => console.log("Base de datos sincronizada"));

app.listen(8000, () => console.log("Servidor corriendo en http://localhost:8000"));