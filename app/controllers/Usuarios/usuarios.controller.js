const PostgresService = require('../../services/postgres.service');
const _pg = new PostgresService();


const getUsuarios = async (req, res) => {
  let sql = "select * from usuario";
  try {
    let result = await _pg.executeSql(sql);
    let rows = result.rows;

    return res.send({
      ok: true,
      message: "Usuarios consultados",
      content: rows,
    });
  } catch (error) {
    return res.send({
      ok: false,
      message: "Ha ocurrido un error consultando los usuario",
      content: error,
    });
  }
};


const getUsuario = async (req, res) => {
  try {
    let id = req.params.id;
    let sql = `select  id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular, contrasenia
    FROM public.usuario WHERE id_usuario='${id}'; `;
    

    let result = await _pg.executeSql(sql);
    let rows = result.rows;
    return res.send({
      ok: true,
      message: "Usuario consultado",
      content: rows[0],
    });
  } catch (error) {
    return res.send({
      ok: false,
      message: "Ha ocurrido un error consultando el usuario",
      content: error,
    });
  }
};


const createUsuario = async (req, res) => {
  try {
    let usuario = req.body;
    let sql = `INSERT INTO public.usuario (id_tipo_id, id_usuario, nombres, apellidos, correo, id_rol, celular,
             contrasenia) VALUES('${usuario.id_tipo_id}', '${usuario.id_usuario}', '${usuario.nombres}', 
             '${usuario.apellidos}', '${usuario.correo}', '${usuario.id_rol}', '${usuario.celular}', 
             md5('${usuario.contrasenia}'));`;
    let result = await _pg.executeSql(sql);
    console.log(result.rows);
    return res.send({ ok: result.rowCount == 1, message: result.rowCount == 1 ? "El usuario fue creado" : "Usuario no fue creado", content: usuario, });
  } catch (error) {
    return res.send({ ok: false, message: "Error creado el usuario", content: error, });
  }
};
const updateUsuario = async (req, res) => {
  try {
    let id = req.params.id;
    let usuario = req.body;

    let sql = `UPDATE public.usuario SET id_tipo_id='${usuario.id_tipo_id}', 
      nombres='${usuario.nombres}', apellidos='${usuario.apellidos}', correo='${usuario.correo}', 
      id_rol='${usuario.id_rol}', celular='${usuario.celular}', contrasenia= md5('${usuario.contrasenia}')
       WHERE id_usuario='${id}';`;

    let result = await _pg.executeSql(sql);

    return res.send({
      ok: result.rowCount == 1,
      message:
        result.rowCount == 1 ? "Usuario modificado" : "El usuario no fue modificado",
      content: usuario,
    });
  } catch (error) {
    return res.send({
      ok: false,
      message: "Ha ocurrido un error modificando el usuario",
      content: error,
    });
  }
};

/**
 * Método para eliminar usuario
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
const deleteUsuario = async (req, res) => {
  try {
    let id = req.params.id;
    let sql = `DELETE FROM public.usuario WHERE id_usuario='${id}';  `;
    let result = await _pg.executeSql(sql);

    return res.send({
      ok: result.rowCount == 1,
      message: result.rowCount == 1 ? "Usuario eliminado" : "El usuario no fue eliminado",
      content: id,
    });
  } catch (error) {
    return res.send({
      ok: false,
      message: "Ha ocurrido un error eliminando el usuario",
      content: error,
    });
  }
};
module.exports = { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario };