// model index.js
const Usuario = require("./Usuario");
const Actividad = require("./Actividad");
const Beneficio = require("./Beneficio");
const Categoria = require("./Categoria");

Beneficio.belongsTo(Categoria, { foreignKey: "categoriaId" });
Categoria.hasMany(Beneficio, { foreignKey: "categoriaId" });

Actividad.belongsTo(Beneficio, { foreignKey: "beneficioId" });
Beneficio.hasMany(Actividad, { foreignKey: "beneficioId" });

Usuario.belongsToMany(Beneficio, { through: "UsuarioBeneficio", foreignKey: "usuarioId" });
Beneficio.belongsToMany(Usuario, { through: "UsuarioBeneficio", foreignKey: "beneficioId" });

Usuario.belongsToMany(Actividad, { through: "UsuarioActividad", foreignKey: "usuarioId" });
Actividad.belongsToMany(Usuario, { through: "UsuarioActividad", foreignKey: "actividadId" });

module.exports = {
    Usuario,
    Actividad,
    Beneficio,
    Categoria,
};