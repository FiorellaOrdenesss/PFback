// controllers/beneficioController.js
const Beneficio = require("../models/Beneficio");

exports.create = async (req, res) => {
    try {
        const { titulo, descripcion, disponibilidad, categoriaId } = req.body;
        const nuevoBeneficio = await Beneficio.create({ titulo, descripcion, disponibilidad, categoriaId });
        res.status(201).json(nuevoBeneficio);
    } catch (error) {
        res.status(500).json({ message: "Error al crear beneficio", error: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const beneficios = await Beneficio.findAll();
        res.json(beneficios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener beneficios" });
    }
};

exports.getById = async (req, res) => {
    try {
        const beneficio = await Beneficio.findByPk(req.params.id);
        if (!beneficio) return res.status(404).json({ message: "Beneficio no encontrado" });
        res.json(beneficio);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener beneficio" });
    }
};

exports.update = async (req, res) => {
    try {
        const beneficio = await Beneficio.findByPk(req.params.id);
        if (!beneficio) return res.status(404).json({ message: "Beneficio no encontrado" });

        const { titulo, descripcion, disponibilidad, categoriaId } = req.body;
        beneficio.titulo = titulo || beneficio.titulo;
        beneficio.descripcion = descripcion || beneficio.descripcion;
        beneficio.disponibilidad = disponibilidad ?? beneficio.disponibilidad;
        beneficio.categoriaId = categoriaId || beneficio.categoriaId;

        await beneficio.save();
        res.json({ message: "Beneficio actualizado correctamente", beneficio });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar beneficio" });
    }
};

exports.remove = async (req, res) => {
    try {
        const beneficio = await Beneficio.findByPk(req.params.id);
        if (!beneficio) return res.status(404).json({ message: "Beneficio no encontrado" });

        await beneficio.destroy();
        res.json({ message: "Beneficio eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar beneficio" });
    }
};
