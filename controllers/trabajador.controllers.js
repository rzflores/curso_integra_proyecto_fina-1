const UsuarioService = require("../services/UsuarioService");
const NumeroVisitasService = require('../services/NumeroVisitasService');

const DeshabilitarUsuarioDTO = require('../DTO/DeshabilitarUsuarioDTO');
const UsuarioDTO = require('../DTO/UsuarioDTO');

const EditarTrabajadorVM = require('../viewModels/EditarTrabajadorVM');
const AdminTrabajadoresVM = require('../viewModels/AdminTrabajadoresVM')





const postInsertarTrabajador = async (req  , res  , next) => {

    const file = req.file;

    const {  txtNombres , 
             txtApellidos , 
             txtNroDocumento , 
             txtInduccionRH , 
             txtInduccionSeg ,
             txtLimiteFecha,
             txtCorreoElectronico
            } = req.body;

    try {     

        let usuarioInsert = new UsuarioDTO();        
        usuarioInsert.Nombres = txtNombres;
        usuarioInsert.Apellidos = txtApellidos;
        usuarioInsert.numeroDocumento = txtNroDocumento;
        usuarioInsert.induccionRH = txtInduccionRH;
        usuarioInsert.induccionSeg = txtInduccionSeg;
        usuarioInsert.limiteFecha = txtLimiteFecha;
        usuarioInsert.correoElectronico = txtCorreoElectronico;
        if(!file){
            usuarioInsert.nombreHojaRuta  = null   
        }else{
            usuarioInsert.nombreHojaRuta = req.file.filename ;
        }

        u = req.session.user     
        usuarioInsert.correoAdmin = u.correoElectronico

        let respuesta = await UsuarioService.insertarTrabajador(usuarioInsert)
        let lstTrabajadores = await UsuarioService.obtenerTrabajadores()
        let numeroVisitas = await NumeroVisitasService.obtenerNumeroVisitas();

        let adminTrabajadoresVM = new AdminTrabajadoresVM(usuarioInsert,lstTrabajadores,respuesta,numeroVisitas)

        res.render('admin' , { adminTrabajadoresVM : adminTrabajadoresVM })
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const postEditarTrabajador = async (req  , res ) => {

    const file = req.file;


    const {  txtNombres , 
             idUsuario , 
             txtApellidos , 
             txtValorAvance, 
             txtNroDocumento , 
             txtNuevaContrasenia  ,
             txtRepetirContrasenia , 
             txtInduccionRH , 
             txtInduccionSeg ,
             txtLimiteFecha ,
             txtCorreoElectronico
            } = req.body;

    try {     


        let respuesta = false;        
        let usuarioUpdate = new UsuarioDTO();        
        usuarioUpdate.idUsuario = idUsuario;
        usuarioUpdate.Nombres = txtNombres;
        usuarioUpdate.Apellidos = txtApellidos;
        usuarioUpdate.numeroDocumento = txtNroDocumento;
        usuarioUpdate.esHabilitado = true;
        usuarioUpdate.valorAvance = txtValorAvance;
        usuarioUpdate.Contrasenia = txtNuevaContrasenia;
        usuarioUpdate.induccionRH = txtInduccionSeg;
        usuarioUpdate.induccionSeg = txtInduccionRH;
        usuarioUpdate.limiteFecha = txtLimiteFecha;
        usuarioUpdate.correoElectronico = txtCorreoElectronico;
        
        if(!file){
            usuarioUpdate.nombreHojaRuta  = null   
        }else{
            usuarioUpdate.nombreHojaRuta = req.file.filename ;
        }    

        u = req.session.user        

        
        respuesta =  await UsuarioService.editarTrabajador(usuarioUpdate)  
        let lstTrabajadores = await UsuarioService.obtenerTrabajadores()
        let numeroVisitas = await NumeroVisitasService.obtenerNumeroVisitas();
       
        let adminTrabajadoresVM = new AdminTrabajadoresVM(u,lstTrabajadores,respuesta,numeroVisitas);

        res.render('admin.ejs',{ adminTrabajadoresVM : adminTrabajadoresVM })
       
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'postEditarTrabajador | Error:'+error
            })
    }

}

const getEditarTrabajador = async (req  , res ) => {

    const {  idUser } = req.query;

    try {     
        let trabajador = new UsuarioDTO()                
        trabajador = await UsuarioService.obtenerTrabajador(idUser)

        u = req.session.user    
        
        let editarTrabajadorVM = new EditarTrabajadorVM(u,trabajador);

        res.render('editarTrabajador.ejs',{ editarTrabajadorVM : editarTrabajadorVM })
       
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}

const postDeshablitarTrabajador = async (req  , res ) => {


    const {  idUser , accionHabilitar } = req.query;

    try {     
        u = req.session.user

        let objDeshabilitarUsuarioDTO = new DeshabilitarUsuarioDTO(idUser,accionHabilitar);
        let respuesta =  await UsuarioService.deshabilitarTrabajador(objDeshabilitarUsuarioDTO);

        let lstTrabajadores = await UsuarioService.obtenerTrabajadores()       
        let numeroVisitas = await NumeroVisitasService.obtenerNumeroVisitas();

        let adminTrabajadoresVM = new AdminTrabajadoresVM(u,lstTrabajadores,respuesta,numeroVisitas)

        res.render('admin',{ adminTrabajadoresVM : adminTrabajadoresVM  })
    } catch (error) {
            res.status(500) .json({
                ok:false,
                msg:'postDeshablitarTrabajador | Error:'+error
            })
    }

}

const getInsertarTrabajador = async (req  , res ) => {
    try {     
        u = req.session.user     
        res.render('insertarTrabajador',{ usuario : u  })
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}

module.exports = {
    getInsertarTrabajador,
    postInsertarTrabajador,
    getEditarTrabajador,
    postDeshablitarTrabajador,
    postEditarTrabajador
}

