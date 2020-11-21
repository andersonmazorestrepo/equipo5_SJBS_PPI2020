const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
host:'bpo2jcwfbbkxq4shm4gb-mysql.services.clever-cloud.com',
user:'u568t6zunqweok8b',
password:'5uiu2Zn7cjxnYoYtRb49',
database:'bpo2jcwfbbkxq4shm4gb',
multiStatements: true

});

mysqlConnection.connect(function (err){
   if(err){
     console.log(err);
   }else{
     console.log('La base de datos está conectada');
   }
});

module.exports = mysqlConnection;

