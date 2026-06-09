// routes/categoriaRoutes.js
const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, categoriaController.create);
router.get("/", authMiddleware, categoriaController.getAll);
router.get("/:id", authMiddleware, categoriaController.getById);
router.put("/:id", authMiddleware, categoriaController.update);
router.delete("/:id", authMiddleware, categoriaController.remove);

module.exports = router;

