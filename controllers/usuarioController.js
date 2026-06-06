// controllers/usuarioController.js
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

// Registro de usuario
exports.register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        if (!nombre || !email || !password) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const usuarioExistente = await Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.status(400).json({ message: "El email ya está registrado" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const nuevoUsuario = await Usuario.create({
            nombre,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: "Usuario registrado correctamente",
            usuario: {
                id: nuevoUsuario.id,
                nombre: nuevoUsuario.nombre,
                email: nuevoUsuario.email,
                rol: nuevoUsuario.rol,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario", error: error.message });
    }
};

// Listar todos los usuarios
exports.getAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ["id", "nombre", "email", "rol"],
        });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios" });
    }
};

// Obtener usuario por ID
exports.getById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id, {
            attributes: ["id", "nombre", "email", "rol"],
        });
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuario" });
    }
};

// Actualizar usuario
exports.update = async (req, res) => {
    try {
        const { nombre, email, rol } = req.body;
        const usuario = await Usuario.findByPk(req.params.id);

        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        usuario.nombre = nombre || usuario.nombre;
        usuario.email = email || usuario.email;
        usuario.rol = rol || usuario.rol;

        await usuario.save();

        res.json({ message: "Usuario actualizado correctamente", usuario });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar usuario" });
    }
};

// Eliminar usuario
exports.remove = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);

        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        await usuario.destroy();

        res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar usuario" });
    }
};
