class ValorAvanceDTO{
    
    constructor( valorAvance,envioMitad,envioFinal,correElectronico,correoAdmin,nombres,apellidos,numeroDocumento){
        this.valorAvance = valorAvance,
        this.envioMitad = envioMitad,
        this.envioFinal = envioFinal,
        this.correElectronico = correElectronico,
        this.correoAdmin = correoAdmin,
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.numeroDocumento = numeroDocumento
    }
}

module.exports = ValorAvanceDTO;