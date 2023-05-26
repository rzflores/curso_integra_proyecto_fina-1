const pool = require('../database/config')
const UsuarioDocumentoNombreDTO = require('../DTO/UsuarioDocumentoNombreDTO')
const UsuarioDocumentoDTO = require('../DTO/UsuarioDocumentoDTO')




class UsuarioDocumentoDao{
    constructor(){
    }

    static obtenerUsuarioDocumentosNombres =async (idUsuario) => {
        try {
            let lstUsuarioDocumento = []
            let result =  await pool.query('SELECT ud.idDocumento , ud.nombreDocumentoWeb FROM  usuarios_documento ud '+                                    
                                        ' INNER JOIN documentos d ON ud.idDocumento = d.idDocumento '  +                                  
                                        ' where ud.idUsuario = ? '                                                                       
                                        ,[idUsuario])         
       
            if(Object.keys(result).length !== 0)
                {
                result.forEach(e => {
                    let objBienestarDoc = new UsuarioDocumentoNombreDTO(e.idDocumento,e.nombreDocumentoWeb)
                    lstUsuarioDocumento.push(objBienestarDoc)                          
                });
            }
            return lstUsuarioDocumento;
        } catch (error) {
            console.log('UsuarioDocumentoDao |obtenerUsuarioDocumentosNombres| '+error);                 
        }
    }

    static obtenerUsuarioDocumentos = async() => {
        try {
            let lstTrabajadorDocumentos = [];
            let result =  await pool.query('Select u.idUsuario , ud.nombreDocumento , d.tituloDocumento , d.tipoDocumento from usuarios u' +
             ' inner join usuarios_documento ud on ud.idUsuario =  u.idUsuario' +
              ' inner join documentos d on  d.idDocumento = ud.idDocumento  where ud.nombreDocumento is not null')
            
           
              if(Object.keys(result).length !== 0)
              {
              result.forEach(e => {
                  let objTrabDocumento = new UsuarioDocumentoDTO(e.idUsuario,
                      e.nombreDocumento ,e.tituloDocumento , e.tipoDocumento)
                      
                      lstTrabajadorDocumentos.push(objTrabDocumento)                
              });
              }
    
            
            return lstTrabajadorDocumentos;
                    
        } catch (error) {
            console.log('UsuarioDocumentoDao |obtenerUsuarioDocumentos| '+error);       
        }
    }


    
static  obtenerValorCargaDocumentos = async(idUsuario , tipo) => {
    try {
        let respuesta = 0;
        let result =  await pool.query('select  sum(ud.esCargado) as totalDoc ' +
                                      ' from  usuarios_documento ud '+
                                      ' inner join documentos d  '+
                                      '  on d.idDocumento = ud.idDocumento '+
                                      ' where ud.idUsuario = ? '+
                                      ' and d.tipoDocumento = ?  ',[idUsuario,tipo])
        if(Object.keys(result).length !== 0)
        {
            respuesta =result[0].totalDoc
        }
        return respuesta;
                
    } catch (error) {
        console.log('UsuarioDocumentoDao |obtenerValorCargaDocumentos| '+error);       
    }
}

static actualizarCargaDocumento = async(idUsuario,idDocumento,nombreDocumentoWeb)=>{
    try {
        let result =  await pool.query('update usuarios_documento '+
                                        ' set esCargado = 1 ,'+
                                        ' nombreDocumentoWeb = ? ' +
                                        ' where idUsuario = ? '+
                                        ' and idDocumento = ? '
                                        ,[nombreDocumentoWeb,idUsuario,idDocumento])
             
         return (result.affectedRows == 1) ? true : false;
        
    } catch (error) {
        console.log('UsuarioDocumentoDao |actualizarCargaDocumento| '+error);  
    }
   

}

static actualizarNombreDocumento = async(idUsuario,idDocumento , nombreDoc)=>{
    try {
        let result =  await pool.query('update usuarios_documento '+
                                        ' set nombreDocumento = ? '+
                                        ' where idUsuario = ? '+
                                        ' and idDocumento = ? '
                                        ,[nombreDoc,idUsuario,idDocumento])
             
        return (result.affectedRows == 1) ? true : false;
        
    } catch (error) {
        console.log('UsuarioDocumentoDao |guardarNombreDocumento| '+error);   
    }

}


}


module.exports = UsuarioDocumentoDao