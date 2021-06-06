
const PostgresService = require("../../services/postgres.service");
const _pg = new PostgresService();

const getTipos_Id = async (req, res) => {
  try {
    let sql = "select * from tipo_id";
    let result = await _pg.executeSql(sql);
    let rows = result.rows;
    return res.send({
      ok: true,
      message: "Tipos de Id consultados",
      content: rows,
    });
  } catch (error) {
    return res.send({
      ok: false,
      message: "Ha ocurrido un error consultando los Tipos de Id",
      content: error,
    });
  }
};

const getTipo_Id = async (req, res) => {
  try {
    let id = req.params.id;
    let sql = "select * from tipo_id WHERE id_tipo_id='" + id + "'";
    let result = await _pg.executeSql(sql);
    let rows = result.rows;
    return res.send({
      ok: true,
      message: "Tipo de Id consultado",
      content: rows[0],
    });
  } catch (error) {
    return res.send({
      ok: false,
      message: "Ha ocurrido un error consultando el Tipo de Id",
      content: error,
    });
  }
};


module.exports = { getTipos_Id,getTipo_Id };