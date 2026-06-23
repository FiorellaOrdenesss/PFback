// controllers/usuarioController.js
const Usuario = require("../models/Usuario");
const Beneficio = require("../models/Beneficio");
const Actividad = require("../models/Actividad");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
exports.registerAdmin = async (req, res) => {
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

        const nuevoAdmin = await Usuario.create({
            nombre,
            email,
            password: hashedPassword,
            rol: "admin",
        });

        res.status(201).json({
            message: "Admin registrado correctamente",
            usuario: {
                id: nuevoAdmin.id,
                nombre: nuevoAdmin.nombre,
                email: nuevoAdmin.email,
                rol: nuevoAdmin.rol,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar admin", error: error.message });
    }
};

// Login de usuario
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email y contraseña son obligatorios" });
        }

        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const validPassword = await bcrypt.compare(password, usuario.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const token = jwt.sign(
            { id: usuario.id, rol: usuario.rol, nombre: usuario.nombre }, // agregamos nombre
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login exitoso",
            token,
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
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
            include: [Beneficio, Actividad], // para ver asociaciones
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

// Asociar beneficio a usuario
exports.addBeneficio = async (req, res) => {
    try {
        const { usuarioId, beneficioId } = req.params;
        const usuario = await Usuario.findByPk(usuarioId);
        const beneficio = await Beneficio.findByPk(beneficioId);

        if (!usuario || !beneficio) {
            return res.status(404).json({ message: "Usuario o beneficio no encontrado" });
        }

        await usuario.addBeneficio(beneficio);
        res.json({ message: "Beneficio asociado al usuario correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al asociar beneficio", error: error.message });
    }
};

// Asociar actividad a usuario
exports.addActividad = async (req, res) => {
    try {
        const { usuarioId, actividadId } = req.params;
        const usuario = await Usuario.findByPk(usuarioId);
        const actividad = await Actividad.findByPk(actividadId);

        if (!usuario || !actividad) {
            return res.status(404).json({ message: "Usuario o actividad no encontrada" });
        }

        await usuario.addActividad(actividad);
        res.json({ message: "Actividad asociada al usuario correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al asociar actividad", error: error.message });
    }
};
