const express = require('express')

const router = express.Router()

const _usuarioController = require('../controllers/Usuarios/usuarios.controller')
const _rolController = require('../controllers/Roles/roles.controller')
const _tipo_idController = require('../controllers/Tipos_id/tipos_id.controller')
const _authController = require("../controllers/Usuarios/auth.controller");

router.post("/login", _authController.getUsuarioLogin)
.post('/usuarios', _usuarioController.createUsuario);

router.use([_authController.verifyTokenMiddleware]);

router
    
    .get("/verify", _authController.verifyToken)

    //CRUD de usuarios
    .get('/usuarios', _usuarioController.getUsuarios)
    .get('/usuarios/:id', _usuarioController.getUsuario)
    .put('/usuarios/:id', _usuarioController.updateUsuario)
    .delete('/usuarios/:id', _usuarioController.deleteUsuario)

    .get('/roles', _rolController.getRoles)
    .get('/roles/:id', _rolController.getRol)

    .get('/tipos_id', _tipo_idController.getTipos_Id)
    .get('/tipos_id/:id', _tipo_idController.getTipo_Id);


module.exports = router