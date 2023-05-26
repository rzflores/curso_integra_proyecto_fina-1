class MenuAvanceDTO{
    constructor( idMenu ,
        nombre,
        esVisitado,
        orden,
        link 
        )
        {
        this.idMenu = idMenu,
        this.nombre = nombre,
        this.esVisitado   = esVisitado ,
        this.orden   = orden ,
        this.link   = link 
        }


}

module.exports = MenuAvanceDTO;