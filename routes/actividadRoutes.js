const express = require("express");
const router = express.Router();
const actividadController = require("../controllers/actividadController");

// Crear actividad
router.post("/", actividadController.create);

// Listar todas
router.get("/", actividadController.getAll);

// Obtener por ID
router.get("/:id", actividadController.getById);

// Actualizar
router.put("/:id", actividadController.update);

// Eliminar
router.delete("/:id", actividadController.remove);

module.exports = router;
