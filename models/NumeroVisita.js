const NumeroVisitasDao = require('../DAO/NumeroVisitasDao')

class NumeroVisitas{
    constructor(){
        this.numeroVisitas  
    }
    getNumeroVisita = async () => {
        this.numeroVisitas =await NumeroVisitasDao.obtenerNumeroVisitas();                 
    }
    //aumentar numero de visitar en 1
    static setNumeroVisita =async () => {
        let result =await NumeroVisitasDao.aumentarNumeroVisitas();
        return result;       
    }

}

module.exports = NumeroVisitas