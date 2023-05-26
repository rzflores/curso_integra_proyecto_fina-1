const TrabajadoresDao = require('../DAO/TrabajadoresDao');
const AuthDao = require('../DAO/AuthDao');

class Usuario {
    constructor(idUsuario,
                Nombres,
                Apellidos,
                numeroDocumento,
                Contrasenia,
                valorAvance,
                idRol,
                esHabilitado,
                induccionRH,
                induccionSeg,
                nombreHojaRuta,
                limiteFecha,
                correoElectronico,
                correoAdmin,
                numeroIngreso,
                tiempoCulminacion,
                esAceptoPoli,
                esAceptoPoli2,
                esAceptoPoli3
                )
    {
        this.idUsuario = idUsuario,
        this.Nombres   = Nombres,     
        this.Apellidos = Apellidos,        
        this.numeroDocumento = numeroDocumento,
        this.Contrasenia     = Contrasenia,
        this.valorAvance     = valorAvance,
        this.idRol           = idRol,
        this.esHabilitado    = esHabilitado,
        this.induccionRH = induccionRH,
        this.induccionSeg = induccionSeg      
        this.nombreHojaRuta = nombreHojaRuta,
        this.limiteFecha = limiteFecha,
        this.correoElectronico = correoElectronico,
        this.correoAdmin = correoAdmin,
        this.numeroIngreso = numeroIngreso,
        this.tiempoCulminacion = tiempoCulminacion ,
        this.esAceptoPoli =    esAceptoPoli   ,
        this.esAceptoPoli2 = esAceptoPoli2,
        this.esAceptoPoli3 = esAceptoPoli3 
        
    }
    
    static async loginUsuario(authDTO){
        let usuario =await AuthDao.loginUsuario(authDTO);
        return usuario;  
    }
    static async InsertarTrabajador(usuario)  {
        let result =await TrabajadoresDao.insertarTrabajador(usuario);
        return (result !== null) ? result : 0;  
    } 
    static async InsertarOpcionesTrabajador(idUsuario){
        let result =await TrabajadoresDao.insertarOpcionesTrabajador(idUsuario);
        return result;
    }
    static async InsertarDocumentosTrabajador(idUsuario){
        let result =await TrabajadoresDao.insertarDocumentosTrabajador(idUsuario);
        return result
    }
    static async ObtenerTrabajadores()  {
        let resultList =await TrabajadoresDao.obtenerTrabajadores();
        return resultList;  
    } 

    static async ObtenerTrabajador(idUsuario)  {
        let usuario =await TrabajadoresDao.obtenerTrabajador(idUsuario);
        return usuario;  
    } 

    static async EditarTrabajador(usuario)  {
        let result =await TrabajadoresDao.editarTrabajador(usuario);
        return result;  
    }

    static async DeshabilitarTrabajador(deshabilitarTrabajador)  {
        let result =await TrabajadoresDao.deshabilitarTrabajador(deshabilitarTrabajador);
        return result;  
    }

    static async AumentarNumeroIngreso(idUsuario)  {
        let result =await TrabajadoresDao.aumentarNumeroIngreso(idUsuario);
        return result;  
    }

    static async ObtenerPrimerIngreso(idUsuario){
        let result =await TrabajadoresDao.obtenerPrimerIngreso(idUsuario);
        return result; 
    }

    static async ActualizarInicioFecha(idUsuario,fechaIncio){
        let result =await TrabajadoresDao.actualizarInicioFecha(idUsuario,fechaIncio);
        return result;         
    }
    
    static async ActualizarEnvioMitad(idUsuario)  {
        let result =await TrabajadoresDao.actualizarEnvioMitad(idUsuario);
        return result;  
    }
    static async ActualizarEnvioFinal(idUsuario)  {
        let result =await TrabajadoresDao.actualizarEnvioFinal(idUsuario);
        return result;  
    }

    static async ActualizarFinInduccion(idUsuario)  {
        let result =await TrabajadoresDao.actualizarFinInduccion(idUsuario);
        return result;  
    }


    static async ObtenerTrabajadores()  {
        let resultList =await TrabajadoresDao.obtenerTrabajadores();
        return resultList;  
    } 

    static async obtenerReporteAvance()  {
        let resultList =await TrabajadoresDao.obtenerReporteAvance();
        return resultList;  
    } 

    static async actualizarPolitica(idUsuario , esPolitica, idPoli){
        let result =await TrabajadoresDao.actualizarPolitica(idUsuario , esPolitica, idPoli);
        return result; 
    }

    
    

}

module.exports  =  Usuario;