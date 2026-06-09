// routes/usuarioRoutes.js
const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Crear usuario (registro)
router.post("/register", usuarioController.register);

// Listar todos
router.get("/", usuarioController.getAll);

// Obtener por ID
router.get("/:id", usuarioController.getById);

// Actualizar
router.put("/:id", usuarioController.update);

// Eliminar
router.delete("/:id", usuarioController.remove);

module.exports = router;
