class ConocenosVM
{
    constructor(usuario,
                avanceMenus,
                avanceSubMenus,
                divId ,
                menuActual,
                menuLateral){
       this.usuario = usuario,
       this.avanceMenus = avanceMenus
       this.avanceSubMenus = avanceSubMenus,
       this.divId = divId,
       this.menuActual = menuActual,
       this.menuLateral = menuLateral
    }
}

module.exports = ConocenosVM;