
const DocumentacionVM = require('../viewModels/DocumentacionVM') 

const Usuario  = require('../models/Usuario');
const UsuarioDocumentoService = require('../services/UsuarioDocumentoService');
const UsuarioAvanceService = require('../services/UsuarioAvanceService')





const postCargarDocumentacion = async (req  , res ) => {

    try {


        let lstUsuarioDocumentosNombres = [];
        let idDocQuery =   req.query.codeDoc
        let idDoc = parseInt(idDocQuery.split("_")[0])
        let divId = "documentacion_1";
        let usuario = new Usuario()
        usuario = req.session.user  
        let idMenu = 0;
        let idMenuLateral = 2;

        await  UsuarioDocumentoService.actualizarCargaDocumento(usuario.idUsuario ,idDoc  ,req.file.originalname );
        
        let resultHabilitarSiguiente = false;
        let valorCargaDocumentos = 0;

        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 2)
        
        usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)
        lstUsuarioDocumentosNombres =  await UsuarioDocumentoService.obtenerUsuarioDocumentosNombres(usuario.idUsuario);


        if(idDoc === 1 || idDoc === 2|| idDoc === 3||idDoc === 4  || idDoc === 5  || idDoc === 6  || idDoc === 7  || idDoc === 8 || idDoc === 9 || idDoc === 17 ){
            valorCargaDocumentos = await UsuarioDocumentoService.obtenerValorCargaDocumentos(usuario.idUsuario,1)
            await UsuarioDocumentoService.actualizarNombreDocumento(usuario.idUsuario,idDoc,req.file.filename);   
            lstUsuarioDocumentosNombres = await UsuarioDocumentoService.obtenerUsuarioDocumentosNombres(usuario.idUsuario);
            if(parseInt(valorCargaDocumentos) === 10) {
                resultHabilitarSiguiente =  await UsuarioAvanceService.habilitarSiguiente(usuario.idUsuario,7)
            }
            idMenu = 7;
            divId = "documentacion_1"
        }else{
            valorCargaDocumentos = await UsuarioDocumentoService.obtenerValorCargaDocumentos(usuario.idUsuario,1)
            await UsuarioDocumentoService.actualizarNombreDocumento(usuario.idUsuario,idDoc,req.file.filename);   
            lstUsuarioDocumentosNombres = await UsuarioDocumentoService.obtenerUsuarioDocumentosNombres(usuario.idUsuario);
            if( parseInt(valorCargaDocumentos) === 16) {
                resultHabilitarSiguiente =  await UsuarioAvanceService.habilitarSiguiente(usuario.idUsuario,8)
            }
             idMenu = 8;   
            divId="documentacion_2"
        }

        let documentacionVM = new DocumentacionVM( usuario , lstAvanceMenus , lstAvanceSubMenus ,  lstUsuarioDocumentosNombres , divId , idMenu , idMenuLateral )

        res.render( 'documentacion.ejs', { documentacionVM : documentacionVM })
        
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}



module.exports =  {
    postCargarDocumentacion
}
