const _jwt = require("../../services/jwt.service");
const PostgresService = require("../../services/postgres.service");
const _pg = new PostgresService();

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
const getUsuarioLogin = async (req, res) => {
  try {
    let usuario = req.body;
    let sql = `select nombres, id_rol, id_usuario from usuario WHERE id_usuario='${usuario.id_usuario}' and contrasenia='${usuario.contrasenia}' limit 1`;
    let result = await _pg.executeSql(sql);
    let usuario_logged = result.rows[0];
    console.log(usuario_logged);
    let token = usuario_logged ? _jwt.sign(usuario_logged) : null;
    return res.send({
      ok: usuario_logged ? true : false,
      message: usuario_logged
        ? `Bienvenido ${usuario_logged.nombres}`
        : "Usuario no encontrado, verificar identificación y/o contraseña.",
      content: {token,rol:usuario_logged.id_rol,nombres:usuario_logged.nombres},
    });
  } catch (error) {
    console.log(error);
    return res.send({
      ok: false,
      message: "Ha ocurrido un error consultando el usuario.",
      content: error,
    });
  }
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
const verifyToken = (req, res) => {
  try {
    let token = req.headers.token;
    let usuario = _jwt.verify(token);
    return res.status(200).send({
      ok: true,
      message: "Token verificado",
      content: usuario,
    });
  } catch (error) {
    return res.status(401).send({
      ok: false,
      message: "Error verificando el token.",
      content: error,
    });
  }
};

const verifyTokenMiddleware = (req, res, next) => {
  try {
    let token = req.headers.token;
    let usuario = _jwt.verify(token);
    next();
  } catch (error) {
    return res.send({
      ok: false,
      message: "Middleware - Error verificando el token.",
      content: error,
    });
  }
};

module.exports = { getUsuarioLogin, verifyToken, verifyTokenMiddleware };