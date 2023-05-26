const UsuarioDocumentoDao = require("../DAO/UsuarioDocumentoDao");

class UsuarioDocumento{
constructor(){}

    static obtenerUsuarioDocumentosNombres =async (idUsuario) => {
        let resultList =await UsuarioDocumentoDao.obtenerUsuarioDocumentosNombres(idUsuario);
        return resultList;
    }

    static obtenerUsuarioDocumentos =async () => {
        let resultList =await UsuarioDocumentoDao.obtenerUsuarioDocumentos();
        return resultList;
    }
    
    static obtenerValorCargaDocumentos = async (idUsuario , tipo) => {
        let result =await UsuarioDocumentoDao.obtenerValorCargaDocumentos(idUsuario , tipo);
        return result;
    }

    static actualizarCargaDocumento = async (idUsuario,idDocumento,nombreDocumentoWeb) => {
        let result =await UsuarioDocumentoDao.actualizarCargaDocumento(idUsuario,idDocumento,nombreDocumentoWeb);
        return result;
    }

    static actualizarNombreDocumento = async (idUsuario,idDocumento , nombreDoc) => {
        let result =await UsuarioDocumentoDao.actualizarNombreDocumento(idUsuario,idDocumento , nombreDoc);
        return result;
    }

}

module.exports = UsuarioDocumento