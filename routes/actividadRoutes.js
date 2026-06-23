// routes/actividadRoutes.js
const express = require("express");
const router = express.Router();
const actividadController = require("../controllers/actividadController");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", authMiddleware, isAdmin, actividadController.create);
router.get("/", authMiddleware, actividadController.getAll);
router.get("/:id", authMiddleware, actividadController.getById);
router.put("/:id", authMiddleware, isAdmin, actividadController.update);
router.delete("/:id", authMiddleware, isAdmin, actividadController.remove);

module.exports = router;
