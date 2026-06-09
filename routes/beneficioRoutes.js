// routes/beneficioRoutes.js
const express = require("express");
const router = express.Router();
const beneficioController = require("../controllers/beneficioController");

router.post("/", beneficioController.create);
router.get("/", beneficioController.getAll);
router.get("/:id", beneficioController.getById);
router.put("/:id", beneficioController.update);
router.delete("/:id", beneficioController.remove);

module.exports = router;
