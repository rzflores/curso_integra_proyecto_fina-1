class SubMenuAvanceDTO {
    constructor( idSubMenu ,
                 nombre,
                 esVisitado  , 
                 orden ,
                 link ){
        this.idSubMenu = idSubMenu,
        this.nombre = nombre,
        this.esVisitado   = esVisitado ,
        this.orden   = orden ,
        this.link   = link 
    }  
        
}


module.exports = SubMenuAvanceDTO;