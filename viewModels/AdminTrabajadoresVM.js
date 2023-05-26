class AdminTrabajadoresVM
{
    constructor(usuario,
                lstTrabajadores,
                respuesta,
                numeroVisitas){
       this.usuario = usuario,
       this.lstTrabajadores = lstTrabajadores
       this.respuesta = respuesta,
       this.numeroVisitas = numeroVisitas
    }
}

module.exports = AdminTrabajadoresVM;