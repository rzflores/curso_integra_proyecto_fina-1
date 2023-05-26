const mysql = require('mysql');
const { promisify }  =require('util')

const pool =  mysql.createPool({
    host : process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DB_NAME,
})



pool.getConnection((err,connection)=>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('SE  CERRO LA CONEXION A LA BD')
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('LA BD TIENE MUCHAS CONEXIONES')
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('SE RECHAZO LA CONEXION CON LA BD')
        }
    }

    if(connection) connection.release();
    console.log('BD ESTA CONECTADA')
    return;
})

pool.query = promisify(pool.query)

module.exports = pool;


