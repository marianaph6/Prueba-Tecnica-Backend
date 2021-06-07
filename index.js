/** 
 * ARCHIVO PRINCIPAL DE LA API DE PRUEBA-TÉCNICA
 */

 const express = require('express')
 const app = express();
 const cors = require("cors");
 const router = require('./app/routers/index')
 
 app.use(express.json());
 app.use(cors());
 
 app.use('/', router)
 
 const PORT = process.env.PORT || 3001
 app.listen(PORT, () => {
   console.log(`Example app listening at http://localhost:${PORT}`)
 })