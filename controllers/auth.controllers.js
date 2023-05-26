
const AdminTrabajadoresVM = require('../viewModels/AdminTrabajadoresVM')
const ConocenosVM = require('../viewModels/ConocenosVM')

const AuthDTO = require('../DTO/AuthDTO');

const UsuarioService = require('../services/UsuarioService');
const NumeroVisitasService = require('../services/NumeroVisitasService');
const UsuarioAvanceService = require('../services/UsuarioAvanceService')


const loginUsuario = async (req  , res ) => {
    
    const {  numeroDocumento , contrasenia } = req.body;
    try {
        let authDTO = new AuthDTO( numeroDocumento , contrasenia )
        
        let { usuario , login }   = await UsuarioService.loginUsuario( authDTO )

        if(login === true){
            if(usuario.esHabilitado === 0){ res.render('login' , {exitoLogin : false , deshabilitado:true})}

            req.session.user = usuario;
            if(usuario.idRol === 2){
                let idMenu = 4;
                let divId = "CerroVerdeVirtual"
                await UsuarioService.aumentarNumeroIngreso(usuario.idUsuario);
                let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)
                let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)   
                await NumeroVisitasService.aumentarNumeroVisitas();
                await UsuarioService.actualizarPrimerIngreso(usuario.idUsuario)
                let conocenosVM = new ConocenosVM( usuario , lstAvanceMenus , lstAvanceSubMenus , divId , idMenu , 1 )
                res.render('conocenos',{ conocenosVM : conocenosVM })
            }
            else{
                
                let lstTrabajadores = await UsuarioService.obtenerTrabajadores();
                let numeroVisitas = await NumeroVisitasService.obtenerNumeroVisitas();

                let adminTrabajadoresVM = new AdminTrabajadoresVM(usuario,lstTrabajadores,null,numeroVisitas)
                res.render('admin', { adminTrabajadoresVM : adminTrabajadoresVM })
            }    
        }else{
            res.render('login' , {exitoLogin : false , deshabilitado:false})
        } 
    } catch (error) {
            console.log(error)
            res.status(500).json({
                ok:false,
                msg:  'loginUsuario | Error:'+error
            })
    }

}

module.exports = {
    loginUsuario,
}