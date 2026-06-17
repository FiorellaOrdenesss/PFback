// controllers/productoController.js
const Producto = require("../models/Producto");

exports.create = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock } = req.body;
        const nuevoProducto = await Producto.create({ nombre, descripcion, precio, stock });
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ message: "Error al crear producto", error: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos" });
    }
};

exports.getById = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) return res.status(404).json({ message: "Producto no encontrado" });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener producto" });
    }
};

exports.update = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) return res.status(404).json({ message: "Producto no encontrado" });

        const { nombre, descripcion, precio, stock } = req.body;
        producto.nombre = nombre || producto.nombre;
        producto.descripcion = descripcion || producto.descripcion;
        producto.precio = precio || producto.precio;
        producto.stock = stock || producto.stock;

        await producto.save();
        res.json({ message: "Producto actualizado correctamente", producto });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar producto" });
    }
};

exports.remove = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) return res.status(404).json({ message: "Producto no encontrado" });

        await producto.destroy();
        res.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar producto" });
    }
};
