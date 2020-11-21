const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../db/db');

                  //USUARIOE
//PETICION SERVICIOS TIPO GER - LECTURA DE DATOS

router.get('/usuarios', (req,res) => {
  mysqlConnection.query('SELECT * FROM USUARIOE', (err,rows,fields) => {
     if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
  });
});

            //TIPO POST - CRACIÓN DE DATOS
 router.post('/usuarios', (req, res) => {
     console.log(req.body)
    const {direccion,nombre_completo,ID,telefono,contraseña,correo} = req.body

    let usuario = [direccion,nombre_completo,ID,telefono,contraseña,correo];

    let nuevoUsuario = `INSERT INTO USUARIOE(direccion,nombre_completo,ID,telefono,contraseña,correo)
                        VALUES (?,?,?,?,?,?);`

   mysqlConnection.query(nuevoUsuario,usuario, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Usuario Ingresado`})
   });
  });


//     TIPO PUT - MODIFICACIÓN DE DATOS

router.put('/Usuario/:id', (req,res) => {
  const {direccion,nombre_completo,ID,telefono,contraseña,correo} = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE USUARIOE SET direccion = ?, nombre_completo = ?, telefono = ?,contraseña = ?, correo = ? WHERE ID = ?`,[direccion,nombre_completo,telefono,contraseña,correo,ID], (err, rows,fields) => {
   if(!err){
    res.json({status: `usuario ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

//     TIPO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/Usuario/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM USUARIO WHERE ID =?`,[id],(err,rows,fields) => {
      if("err"){
        res.json({status: `El usuario ha sido eliminado`})
      }else{
        console.log(err);
      }
    })
  })

                  //TIPO_USUARIOE
//PETICION SERVICIOS TIPO GER - LECTURA DE DATOS

router.get('/Listar_TipoUsuario', (req,res) => {
  mysqlConnection.query('SELECT * FROM TIPO_USUARIOE', (err,rows,fields) => {
     if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
  });
});

            //TIPO POST - CRACIÓN DE DATOS
 router.post('/Nuevo_TipoUsuario', (req, res) => {
    const {ID,nombre} = req.body

    let usuario = [ID,nombre];

    let nuevoUsuario = `
INSERT INTO TIPO_USUARIOE(ID,nombre)
VALUES (?,?);`

   mysqlConnection.query(nuevoUsuario,usuario, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Tipo Usuario Ingresado`})
   });
  });


//     TIPO PUT - MODIFICACIÓN DE DATOS

router.put('/TipoUsuario/:id', (req,res) => {
  const {ID,nombre} = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE TIPO_USUARIOE SET nombre WHERE ID = ?`,[nombre,ID], (err, rows,fields) => {
   if(!err){
    res.json({status: `Tipo usuario ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

//     TIPO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/TipoUsuario/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM USUARIO WHERE ID =?`,[id],(err,rows,fields) => {
      if("err"){
        res.json({status: `El tipo usuario ha sido eliminado`})
      }else{
        console.log(err);
      }
    })
  })


                  //RECICLAJE
//PETICION SERVICIOS TIPO GER - LECTURA DE DATOS

router.get('/Listar_Reciclaje', (req,res) => {
  mysqlConnection.query('SELECT * FROM RECICLAJE', (err,rows,fields) => {
     if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
  });
});

            //TIPO POST - CRACIÓN DE DATOS
 router.post('/Nuevo_Reciclaje', (req, res) => {
    const {composicion,fuente,cantidad} = req.body

    let reciclaje = [composicion,fuente,cantidad];

    let nuevoReciclaje = `
INSERT INTO RECICLAJE(composicion,fuente,cantidad)
VALUES (?,?,?);`

   mysqlConnection.query(nuevoReciclaje,reciclaje, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Reciclaje Ingresado`})
   });
  });


//     TIPO PUT - MODIFICACIÓN DE DATOS

router.put('/Reciclaje/:id', (req,res) => {
  const {composicion,fuente,cantidad} = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE RECICLAJE SET rango,direccion rut = ?`,[composicion,fuente,cantidad], (err, rows,fields) => {
   if(!err){
    res.json({status: `Reciclaje ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

//     TIPO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/Reciclaje/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM RECICLAJE WHERE rut =?`,[id],(err,rows,fields) => {
      if("err"){
        res.json({status: `El Reciclaje ha sido eliminado`})
      }else{
        console.log(err);
      }
    })
  })


   //MAPA
//PETICION SERVICIOS TIPO GER - LECTURA DE DATOS

router.get('/Listar_Mapa', (req,res) => {
  mysqlConnection.query('SELECT * FROM MAPA', (err,rows,fields) => {
     if(!err)
     {
       res.json(rows);
     }else{
       console.log(err);
     }
  });
});

            //TIPO POST - CRACIÓN DE DATOS
 router.post('/Nuevo_Mapa', (req, res) => {
    const {rut,rango,direccion} = req.body

    let mapa = [rut,rango,direccion];

    let nuevoMapa = `
INSERT INTO MAPA(rut,rango,direccion)
VALUES (?,?,?);`

   mysqlConnection.query(nuevoMapa,mapa, (err,results,fields) => {
     if(err){
       return console.error(err.message);
     }
     res.json({message:`Mapa Ingresado`})
   });
  });


//     TIPO PUT - MODIFICACIÓN DE DATOS

router.put('/Mapa/:id', (req,res) => {
  const {rut,rango,direccion} = req.body
  const { id } = req.params 

mysqlConnection.query(`UPDATE MAPA SET rango,direccion rut = ?`,[rut,rango,direccion], (err, rows,fields) => {
   if(!err){
    res.json({status: `Mapa ha sido actualizado con éxito`});
   }else{
     console.log(err);
   }
});
});

//     TIPO DELETE - ELIMINACIÓN DE DATOS
  router.delete('/Mapa/:rut', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM MAPA WHERE rut =?`,[rut],(err,rows,fields) => {
      if("err"){
        res.json({status: `El Mapa ha sido eliminado`})
      }else{
        console.log(err);
      }
    })
  })






module.exports = router;