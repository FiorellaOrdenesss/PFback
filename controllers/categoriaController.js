// controllers/categoriaController.js
const Categoria = require("../models/Categoria");

exports.create = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const nuevaCategoria = await Categoria.create({ nombre, descripcion });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(500).json({ message: "Error al crear categoría", error: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categorías" });
    }
};

exports.getById = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: "Categoría no encontrada" });
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categoría" });
    }
};

exports.update = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: "Categoría no encontrada" });

        const { nombre, descripcion } = req.body;
        categoria.nombre = nombre || categoria.nombre;
        categoria.descripcion = descripcion || categoria.descripcion;

        await categoria.save();
        res.json({ message: "Categoría actualizada correctamente", categoria });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar categoría" });
    }
};

exports.remove = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: "Categoría no encontrada" });

        await categoria.destroy();
        res.json({ message: "Categoría eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar categoría" });
    }
};
