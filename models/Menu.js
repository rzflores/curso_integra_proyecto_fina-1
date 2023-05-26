const MenuDao = require("../DAO/menuDao");

class Menu {
    constructor( idMenu ,
                 nombre,
                 esVisitado,
                 orden,
                 link ){
        this.idMenu = idMenu,
        this.nombre = nombre,
        this.esVisitado   = esVisitado ,
        this.orden   = orden ,
        this.link   = link 
    }

    static actualizarCantidadIngresos  = async (idMenu) => {
        let result =await MenuDao.actualizarCantidadIngresos(idMenu);
        return result;       

    }

    static obtenerReporteIngresos  = async () => {
        let resultList =await MenuDao.obtenerReporteIngresos();
        return resultList;       

    }


    
        
}


module.exports = Menu;