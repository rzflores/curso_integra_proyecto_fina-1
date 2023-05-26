const Usuario = require("../models/Usuario");


class UsuarioService{
    constructor(){}

    static async loginUsuario(authDTO){
        try {
            const usuario = await  Usuario.loginUsuario(authDTO);
            if( usuario !==  undefined){
                return  { usuario : usuario , login : true }
            }            
            return  { usuario : usuario , login : false }
        } catch (error) {
            console.log("UsuarioService | loginUsuario | Error:" + error)
        }
    }

    static async insertarTrabajador(usuario){
        try {
            let respuestaOpcionesTrabajador = false;
            let respuestaDocumentosTrabajador = false;
            const idInsert = await  Usuario.InsertarTrabajador(usuario);
            if(idInsert != undefined)
            {
                respuestaOpcionesTrabajador =  await Usuario.InsertarOpcionesTrabajador(idInsert);  
                respuestaDocumentosTrabajador =   await Usuario.InsertarDocumentosTrabajador(idInsert);
            }
            if(respuestaOpcionesTrabajador == true && respuestaDocumentosTrabajador)
            {
                return true;
            }
            else
            {
                return false;
            }
            
        } catch (error) {
            console.log("UsuarioService | insertarTrabajador | Error:"+ error)
        }
    }

    static async obtenerTrabajadores(){
        try {
            const resultList = await  Usuario.ObtenerTrabajadores();
            return resultList
        } catch (error) {
            console.log("UsuarioService | obtenerTrabajadores | Error:" + error)
        }
    }

    static async obtenerTrabajador(idUsuario){
        try {
            const usuario = await  Usuario.ObtenerTrabajador(idUsuario);
            return usuario
        } catch (error) {
            console.log("UsuarioService | obtenerTrabajador | Error:" + error)
        }
    }

    static async editarTrabajador(usuario){
        try {
            const respuesta = await  Usuario.EditarTrabajador(usuario);
            return respuesta
        } catch (error) {
            console.log("UsuarioService | editarTrabajador | Error:" + error)
        }
    }

    static async deshabilitarTrabajador(deshabilitarTrabajadorDTO){
        try {
            const respuesta = await  Usuario.DeshabilitarTrabajador(deshabilitarTrabajadorDTO);
            return respuesta
        } catch (error) {
            console.log("UsuarioService | deshabilitarTrabajador | Error:" + error)
        }
    }

    static async aumentarNumeroIngreso(idUsuario){
        try {
            const respuesta = await  Usuario.AumentarNumeroIngreso(idUsuario);
            if( respuesta == false ) { throw new Error() }
            return respuesta
        } catch (error) {
            console.log("UsuarioService | aumentarNumeroIngreso | Error:" + error)
        }
    }

    static async actualizarPrimerIngreso(idUsuario){
        try {
            let respuesta = false;
            const result = await  Usuario.ObtenerPrimerIngreso(idUsuario);
            if( result == true ) { 
                let fechaHoy = new Date();
                let fechaInicio =  `${fechaHoy.getFullYear()}` +"-"+ `${(fechaHoy.getMonth()+1)}`.padStart(2,'0') +"-"+ `${(fechaHoy.getDate())}`.padStart(2,'0') + " " +`${(fechaHoy.getHours())}:${(fechaHoy.getMinutes())}:${(fechaHoy.getSeconds())}`;
                respuesta = await Usuario.ActualizarInicioFecha(idUsuario , fechaInicio)
            }else {
                respuesta = true
            }
            if( respuesta == false){ throw new Error()}
            return respuesta
        } catch (error) {
            console.log("UsuarioService | actualizarPrimerIngreso | Error:" + error)
        }
    }

    static async actualizarEnvioMitad(idUsuario){
        try {
            const respuesta = await  Usuario.ActualizarEnvioMitad(idUsuario);
            if( respuesta == false ) { throw new Error() }
            return respuesta
        } catch (error) {
            console.log("UsuarioService | actualizarEnvioMitad | Error:" + error)
        }
    }

    static async actualizarEnvioFinal(idUsuario){
        try {
            const respuesta = await  Usuario.ActualizarEnvioFinal(idUsuario);
            if( respuesta == false ) { throw new Error() }
            return respuesta
        } catch (error) {
            console.log("UsuarioService | actualizarEnvioFinal | Error:" + error)
        }
    }

    static async actualizarFinInduccion(idUsuario){
        try {
            const respuesta = await  Usuario.ActualizarFinInduccion(idUsuario);
            if( respuesta == false ) { throw new Error() }
            return respuesta
        } catch (error) {
            console.log("UsuarioService | actualizarFinInduccion | Error:" + error)
        }
    }

    static async obtenerReporteAvance(){
        try {
            const resultList = await  Usuario.obtenerReporteAvance();
            return resultList
        } catch (error) {
            console.log("UsuarioService | obtenerReporteAvance | Error:" + error)
        }
    }

    static async actualizarPolitica(idUsuario , esPolitica, idPoli){
        const respuesta = await  Usuario.actualizarPolitica(idUsuario, esPolitica, idPoli)
        if( respuesta == false ) { throw new Error() }
        return respuesta
    }
    
}

module.exports = UsuarioService;