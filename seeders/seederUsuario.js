const bcrypt = require("bcryptjs");
const { Usuario } = require("../models");

const usuarios = [
    { nombre: "Admin", email: "admin@ejemplo.com", password: "Admin123!", rol: "admin" },
    { nombre: "Nacho", email: "nachito@ejemplo.com", password: "123456", rol: "user" },
    { nombre: "Pepe", email: "pepe@ejemplo.com", password: "123456", rol: "user" },
    { nombre: "Chola", email: "chola@ejemplo.com", password: "123456", rol: "user" },
    { nombre: "Peca", email: "peca@ejemplo.com", password: "123456", rol: "user" },
    { nombre: "Yuli", email: "yuli@ejemplo.com", password: "123456", rol: "user" },
    { nombre: "Fio", email: "fio@ejemplo.com", password: "123456", rol: "user" },
];

async function seedUsuarios() {
    for (const usuario of usuarios) {
        const passwordHash = await bcrypt.hash(usuario.password, 10);
        const [registro, created] = await Usuario.findOrCreate({
            where: { email: usuario.email },
            defaults: {
                ...usuario,
                password: passwordHash,
            },
        });

        if (!created) {
            await registro.update({
                nombre: usuario.nombre,
                rol: usuario.rol,
                password: passwordHash,
            });
        }
    }
}

module.exports = seedUsuarios;

if (require.main === module) {
    seedUsuarios()
        .then(() => console.log("Usuarios sembrados correctamente"))
        .catch((error) => {
            console.error("Error al sembrar usuarios", error);
            process.exit(1);
        });
}