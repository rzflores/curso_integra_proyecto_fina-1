const pool = require('../database/config')
const  BienestarDocumento  = require('../models/BienestarDocumento')



const  validarAvanceDocumentos = async(idUsuario , tipo) => {
    try {
        
        let result =  await pool.query('select  sum(ud.esCargado) as totalDoc ' +
                                      ' from  usuarios_documento ud '+
                                      ' inner join documentos d  '+
                                      '  on d.idDocumento = ud.idDocumento '+
                                      ' where ud.idUsuario = ? '+
                                      ' and d.tipoDocumento = ?  ',[idUsuario,tipo])
       
            return result[0].totalDoc
                
    } catch (error) {
            console.log(error);
            return 0
    }
}



const actualizarCargaDocumento = async(idUsuario,idDocumento,nombreDocumentoWeb)=>{
         
   
    let result =  await pool.query('update usuarios_documento '+
                                    ' set esCargado = 1 ,'+
                                    ' nombreDocumentoWeb = ? ' +
                                    ' where idUsuario = ? '+
                                    ' and idDocumento = ? '
                                    ,[nombreDocumentoWeb,idUsuario,idDocumento])
         
            return (result.affectedRows == 1) ? true : false;

}

const guardarNombreDocumento = async(idUsuario,idDocumento , nombreDoc)=>{
         
   
    let result =  await pool.query('update usuarios_documento '+
                                    ' set nombreDocumento = ? '+
                                    ' where idUsuario = ? '+
                                    ' and idDocumento = ? '
                                    ,[nombreDoc,idUsuario,idDocumento])
         
            return (result.affectedRows == 1) ? true : false;

}



module.exports = {
  
    actualizarCargaDocumento,
    validarAvanceDocumentos,
    guardarNombreDocumento,
}