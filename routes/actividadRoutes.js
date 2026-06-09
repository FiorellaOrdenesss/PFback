// routes/actividadRoutes.js
const express = require("express");
const router = express.Router();
const actividadController = require("../controllers/actividadController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, actividadController.create);
router.get("/", authMiddleware, actividadController.getAll);
router.get("/:id", authMiddleware, actividadController.getById);
router.put("/:id", authMiddleware, actividadController.update);
router.delete("/:id", authMiddleware, actividadController.remove);

module.exports = router;
