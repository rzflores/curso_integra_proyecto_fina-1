const NumeroVisita = require("../models/NumeroVisita");


class NumeroVisitasService{
    constructor(){}

    static async obtenerNumeroVisitas(){
        try {
            let objNumeroVisita = new NumeroVisita()
            await objNumeroVisita.getNumeroVisita();

            if( objNumeroVisita.numeroVisitas ===  0){
                throw new Error()
            }            
            return  objNumeroVisita.numeroVisitas;
        } catch (error) {
            console.log("NumeroVisitasService | obtenerNumeroVisitas | Error:" + error)
        }
    }

    static async aumentarNumeroVisitas(){
        try {
            let respuestaAumentarNumeroVisitas = false;
            respuestaAumentarNumeroVisitas = await  NumeroVisita.setNumeroVisita();
            if(respuestaAumentarNumeroVisitas === false)
            {
                throw new Error()
            }  
            return respuestaAumentarNumeroVisitas;
            
        } catch (error) {
            console.log("NumeroVisitasService | aumentarNumeroVisitas | Error:"+ error)
        }
    }

   
}

module.exports = NumeroVisitasService;