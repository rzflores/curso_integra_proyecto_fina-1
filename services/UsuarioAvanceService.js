const UsuarioAvance = require("../models/UsuarioAvance");
const { envioFinal , envioMitad } = require('../helpers/sendMail');
const Usuario = require("../models/Usuario");

class UsuarioAvanceService{
    constructor(){}
    static async obtenerMenusAvance(idUsuario){
        try {
            const resultList = await  UsuarioAvance.obtenerMenusAvance(idUsuario);
            if(resultList.length == 0) { throw new Error() } 
            return resultList
        } catch (error) {
            console.log("UsuarioAvanceService | obtenerMenusAvance | Error:" + error)
        }
    }
    static async obtenerSubMenusAvance(idUsuario,idMenu){
        try {
            const resultList = await  UsuarioAvance.obtenerSubMenusAvance(idUsuario,idMenu);
            if(resultList.length == 0) { throw new Error() } 
            return resultList
        } catch (error) {
            console.log("UsuarioAvanceService | obtenerSubMenusAvance | Error:" + error)
        }
    }
   
    static async obtenerMenuHabilitado(idUsuario,idMenuActual){
        try {
            const result = await  UsuarioAvance.obtenerMenuHabilitado(idUsuario,idMenuActual);
            return result
        } catch (error) {
            console.log("UsuarioAvanceService | obtenerMenuHabilitado | Error:" + error)
        }
    }

    static async actualizarVisitadoMenu(idUsuario , idMenu){
        try {
            const result = await  UsuarioAvance.actualizarVisitadoMenu(idUsuario , idMenu);
            if(result == false) { throw new Error()}
            return result
        } catch (error) {
            console.log("UsuarioAvanceService | obtenerMenuHabilitado | Error:" + error)
        }
    }

    static async habilitarSiguienteMenu(idUsuario , idMenu){
        try {
            const result = await  UsuarioAvance.habilitarSiguienteMenu(idUsuario , idMenu);
            if(result == false) { throw new Error()}
            return result
        } catch (error) {
            console.log("UsuarioAvanceService | habilitarSiguienteMenu | Error:" + error)
        }
    }

    static async actualizarValorAvance(idUsuario){
        try {
             
            let result  = await  UsuarioAvance.actualizarValorAvance(idUsuario);
            console.log(result)
            if(result == false) { throw new Error()}
            
            let objValorAvanceDTO = await UsuarioAvance.obtenerValorAvance();
            if(objValorAvanceDTO == undefined){throw new Error()}

            if(objValorAvanceDTO.valorAvance  >= 50 &&  objValorAvanceDTO.envioMitad == false){
                 //await envioMitad( correElectronico, correoAdmin , nombres,apellidos,numeroDoc )
                 await Usuario.ActualizarEnvioMitad(idUsuario)
            }

            if(objValorAvanceDTO.valorAvance  >= 100 &&  objValorAvanceDTO.envioFinal == false){

                 //await envioFinal( correElectronico, correoAdmin , nombres,apellidos,numeroDoc )
                 result = await Usuario.ActualizarEnvioFinal(idUsuario)
                 if(result == false) { throw new Error()}
                 result = await Usuario.ActualizarFinInduccion(idUsuario);
                 if(result == false) { throw new Error()}
            } 

            
            return (objValorAvanceDTO.valorAvance > 100) ? 100 : objValorAvanceDTO.valorAvance
        } catch (error) {
            console.log("UsuarioAvanceService | actualizarValorAvance | Error:" + error)
        }
    }


    


    


}

module.exports = UsuarioAvanceService;