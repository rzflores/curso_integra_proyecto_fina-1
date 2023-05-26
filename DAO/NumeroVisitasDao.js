const logger = require('../logger/logGenerator');
const pool = require('../database/config')

class NumeroVisitasDao{
    static obtenerNumeroVisitas = async () => {
        try {
        
            let numVisitas = 0;
            let result =  await pool.query('select numeroVisitas from visitas')
            if(Object.keys(result).length !== 0)
                {
                    numVisitas = result[0].numeroVisitas                    
                }
            return numVisitas;                    
        } catch (error) {
            console.log('NumeroVisitasDao |obtenerNumeroVisitas| '+error);          
            logger.info('NumeroVisitasDao |obtenerNumeroVisitas| '+error);          
            
        }
    }

    static aumentarNumeroVisitas = async() => {
        try {
            let result =  await pool.query('update  visitas u set numeroVisitas = u.numeroVisitas + 1')
            return (result.affectedRows == 1) ? true : false;
            } catch (error) {
                console.log('NumeroVisitasDao |aumentarNumeroVisitas| '+error);       
                logger.info('NumeroVisitasDao |aumentarNumeroVisitas| '+error);       
            }
    }
}

module.exports = NumeroVisitasDao;