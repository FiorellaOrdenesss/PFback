// routes/actividadRoutes.js
const express = require("express");
const multer = require("multer");
const router = express.Router();
const actividadController = require("../controllers/actividadController");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdmin");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", authMiddleware, isAdmin, upload.single("imagen"), actividadController.create);
router.get("/", authMiddleware, actividadController.getAll);
router.get("/:id", authMiddleware, actividadController.getById);
router.put("/:id", authMiddleware, isAdmin, upload.single("imagen"), actividadController.update);
router.delete("/:id", authMiddleware, isAdmin, actividadController.remove);

module.exports = router;
