const { Usuario } = require("../models/index")
const usuarios = []

usuarios.push(
    { nombre: "nacho", email: "nachito@exemple", password: "123456", rol: "user" },
    { nombre: "pepe", email: "pepe@exemple", password: "123456", rol: "user" },
    { nombre: "chola", email: "chola@exemple", password: "123456", rol: "user" },
    { nombre: "peca", email: "peca@exemple", password: "123456", rol: "user" },
    { nombre: "yuli", email: "yuli@exemple", password: "123456", rol: "user" },
    { nombre: "fio", email: "fio@exemple", password: "123456", rol: "user" }
)


Usuario.bulkCreate(usuarios)