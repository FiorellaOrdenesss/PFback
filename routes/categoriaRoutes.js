// routes/categoriaRoutes.js
const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.post("/", categoriaController.create);
router.get("/", categoriaController.getAll);
router.get("/:id", categoriaController.getById);
router.put("/:id", categoriaController.update);
router.delete("/:id", categoriaController.remove);

module.exports = router;
