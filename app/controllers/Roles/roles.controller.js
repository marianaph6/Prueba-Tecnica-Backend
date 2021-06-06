
const PostgresService = require("../../services/postgres.service");
const _pg = new PostgresService();

const getRoles = async (req, res) => {
  try {
    let sql = "select * from rol";
    let result = await _pg.executeSql(sql);
    let rows = result.rows;
    return res.send({
      ok: true,
      message: "Roles consultados",
      content: rows,
    });
  } catch (error) {
    return res.send({
      ok: false,
      message: "Ha ocurrido un error consultando los roles",
      content: error,
    });
  }
};

const getRol = async (req, res) => {
  try {
    let id = req.params.id;
    let sql = "select * from rol WHERE id_rol='" + id + "'";
    let result = await _pg.executeSql(sql);
    let rows = result.rows;
    return res.send({
      ok: true,
      message: "Rol consultado",
      content: rows[0],
    });
  } catch (error) {
    return res.send({
      ok: false,
      message: "Ha ocurrido un error consultando el rol",
      content: error,
    });
  }
};


module.exports = { getRoles,getRol };