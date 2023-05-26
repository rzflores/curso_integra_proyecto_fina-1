const pool = require('../database/config')
const ReporteIngresoDTO = require('../DTO/ReporteIngresosDTO')


class MenuDao{    

    static actualizarCantidadIngresos = async(idMenu) => {
        try {
            let result = await pool.query('UPDATE  menus m set m.cantidadIngresos = m.cantidadIngresos + 1  where m.idMenu = ?',[idMenu])
            return (result.affectedRows == 1) ? true : false;
        } catch (error) {
            console.log('MenuDao |actualizarCantidadIngresos| '+error); 
        }
    }

    static obtenerReporteIngresos = async() => {
        try {
            let lstReporteIngresos = [];
            let result =  await pool.query('select  m.nombre , m.cantidadIngresos  from menus m where m.idMenu <= 10')
              if(Object.keys(result).length !== 0)
              {
              result.forEach(e => {
                  let objReporteIngreso = new ReporteIngresoDTO(e.nombre,e.cantidadIngresos)
                  lstReporteIngresos.push(objReporteIngreso)                
              });
          }
            return lstReporteIngresos;
                    
        } catch (error) {
            console.log('MenuDao |obtenerReporteIngresos| '+error); 
        }
    }
}

module.exports = MenuDao;