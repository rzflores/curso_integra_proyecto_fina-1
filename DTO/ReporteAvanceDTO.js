const { secondsToString } = require('../helpers/converciones')

class ReporteAvanceDTO {
    constructor(idUsuario,
                Nombres,
                Apellidos,                    
                numeroDocumento,
                Contrasenia,
                valorAvance,
                numeroIngreso,
                tiempoCulminacion,       
          ){
        this.idUsuario = idUsuario
        this.Nombres = Nombres
        this.Apellidos = Apellidos
        this.numeroDocumento = numeroDocumento
        this.Contrasenia = Contrasenia
        this.valorAvance = (valorAvance > 100) ? 100 : valorAvance
        this.numeroIngreso = numeroIngreso
        this.tiempoCulminacion = secondsToString(tiempoCulminacion)
        }  
        
}

module.exports = ReporteAvanceDTO;