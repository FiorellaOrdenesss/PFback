//routes/beneficioRoutes.js
const express = require("express");
const router = express.Router();
const beneficioController = require("../controllers/beneficioController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, beneficioController.create);
router.get("/", authMiddleware, beneficioController.getAll);
router.get("/:id", authMiddleware, beneficioController.getById);
router.put("/:id", authMiddleware, beneficioController.update);
router.delete("/:id", authMiddleware, beneficioController.remove);

module.exports = router;
