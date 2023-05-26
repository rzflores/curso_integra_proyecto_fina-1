const Menu = require("../models/Menu");


class MenuServices{
    constructor(){}

    static async actualizarCantidadIngresos(idMenu){
        try {
            let respuestaActualizarCantidadIngresos = false;
            respuestaActualizarCantidadIngresos = await  Menu.actualizarCantidadIngresos(idMenu);
            if(respuestaActualizarCantidadIngresos === false)
            {
                throw new Error()
            }  
            return respuestaActualizarCantidadIngresos;
            
        } catch (error) {
            console.log("MenuServices | actualizarCantidadIngresos | Error:"+ error)
        }
    }

    static async obtenerReporteIngresos(){

        try {
            const resultList = await  Menu.obtenerReporteIngresos();
            return resultList
        } catch (error) {
            console.log("MenuServices | obtenerReporteIngresos | Error:" + error)
        }        
    }



   
}

module.exports = MenuServices;