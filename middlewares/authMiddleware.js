// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        // El token se envía en el header Authorization: Bearer <token>
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).json({ message: "Token no proporcionado" });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Formato de token inválido" });
        }

        // Verificar token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Guardar datos del usuario en la request
        req.user = decoded;

        next(); // continuar hacia la ruta protegida
    } catch (error) {
        res.status(403).json({ message: "Token inválido o expirado" });
    }
};

module.exports = authMiddleware;
