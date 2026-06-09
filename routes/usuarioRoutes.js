// routes/usuarioRoutes.js
const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", usuarioController.register);
router.post("/login", usuarioController.login);

router.get("/", authMiddleware, usuarioController.getAll);
router.get("/:id", authMiddleware, usuarioController.getById);
router.put("/:id", authMiddleware, usuarioController.update);
router.delete("/:id", authMiddleware, usuarioController.remove);

router.post("/:usuarioId/beneficios/:beneficioId", authMiddleware, usuarioController.addBeneficio);
router.post("/:usuarioId/actividades/:actividadId", authMiddleware, usuarioController.addActividad);

module.exports = router;

