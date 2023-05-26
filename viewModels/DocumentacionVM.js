class DocumentacionVM
{
    constructor(usuario,
                avanceMenus,
                avanceSubMenus,
                lstUsuarioDocumentoNombres,
                divId ,
                menuActual,
                menuLateral){
       this.usuario = usuario,
       this.avanceMenus = avanceMenus
       this.avanceSubMenus = avanceSubMenus,
       this.lstUsuarioDocumentoNombres  = lstUsuarioDocumentoNombres,
       this.divId = divId,
       this.menuActual = menuActual,
       this.menuLateral = menuLateral
    }
}

module.exports = DocumentacionVM;