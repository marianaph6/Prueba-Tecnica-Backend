const express = require('express')

const router = express.Router()

const _usuarioController = require('../controllers/Usuarios/usuarios.controller')
const _authController = require("../controllers/Usuarios/auth.controller");
// RUTAS PUBLICAS
// Rutas no necesitan un token
router.post("/login", _authController.getUsuarioLogin);

//REGISTRO DEL MIDDLEWARE
router.use([_authController.verifyTokenMiddleware]);

// RUTAS PRIVADAS
router
  // Descrifrar y verificar token
  .get("/verify", _authController.verifyToken)
  //CRUD de usuarios
    .get('/usuarios', _usuarioController.getUsuarios)
    .get('/usuarios/:id', _usuarioController.getUsuario)
    .post('/usuarios', _usuarioController.createUsuario)
    .put('/usuarios/:id', _usuarioController.updateUsuario)
    .delete('/usuarios/:id', _usuarioController.deleteUsuario);


module.exports = router