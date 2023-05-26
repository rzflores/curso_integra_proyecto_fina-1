const UsuarioAvanceDao = require("../DAO/UsuarioAvanceDao");

class UsuarioAvance {
    constructor( ){
    }

    static obtenerMenusAvance  = async (idUsuario) => {
        let resultList =await UsuarioAvanceDao.obtenerMenusAvance(idUsuario);
        return resultList;

    }

    static obtenerSubMenusAvance  = async (idUsuario,idMenu) => {
        let resultList =await UsuarioAvanceDao.obtenerSubMenusAvance(idUsuario,idMenu);
        return resultList;

    }

    static obtenerMenuHabilitado = async (idUsuario,idMenu) => {
        let result =await UsuarioAvanceDao.obtenerMenuHabilitado(idUsuario,idMenu);
        return result;

    }

    static actualizarVisitadoMenu = async(idUsuario , idMenu)  => {
        let result =await UsuarioAvanceDao.actualizarVisitadoMenu(idUsuario,idMenu);
        return result;
    }

    static habilitarSiguienteMenu = async(idUsuario , idMenu)  => {
        let result =await UsuarioAvanceDao.habilitarSiguienteMenu(idUsuario,idMenu);
        return result;
    }
    static actualizarValorAvance = async(idUsuario) => {
        let result =await UsuarioAvanceDao.actualizarValorAvance(idUsuario);
        return result;
    }

    static obtenerValorAvance = async(idUsuario) => {
        let result =await UsuarioAvanceDao.obtenerValorAvance(idUsuario);
        return result;
    }

    
    
        
}


module.exports = UsuarioAvance;