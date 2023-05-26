class UsuarioDTO
{
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
        esAceptoPoli3){
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

}

module.exports = UsuarioDTO