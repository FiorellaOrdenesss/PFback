//routes/beneficioRoutes.js
const express = require("express");
const router = express.Router();
const beneficioController = require("../controllers/beneficioController");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", authMiddleware, isAdmin, beneficioController.create);
router.get("/", authMiddleware, beneficioController.getAll);
router.get("/:id", authMiddleware, beneficioController.getById);
router.put("/:id", authMiddleware, isAdmin, beneficioController.update);
router.delete("/:id", authMiddleware, isAdmin, beneficioController.remove);

module.exports = router;
