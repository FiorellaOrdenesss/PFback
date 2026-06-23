// routes/categoriaRoutes.js
const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", authMiddleware, isAdmin, categoriaController.create);
router.get("/", authMiddleware, categoriaController.getAll);
router.get("/:id", authMiddleware, categoriaController.getById);
router.put("/:id", authMiddleware, isAdmin, categoriaController.update);
router.delete("/:id", authMiddleware, isAdmin, categoriaController.remove);

module.exports = router;

