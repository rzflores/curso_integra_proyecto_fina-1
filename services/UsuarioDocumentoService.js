const UsuarioDocumento = require("../models/UsuarioDocumento");


class UsuarioDocumentoService{
    constructor(){}

    static async obtenerUsuarioDocumentosNombres(idUsuario){
        try {
            const resultList = await  UsuarioDocumento.obtenerUsuarioDocumentosNombres(idUsuario);
            return resultList
        } catch (error) {
            console.log("UsuarioDocumentoService | obtenerUsuarioDocumentos | Error:" + error)
        }
    }

    static async obtenerUsuarioDocumentos(){
        try {
            const resultList = await  UsuarioDocumento.obtenerUsuarioDocumentos();
            return resultList
        } catch (error) {
            console.log("UsuarioDocumentoService | obtenerUsuarioDocumentos | Error:" + error)
        }
    }

    static async obtenerValorCargaDocumentos(idUsuario , tipo){
        try {
            let respuestaObtenerValorCargaDocumentos = 0;
            respuestaObtenerValorCargaDocumentos = await  UsuarioDocumento.obtenerValorCargaDocumentos(idUsuario , tipo);
            if(respuestaObtenerValorCargaDocumentos == 0 )
            {
                throw new Error()
            }  
            return respuestaObtenerValorCargaDocumentos;
            
        } catch (error) {
            console.log("UsuarioDocumentoService | obtenerValorCargaDocumentos | Error:"+ error)
        }
    }
    static async actualizarCargaDocumento(idUsuario,idDocumento,nombreDocumentoWeb){
        try {
            let respuestaActualizarCargaDocumento = false;
            respuestaActualizarCargaDocumento = await  UsuarioDocumento.actualizarCargaDocumento(idUsuario,idDocumento,nombreDocumentoWeb);
            if(respuestaActualizarCargaDocumento == false ) { throw new Error()} 
            return respuestaActualizarCargaDocumento;
            
        } catch (error) {
            console.log("UsuarioDocumentoService | actualizarCargaDocumento | Error:"+ error)
        }
    }
    static async actualizarNombreDocumento(idUsuario,idDocumento , nombreDoc){
        try {
            let respuestaActualizarNombreDocumento = 0;
            respuestaActualizarNombreDocumento = await  UsuarioDocumento.actualizarNombreDocumento(idUsuario,idDocumento , nombreDoc);
            if(respuestaActualizarNombreDocumento == false ) { throw new Error()}              
            return respuestaActualizarNombreDocumento;
            
        } catch (error) {
            console.log("UsuarioDocumentoService | actualizarNombreDocumento | Error:"+ error)
        }
    }


}

module.exports = UsuarioDocumentoService;