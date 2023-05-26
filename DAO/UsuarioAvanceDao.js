const pool = require('../database/config')
const MenuAvanceDTO = require('../DTO/MenuAvanceDTO')
const SubMenuAvanceDTO = require('../DTO/SubMenuAvanceDTO')
const ValorAvanceDTO = require('../DTO/ValorAvanceDTO')



class UsuarioAvanceDao{
    constructor(){
    }
  
    static obtenerMenusAvance =async (idUsuario) => {
        try {
            let lstAvanceMenus = [];
            let result =  await pool.query('SELECT ME.idMenu, ME.nombre, UA.esVisitado , ME.orden , ME.link FROM usuarios_avance UA '+
            ' INNER JOIN menus  ME '+
            ' ON ME.idMenu= UA.idMenu '+
            ' WHERE UA.idUsuario = ? '+
            ' AND ME.menuIdMenu IS NULL ' +
            ' ORDER BY ME.orden ASC',[idUsuario])
        
       
            if(Object.keys(result).length !== 0)
                {
                result.forEach(e => {
                    let objMenu = new MenuAvanceDTO(e.idMenu,e.nombre ,e.esVisitado,e.orden,e.link)            
                    lstAvanceMenus.push(objMenu)                
                });
            }
            return lstAvanceMenus;
        } catch (error) {
            console.log('UsuarioAvanceDao |obtenerMenusAvance| '+error);                 
        }
    }
    static obtenerSubMenusAvance =async (idUsuario,idMenu) => {
        try {
            let lstAvanceSubMenu = [];
            let result =  await pool.query('SELECT  ME.idMenu as idSubMenu ,  ME.nombre, UA.esVisitado , ME.orden , ME.link FROM usuarios_avance UA '+
            ' INNER JOIN menus  ME '+
            ' ON ME.idMenu= UA.idMenu '+
            ' WHERE UA.idUsuario = ? '+
            ' AND ME.menuIdMenu IS NOT NULL ' +
            ' AND ME.menuIdMenu = ? ' +
            ' ORDER BY ME.orden ASC',[idUsuario,idMenu])
    
       
            if(Object.keys(result).length !== 0)
            {
                result.forEach(e => {
                    let objSubMenu = new SubMenuAvanceDTO(e.idSubMenu,  e.nombre ,e.esVisitado,e.orden,e.link)
                    lstAvanceSubMenu.push(objSubMenu)                
                });
            }        
            return lstAvanceSubMenu;
                    
        } catch (error) {
            console.log('UsuarioAvanceDao |obtenerSubMenusAvance| '+error);            
        }
    }


    static obtenerMenuHabilitado = async( idUsuario , idMenuActual) => {
        try {
            let respuesta  = 0;
            let result =  await pool.query('select  esHabilitado  from usuarios_avance  '+
            ' WHERE idUsuario = ? AND idMenu = ? ',[idUsuario,idMenuActual])

            if(Object.keys(result).length !== 0)
            {
                respuesta =  result[0].esHabilitado    
            }        
            return respuesta;

            
        } catch (error) {
            console.log('UsuarioAvanceDao |obtenerMenuHabilitado| '+error);            
        }
    }


    static actualizarVisitadoMenu = async(idUsuario , idMenu) => {
        try {
            let result =  await pool.query('update  usuarios_avance ' +
               ' set esVisitado  = 1 '+
                ' WHERE idUsuario = ? AND idMenu = ? ',[idUsuario,idMenu])
                return (result.affectedRows == 1) ? true : false;
                    
        } catch (error) {
            console.log('UsuarioAvanceDao |actualizarVisitadoMenu| '+error); 
        }

    }

    static habilitarSiguienteMenu = async(idUsuario , idMenu) => {
    try {
        
        let idMenuSiguiente = 0;
        let idMenuSiguientePolitica = 0;
        let result;
        
        if(parseInt(idMenu) === 6)
        {
            //menu documentos
            idMenuSiguiente = 2;
            idMenuSiguientePolitica = 7;
        }
        else if(parseInt(idMenu) === 8)
        {
            //menu induccion
            idMenuSiguiente = 3;
        }
        else if(parseInt(idMenu) === 3 || parseInt(idMenu) === 9)
        {
            //menu induccion
            idMenuSiguiente = 9;
        }
        else if(parseInt(idMenu) === 10)
        {
            //menu induccion
            idMenuSiguiente = 10;
        }
        else{
            idMenuSiguiente = parseInt(idMenu) + 1 ;
    
        }
       
        if(idMenuSiguientePolitica === 7){
            result =  await pool.query('update  usuarios_avance ' +
            ' set esHabilitado  = 1 '+
             ' WHERE idUsuario = ? AND idMenu = ? ',[idUsuario,idMenuSiguiente])
    
            result =  await pool.query('update  usuarios_avance ' +
            ' set esHabilitado  = 1 '+
             ' WHERE idUsuario = ? AND idMenu = ? ',[idUsuario,idMenuSiguientePolitica])
            console.log("habilito ambos menus ppolitica y documentos")    
        }else{
            result =  await pool.query('update  usuarios_avance ' +
               ' set esHabilitado  = 1 '+
                ' WHERE idUsuario = ? AND idMenu = ? ',[idUsuario,idMenuSiguiente])
        
        }
             
        return (result.affectedRows == 1) ? true : false;
    } catch (error) {
        console.log('UsuarioAvanceDao |habilitarSiguienteMenu| '+error); 
    }
    }


    static actualizarValorAvance = async(idUsuario) => {
        try {
            let result = await pool.query('update usuarios u '+
            ' set u.valorAvance =(select  sum( me.pesoAvance)   from usuarios_avance  ua '+  
                        ' inner join menus me on me.idMenu = ua.idMenu ' +
                         'WHERE ua.idUsuario = ? and ua.esVisitado = 1) +'+ 
                         '(select IFNULL(sum(ud.esCargado),0)*5 from usuarios_documento  ud where  ud.idUsuario = ?)'+
            'where u.idUsuario = ?',[idUsuario,idUsuario,idUsuario])
    
            return (result.affectedRows == 1) ? true : false;
    
        } catch (error) {
            console.log('UsuarioAvanceDao |actualizarValorAvance| '+error); 
        }
    }

    static obtenerValorAvance = async(idUsuario) => {
        try {
            let objValorAvanceDTO ;
            let result =  await pool.query('SELECT valorAvance,  envioMitad ,  envioFinal , correoElectronico , correoAdmin , Nombres , Apellidos ,numeroDocumento FROM usuarios where idUsuario = ?',[idUsuario])
            
            if(Object.keys(result).length !== 0)
            {
                 objValorAvanceDTO = new ValorAvanceDTO(result[0].valorAvance , 
                                                           result[0].envioMitad,
                                                           result[0].envioFinal ,
                                                           result[0].correoElectronico,
                                                           result[0].correoAdmin,
                                                           result[0].Nombres,
                                                           result[0].Apellidos,
                                                           result[0].numeroDocumento
                                                           )            
            }


            return objValorAvanceDTO
    
        } catch (error) {
            console.log('UsuarioAvanceDao |obtenerValorAvance| '+error); 
        }
    }
}


module.exports = UsuarioAvanceDao