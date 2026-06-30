const fs = require("fs");
const path = require("path");
const Actividad = require("../models/Actividad");

exports.create = async (req, res) => {
    try {
        const { nombre, descripcion, fecha, ubicacion, beneficioId } = req.body;
        let imagenPath = null;

        if (req.file) {
            const uploadsDir = path.join(__dirname, "..", "uploads", "actividades");
            if (!fs.existsSync(uploadsDir)) {
                fs.mkdirSync(uploadsDir, { recursive: true });
            }

            const fileName = `${Date.now()}-${req.file.originalname}`;
            const finalPath = path.join(uploadsDir, fileName);
            fs.writeFileSync(finalPath, req.file.buffer);
            imagenPath = `/uploads/actividades/${fileName}`;
        }

        const nuevaActividad = await Actividad.create({
            nombre,
            descripcion,
            fecha,
            ubicacion,
            beneficioId,
            imagen: imagenPath,
        });
        res.status(201).json(nuevaActividad);
    } catch (error) {
        res.status(500).json({ message: "Error al crear actividad", error: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const actividades = await Actividad.findAll();
        res.json(actividades);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener actividades" });
    }
};

exports.getById = async (req, res) => {
    try {
        const actividad = await Actividad.findByPk(req.params.id);
        if (!actividad) return res.status(404).json({ message: "Actividad no encontrada" });
        res.json(actividad);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener actividad" });
    }
};

exports.update = async (req, res) => {
    try {
        const actividad = await Actividad.findByPk(req.params.id);
        if (!actividad) return res.status(404).json({ message: "Actividad no encontrada" });

        const { nombre, descripcion, fecha, ubicacion } = req.body;
        let imagenPath = actividad.imagen;

        if (req.file) {
            const uploadsDir = path.join(__dirname, "..", "uploads", "actividades");
            if (!fs.existsSync(uploadsDir)) {
                fs.mkdirSync(uploadsDir, { recursive: true });
            }

            const fileName = `${Date.now()}-${req.file.originalname}`;
            const finalPath = path.join(uploadsDir, fileName);
            fs.writeFileSync(finalPath, req.file.buffer);
            imagenPath = `/uploads/actividades/${fileName}`;
        }

        actividad.nombre = nombre || actividad.nombre;
        actividad.descripcion = descripcion || actividad.descripcion;
        actividad.fecha = fecha || actividad.fecha;
        actividad.ubicacion = ubicacion || actividad.ubicacion;
        actividad.imagen = imagenPath;

        await actividad.save();
        res.json({ message: "Actividad actualizada correctamente", actividad });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar actividad" });
    }
};

exports.remove = async (req, res) => {
    try {
        const actividad = await Actividad.findByPk(req.params.id);
        if (!actividad) return res.status(404).json({ message: "Actividad no encontrada" });

        await actividad.destroy();
        res.json({ message: "Actividad eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar actividad" });
    }
};
