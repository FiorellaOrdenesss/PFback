// routes/productoRoutes.js
const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", authMiddleware, isAdmin, productoController.create);
router.get("/", authMiddleware, productoController.getAll);
router.get("/:id", authMiddleware, productoController.getById);
router.put("/:id", authMiddleware, isAdmin, productoController.update);
router.delete("/:id", authMiddleware, isAdmin, productoController.remove);

module.exports = router;
