// const { Router } = require("express");
// const router = Router();

// const mysqlConnection = require("../db/db");

// router.get("/Listar_Usuarios", (req, res) => {
//   mysqlConnection.query("SELECT * FROM USUARIOE", (err, rows, fields) => {
//     if (!err) {
//       res.json(rows);
//     } else {
//       console.log(err);
//     }
//   });
// });

// router.post("/Nuevo_Usuario", (req, res) => {
//   const { direccion, nombre_completo,ID,telefono,contraseña,correo} = req.body;

//   let usuario = [direccion, nombre_completo, ID, telefono, contraseña, correo];

//   let nuevoUsuario = `
// INSERT INTO USUARIO(direccion,nombre_completo,ID,telefono,contraseña,correo)
// VALUES (?,?,?,?,?,?);`;

//   mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     res.json({ message: `Usuario Ingresado` });
//   });
// });
