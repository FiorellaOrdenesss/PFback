// controllers/beneficioController.js

const Beneficio = require("../models/Beneficio");

exports.create = async (req, res) => {
    try {
        const {
            titulo,
            descripcion,
            disponibilidad,
            categoriaId,
            imagen,
            link,
        } = req.body;

        const nuevoBeneficio = await Beneficio.create({
            titulo,
            descripcion,
            disponibilidad,
            categoriaId,
            imagen,
            link,
        });

        res.status(201).json(nuevoBeneficio);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al crear beneficio",
            error: error.message,
        });
    }
};

// Obtener todos los beneficios
exports.getAll = async (req, res) => {
    try {
        const beneficios = await Beneficio.findAll({
            order: [["id", "ASC"]],
        });

        res.status(200).json(beneficios);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al obtener beneficios",
            error: error.message,
        });
    }
};

exports.getById = async (req, res) => {
    try {
        const beneficio = await Beneficio.findByPk(req.params.id);

        if (!beneficio) {
            return res.status(404).json({
                message: "Beneficio no encontrado",
            });
        }

        res.status(200).json(beneficio);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al obtener beneficio",
            error: error.message,
        });
    }
};

exports.update = async (req, res) => {
    try {
        const beneficio = await Beneficio.findByPk(req.params.id);

        if (!beneficio) {
            return res.status(404).json({
                message: "Beneficio no encontrado",
            });
        }

        const {
            titulo,
            descripcion,
            disponibilidad,
            categoriaId,
            imagen,
            link,
        } = req.body;

        beneficio.titulo =
            titulo !== undefined ? titulo : beneficio.titulo;

        beneficio.descripcion =
            descripcion !== undefined
                ? descripcion
                : beneficio.descripcion;

        beneficio.disponibilidad =
            disponibilidad !== undefined
                ? disponibilidad
                : beneficio.disponibilidad;

        beneficio.categoriaId =
            categoriaId !== undefined
                ? categoriaId
                : beneficio.categoriaId;

        beneficio.imagen =
            imagen !== undefined
                ? imagen
                : beneficio.imagen;

        beneficio.link =
            link !== undefined
                ? link
                : beneficio.link;

        await beneficio.save();

        res.status(200).json({
            message: "Beneficio actualizado correctamente",
            beneficio,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al actualizar beneficio",
            error: error.message,
        });
    }
};

exports.remove = async (req, res) => {
    try {
        const beneficio = await Beneficio.findByPk(req.params.id);

        if (!beneficio) {
            return res.status(404).json({
                message: "Beneficio no encontrado",
            });
        }

        await beneficio.destroy();

        res.status(200).json({
            message: "Beneficio eliminado correctamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al eliminar beneficio",
            error: error.message,
        });
    }
};