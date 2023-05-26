const pool = require('../database/config')
const AuthDTO = require('../DTO/AuthDTO')
const UsuarioDTO = require('../DTO/UsuarioDTO')
const { formatDate } = require('../helpers/converciones')

class AuthDao{
    constructor(){}

    static loginUsuario = async (authDTO) =>{   
        try {
            let objAuthDao =  new AuthDTO(authDTO.numeroDocumento,authDTO.contrasenia)
            let objUsuario;
            let result =  await pool.query('SELECT * FROM usuarios WHERE  numeroDocumento =? AND Contrasenia =?',
                                            [objAuthDao.numeroDocumento,objAuthDao.contrasenia])
            if(Object.keys(result).length !== 0)
            {
             
                objUsuario = new UsuarioDTO(result[0].idUsuario,
                    result[0].Nombres,
                    result[0].Apellidos,
                    result[0].numeroDocumento,
                    result[0].contrasenia,
                    result[0].valorAvance,
                    result[0].idRol ,
                    result[0].esHabilitado,
                    formatDate(result[0].induccionRH),
                    formatDate(result[0].induccionSeg),
                    result[0].nombreHojaRuta ,
                    formatDate(result[0].limiteFecha),
                    result[0].correoElectronico ,
                    result[0].correoAdmin,
                    null,
                    null,
                    result[0].esAceptoPoli ,
                    result[0].esAceptoPoli2 ,
                    result[0].esAceptoPoli3
                    )
            }
            return objUsuario;
        } catch (error) {
            console.log('authDao |loginUsuario| '+error);   
        }
    
    }

}

module.exports = AuthDao;