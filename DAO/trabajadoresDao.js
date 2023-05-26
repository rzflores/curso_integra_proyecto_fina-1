const pool = require('../database/config')
const UsuarioDTO = require('../DTO/UsuarioDTO')
const DeshabilitarUsuarioDTO = require('../DTO/DeshabilitarUsuarioDTO')
const ReporteAvanceDTO = require('../DTO/ReporteAvanceDTO')
const { formatDate,secondsToString } = require('../helpers/converciones')
const logger = require('../logger/logGenerator');


class TrabajadoresDao { 
constructor(){}

static insertarTrabajador = async (usuario) => {
    try {
        usuario.Contrasenia = (usuario.numeroDocumento).substring(0,4);
        usuario.valorAvance = 0;
        usuario.idRol = 2;
        usuario.esHabilitado = true;        
        let idInsert = 0;

        let result =  await pool.query('INSERT INTO usuarios(Nombres, '+
                                                            'Apellidos, ' + 
                                                            'numeroDocumento, '+
                                                            'Contrasenia, '+
                                                            'valorAvance, '+
                                                            'idRol, '+
                                                            'esHabilitado, '+
                                                            'induccionRH, ' + 
                                                            'induccionSeg, '+
                                                            'nombreHojaRuta, '+
                                                            'limiteFecha, ' +
                                                            'correoElectronico, ' + 
                                                            'correoAdmin, ' + 
                                                            'numeroIngreso, ' +
                                                            'envioMitad, ' + 
                                                            'envioFinal, ' + 
                                                            'esPrimerIngreso, ' + 
                                                            'esFinTiempo,' + 
                                                            'esAceptoPoli,' +
                                                            'esAceptoPoli2,' +
                                                            'esAceptoPoli3' +
                                                             ') VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                                                            [usuario.Nombres,
                                                             usuario.Apellidos,
                                                             usuario.numeroDocumento,
                                                             usuario.Contrasenia,
                                                             usuario.valorAvance,
                                                             usuario.idRol,
                                                             usuario.esHabilitado,
                                                             usuario.induccionRH,
                                                             usuario.induccionSeg,
                                                             usuario.nombreHojaRuta,
                                                             usuario.limiteFecha ,
                                                             usuario.correoElectronico ,
                                                             usuario.correoAdmin ,   
                                                             0 ,                                                                  
                                                             0 ,
                                                             0 ,
                                                             0 ,
                                                             0 ,
                                                             0 ,
                                                             0 ,
                                                             0 
                                                            ])
        if(Object.keys(result).length !== 0)
         {  
             idInsert = result.insertId            
             return  idInsert;
         }
         return idInsert
    } catch (error) {
            console.log('trabajadoresDao |insertarTrabajador| ' + error);          
    }
}

static insertarOpcionesTrabajador = async(  idUsuario ) => {
    try {
        
        let result =  await pool.query('INSERT INTO usuarios_avance ( esVisitado, idUsuario, idMenu , esHabilitado) VALUES'+
        '( 1, ?, 1,1),'+
        '( 0, ?, 2,1),'+
        '( 0, ?, 3,0),'+
        '( 1, ?, 4,1),'+
        '( 0, ?, 5,0),'+
        '( 0, ?, 6,0),'+
        '( 0, ?, 7,0),'+
        '( 1, ?, 8,1),'+
        '( 0, ?, 9,1),'+
        '( 0, ?, 10,1),'+
        '( 0, ?, 11,0)'
         , [idUsuario,idUsuario,idUsuario,idUsuario,idUsuario,idUsuario,idUsuario,idUsuario,idUsuario,idUsuario,idUsuario])
        
     
        if(Object.keys(result).length !== 0)
            {
            return true;
          
        }
        return false;
                
    } catch (error) {
            console.log('trabajadoresDao |insertarOpcionesTrabajador| ' + error);           
    }
}

static insertarDocumentosTrabajador = async ( idUsuario ) => {
    try {
        
        let result =  await pool.query('INSERT INTO usuarios_documento ( idDocumento, idUsuario, esCargado) VALUES'+
        '( 1, ?, 0),'+
        '( 2, ?, 0),'+
        '( 3, ?, 0),'+
        '( 4, ?, 0),'+
        '( 5, ?, 0),'+
        '( 6, ?, 0),'+
        '( 7, ?, 0),'+
        '( 8, ?, 0),'+
        '( 9, ?, 0),'+
        '( 10, ?,0),'+
        '( 11, ?,0),'+
        '( 12, ?,0),'+
        '( 13, ?,0),'+
        '( 14, ?,0),'+
        '( 15, ?,0),'+
        '( 16, ?,0),' +
        '( 17, ?,0)'
         , [idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario,
            idUsuario
        ])
        
         
        if(Object.keys(result).length !== 0)
        {
            return true;
        }
        return false;
    } catch (error) {
            console.log('trabajadoresDao | insertarDocumentosTrabajador|' + error);  
    }
}

static obtenerTrabajadores = async () => {
    try {
        let lstTrabajadores = [];
        let result =  await pool.query('Select * from usuarios where idRol = 2')       
        if(Object.keys(result).length !== 0)
            {
            result.forEach(e => {
            let objUsuario = new UsuarioDTO(e.idUsuario,
                                            e.Nombres,
                                            e.Apellidos,                    
                                            e.numeroDocumento,
                                            e.Contrasenia,
                                            e.valorAvance,
                                            e.idRol,
                                            e.esHabilitado,
                                            formatDate(e.induccionRH),
                                            formatDate(e.induccionSeg),
                                            e.nombreHojaRuta,
                                            formatDate(e.limiteFecha),
                                            e.correoElectronico,
                                            e.correoAdmin,
                                            e.numeroIngreso,
                                            e.tiempoCulminacion,
                                            e.esAceptoPoli,
                                            e.esAceptoPoli2,
                                            e.esAceptoPoli3)

                lstTrabajadores.push(objUsuario)                
            });
        }
        return lstTrabajadores;
    } catch (error) {
            console.log('trabajadoresDao |obtenerTrabajadores| '+error);           
    }
}

static obtenerTrabajador = async (idUsuario) => {
    try {
        let result =  await pool.query('SELECT * FROM usuarios where idUsuario = ?' , [idUsuario])
        let objUsuario = new UsuarioDTO()
        
        if(Object.keys(result).length !== 0)
            {
                objUsuario.idUsuario = result[0].idUsuario
                objUsuario.Nombres =result[0].Nombres
                objUsuario.Apellidos = result[0].Apellidos
                objUsuario.numeroDocumento = result[0].numeroDocumento
                objUsuario.Contrasenia = result[0].Contrasenia
                objUsuario.valorAvance = result[0].valorAvance
                objUsuario.esHabilitado = true;
                objUsuario.idRol =   result[0].idRol 
                objUsuario.correoElectronico =   result[0].correoElectronico 
                let fechaRH = new Date(result[0].induccionRH);
                let fechaSeg = new Date(result[0].induccionSeg );
                let fechaLim = new Date(result[0].limiteFecha );

                objUsuario.esAceptoPoli = result[0].esAceptoPoli;
                objUsuario.esAceptoPoli = result[0].esAceptoPoli2;
                objUsuario.esAceptoPoli = result[0].esAceptoPoli3;
                objUsuario.induccionRH =  `${fechaRH.getFullYear()}` + "-" + `${(fechaRH.getMonth()+1)}`.padStart(2,'0') + "-" +`${(fechaRH.getDate())}`.padStart(2,'0');
                objUsuario.induccionSeg =  `${fechaSeg.getFullYear()}` + "-" + `${(fechaSeg.getMonth()+1)}`.padStart(2,'0') + "-" +`${(fechaSeg.getDate())}`.padStart(2,'0');
                objUsuario.limiteFecha =  `${fechaLim.getFullYear()}` + "-" + `${(fechaLim.getMonth()+1)}`.padStart(2,'0') + "-" +`${(fechaLim.getDate())}`.padStart(2,'0');              
            }
        
        return objUsuario;
                
    } catch (error) {
        console.log('trabajadoresDao |obtenerTrabajador| '+error);       
    }
}

static editarTrabajador = async (usuario) => {
    
    try {
        let respuesta = false;
        let result =  await pool.query('UPDATE usuarios ' + 
        ' SET Nombres = ? ,' + 
        '  Apellidos = ? ,' + 
        '  numeroDocumento = ? ,' + 
        '  Contrasenia = ? ,' + 
        '  valorAvance = ? ,' + 
        '  esHabilitado = ? ,' + 
        '  correoElectronico = ? ,' + 
        '  induccionRH =  CAST( ?  AS DATE) ,' + 
        '  induccionSeg = CAST( ?  AS DATE) ,' + 
        '  limiteFecha = CAST( ?  AS DATE) ,' +
        '  nombreHojaRuta = ? ' + 
        ' where idUsuario = ? ',
            [usuario.Nombres,
            usuario.Apellidos,
            usuario.numeroDocumento,
            usuario.Contrasenia,
            usuario.valorAvance,            
            usuario.esHabilitado,
            usuario.correoElectronico,
            usuario.induccionRH,
            usuario.induccionSeg,
            usuario.limiteFecha,
            usuario.nombreHojaRuta,
            usuario.idUsuario                                                                       
           ])
        if(Object.keys(result).length !== 0)
        {
                respuesta = true;                
        }
        return respuesta;
    } catch (error) {
        console.log('trabajadoresDao |editarTrabajador| Error:'+error);       
    }

}

static deshabilitarTrabajador = async (deshabilitarUsuarioDTO) => {
    
    try {
        let objDeshabilitarUsuarioDTO = new DeshabilitarUsuarioDTO(deshabilitarUsuarioDTO.idUsuario,deshabilitarUsuarioDTO.accionHabilitar)

        console.log(objDeshabilitarUsuarioDTO)
        let respuesta = false;
        let result =  await pool.query(
                                    'update usuarios  set  esHabilitado = ? where idUsuario = ?',
                                    [objDeshabilitarUsuarioDTO.accionHabilitar,objDeshabilitarUsuarioDTO.idUsuario]
                                    )
        if(Object.keys(result).length !== 0)
        {
            respuesta = true;          
        }
        return respuesta;
                
    } catch (error) {
        console.log('trabajadoresDao |deshabilitarTrabajador| Error:'+error);       
    }
}

static aumentarNumeroIngreso = async(idUsuario) => {
    try {
        let respuesta = false;
        let result =  await pool.query('UPDATE  usuarios u set numeroIngreso = u.numeroIngreso + 1  where U.idUsuario = ?',[idUsuario])
        if(Object.keys(result).length !== 0)
        {
                respuesta = true;                
        }
        return respuesta;
    } catch (error) {
        console.log('trabajadoresDao |obtenerTrabajador| '+error);
    }
}


static obtenerPrimerIngreso = async(idUsuario) => {
    try {
        let respuesta = false;
        let result = await pool.query('SELECT u.esPrimerIngreso FROM usuarios  u where u.idUsuario = ?',[idUsuario])
        
        if(Object.keys(result).length !== 0)
        {
            respuesta = (result[0].esPrimerIngreso == 0) ? true : false;              
        }
        return respuesta;
    } catch (error) {
        console.log('trabajadoresDao |obtenerPrimerIngreso| '+error);        
    }

}


static actualizarInicioFecha = async(idUsuario , fechaInicio) => {

    try {
        let respuesta = false;
        let result =   await pool.query('UPDATE  usuarios u set u.esPrimerIngreso = 1  , u.inicioDate = ? where u.idUsuario = ?',[fechaInicio,idUsuario])
        if(Object.keys(result).length !== 0)
        {
                respuesta = true;                
        }
        return respuesta;
    } catch (error) {
        console.log('trabajadoresDao |actualizarInicioFecha| '+error);
    }
        
}

static actualizarEnvioMitad = async(idUsuario) => {
    try {
        let respuesta = false;
        let result =  await pool.query('UPDATE  usuarios SET envioMitad = true where idUsuario = ?',[idUsuario])
        if(Object.keys(result).length !== 0)
        {
                respuesta = true;                
        }
        return respuesta;
    } catch (error) {
        console.log('trabajadoresDao |actualizarEnvioMitad| '+error);
    }
}

static actualizarEnvioFinal = async(idUsuario) => {
    try {
        let respuesta = false;
        let result =  await pool.query('UPDATE  usuarios SET  envioFinal  = true where idUsuario = ?',[idUsuario])
        if(Object.keys(result).length !== 0)
        {
                respuesta = true;                
        }
        return respuesta;
    } catch (error) {
        console.log('trabajadoresDao |actualizarEnvioFinal| '+error);
    }
}

static actualizarFinInduccion = async(idUsuario) => {
    try {
        let resultUpdateFinInduccion = false;
        let resultFinInduccion = await pool.query('SELECT u.esFinTiempo FROM usuarios  u where u.idUsuario = ?',[idUsuario])
        if(resultFinInduccion[0].esFinTiempo == false )
        {
            let today = new Date();
            let fechaFin =  `${today.getFullYear()}` +"-"+ `${(today.getMonth()+1)}`.padStart(2,'0') +"-"+ `${(today.getDate())}`.padStart(2,'0')+ " " +`${(today.getHours())}:${(today.getMinutes())}:${(today.getSeconds())}`;
            resultUpdateFinInduccion =  await pool.query('UPDATE  usuarios u set u.esFinTiempo = 1  , u.finTiempo = ? where u.idUsuario = ?',[fechaFin,idUsuario])
        }
        return (resultUpdateFinInduccion.affectedRows == 1) ? true : false;
    } catch (error) {
        console.log('trabajadoresDao |actualizarFinInduccion| '+error);
    }
}

static obtenerReporteAvance = async ( ) => {
    
    try {
        let lstReporteAvance = [];
        
        let result =  await pool.query('Select u.Nombres , u.Apellidos , u.numeroDocumento , u.valorAvance , u.numeroIngreso , TIMESTAMPDIFF(SECOND,u.inicioDate,u.finTiempo)as tiempoCulminacion from usuarios u where idRol = 2')
    
   
        if(Object.keys(result).length !== 0)
            {
            result.forEach(e => {
                let objReporteAvanceDTO = new ReporteAvanceDTO(e.idUsuario,
                    e.Nombres,
                    e.Apellidos,                    
                    e.numeroDocumento,
                    e.Contrasenia,
                    e.valorAvance,
                    e.numeroIngreso,
                    e.tiempoCulminacion)
                    
                    lstReporteAvance.push(objReporteAvanceDTO)                
            });
          
        }

        
        return lstReporteAvance;
                
    } catch (error) {
            console.log(error);
    }

}

static actualizarPolitica = async (idUsuario , esPolitica, idPoli) => {
    try {
        let respuesta = false;    
        let result;                        
        if(idPoli == 1){
            result =  await pool.query('update usuarios '+
            ' set esAceptoPoli = ? '+
            ' where idUsuario = ? '
            ,[(esPolitica === '0') ? 0 : 1 ,idUsuario])
            if(Object.keys(result).length !== 0)
            {
                    respuesta = true;                
            }
        }
        if(idPoli == 2){
            result =  await pool.query('update usuarios '+
            ' set esAceptoPoli2 = ? '+
            ' where idUsuario = ? '
            ,[(esPolitica === '0') ? 0 : 1,idUsuario])
            if(Object.keys(result).length !== 0)
            {
                    respuesta = true;                
            }
        }
        if(idPoli == 3){
            result =  await pool.query('update usuarios '+
            ' set esAceptoPoli3 = ? '+
            ' where idUsuario = ? '
            ,[(esPolitica === '0') ? 0 : 1,idUsuario])
            if(Object.keys(result).length !== 0)
            {
                    respuesta = true;                
            }
        }
       return respuesta
    } catch (error) {
        console.log('trabajadoresDao |actualizarPolitica| '+error);            
    }
}


}

module.exports = TrabajadoresDao;