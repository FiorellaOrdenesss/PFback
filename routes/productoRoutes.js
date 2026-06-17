// routes/productoRoutes.js
const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, productoController.create);
router.get("/", authMiddleware, productoController.getAll);
router.get("/:id", authMiddleware, productoController.getById);
router.put("/:id", authMiddleware, productoController.update);
router.delete("/:id", authMiddleware, productoController.remove);

module.exports = router;
