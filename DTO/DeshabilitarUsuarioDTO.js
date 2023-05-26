class DeshabilitarUsuarioDTO{
    constructor(idUsuario,accionHabilitar){
        this.idUsuario = idUsuario,
        this.accionHabilitar = parseInt(accionHabilitar)
    }

}
module.exports = DeshabilitarUsuarioDTO;