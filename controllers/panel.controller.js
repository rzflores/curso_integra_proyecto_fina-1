const logger = require('../logger/logGenerator');

const ConocenosVM = require('../viewModels/ConocenosVM')
const DocumentacionVM = require('../viewModels/DocumentacionVM')
const DocumentosAdminCommonVM = require('../viewModels/DocumentosAdminCommonVM')
const ReporteAdminCommonVM = require('../viewModels/ReporteAdminCommonVM')
const InduccionesVM = require('../viewModels/InduccionesVM')
const AdminTrabajadoresVM = require('../viewModels/AdminTrabajadoresVM')

const archiver = require('archiver');
const fs = require('fs')
const path = require('path');


const UsuarioService = require('../services/UsuarioService');
const NumeroVisitasService = require('../services/NumeroVisitasService');
const UsuarioAvanceService = require('../services/UsuarioAvanceService');
const MenuServices = require('../services/MenuServices');
const UsuarioDocumentoService = require('../services/UsuarioDocumentoService');

const UsuarioDTO = require('../DTO/UsuarioDTO');

// Trabajador Methods

const getConocenos = async (req  , res ) => {

    try {
        let idMenu = 1
        let usuario = new UsuarioDTO()
        usuario = req.session.user

        await MenuServices.actualizarCantidadIngresos(idMenu)

        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , idMenu)
        
        let conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, "CerroVerdeVirtual" , idMenu, 1 )
        res.render( 'conocenos.ejs', { conocenosVM : conocenosVM })                   
       
        
    } catch (error) {
            res.status(500).json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const getConocenos1 = async (req  , res ) => {

    try {
        let idMenu = 4
        let usuario = new UsuarioDTO()
        usuario = req.session.user

        await MenuServices.actualizarCantidadIngresos(idMenu)
        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)

        let conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, "CerroVerdeVirtual" , idMenu, 1 )
        res.render( 'conocenos.ejs', { conocenosVM : conocenosVM })     
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const getConocenos2 = async (req  , res ) => {
    try {
        let idMenu = 5
        let usuario = new UsuarioDTO()
        usuario = req.session.user
        let idMenuActual = req.query.MenuActual
        let conocenosVM;

        let menuHabilitado = await UsuarioAvanceService.obtenerMenuHabilitado(usuario.idUsuario,idMenuActual);

        if(menuHabilitado === 0){

            await MenuServices.actualizarCantidadIngresos(4)
            let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
            let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)

            conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, "CerroVerdeVirtual" , 4, 1 )
            res.render( 'conocenos.ejs',{ conocenosVM : conocenosVM})                  
        }
        else{
            usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)
            await MenuServices.actualizarCantidadIngresos(idMenu)
            await UsuarioAvanceService.actualizarVisitadoMenu(usuario.idUsuario , idMenu)
            let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
            let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)

            conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, "CulturaAltoRendimiento" , idMenu, 1 )
            res.render( 'conocenos.ejs',{ conocenosVM : conocenosVM})   
        }
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}

const getConocenos3 = async (req  , res ) => {

    try {
        let idMenu = 6
        let usuario = new UsuarioDTO()
        usuario = req.session.user
        let idMenuActual = req.query.MenuActual
        let conocenosVM;


        let menuHabilitado = await UsuarioAvanceService.obtenerMenuHabilitado(usuario.idUsuario,idMenuActual);
        
        if(menuHabilitado === 0){

            await MenuServices.actualizarCantidadIngresos(4)   
            let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
            let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)
            
            conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, "CerroVerdeVirtual" , 4, 1 )
            res.render( 'conocenos.ejs',{ conocenosVM : conocenosVM})
                    
        }
        else{
            
            usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)
            await MenuServices.actualizarCantidadIngresos(idMenu) 
            await UsuarioAvanceService.actualizarVisitadoMenu(usuario.idUsuario , idMenu)
            let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
            let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)

            conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, "PoliticaInclusionDiversidad" , idMenu, 1 )
            res.render( 'conocenos.ejs',{ conocenosVM : conocenosVM})        
        }
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const getConocenos4 = async (req  , res ) => {

    try {
        let idMenu = 7
        let usuario = new UsuarioDTO()
        usuario = req.session.user
        let idMenuActual = req.query.MenuActual
        let conocenosVM;
           
        let menuHabilitado = await UsuarioAvanceService.obtenerMenuHabilitado(usuario.idUsuario,idMenuActual);
       
        if(menuHabilitado === 0){
           
            await MenuServices.actualizarCantidadIngresos(4)   
            let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
            let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)

            conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, "CerroVerdeVirtual" , 4, 1 )
            res.render( 'conocenos.ejs',{ conocenosVM : conocenosVM})
        }
        else{
            usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)
            await MenuServices.actualizarCantidadIngresos(idMenu)   
            await UsuarioAvanceService.actualizarVisitadoMenu(usuario.idUsuario , idMenu)
            let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
            let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)

            conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, "PoliticaAnticorrupcion" , idMenu, 1 )
            res.render( 'conocenos.ejs',{ conocenosVM : conocenosVM})           
        }
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const getDocumentacion = async (req  , res ) => {

    try {
        let conocenosVM;

        let idMenu = 2
        let usuario = new UsuarioDTO()
        usuario = req.session.user
        let idMenuLateral=req.query.idMenuLateral
        let lstUsuarioDocumentosNombres = [];

        let divId = "documentacion_1"

        let menuHabilitado = await UsuarioAvanceService.obtenerMenuHabilitado(usuario.idUsuario,idMenuLateral);
        

        if(menuHabilitado === 0){

            await MenuServices.actualizarCantidadIngresos(4)  
            let lstAvanceMenus = await  UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
            let lstAvanceSubMenus = await  UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario,1) 
            conocenosVM = new ConocenosVM( usuario , lstAvanceMenus , lstAvanceSubMenus , "CerroVerdeVirtual" , 4 , 1 )
            res.render( 'conocenos.ejs', { conocenosVM : conocenosVM })                   
       
        }else{

            await MenuServices.actualizarCantidadIngresos(idMenu)           
            let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
            let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 2)
            lstUsuarioDocumentosNombres   =await  UsuarioDocumentoService.obtenerUsuarioDocumentosNombres(usuario.idUsuario);    
            usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario) 
            await UsuarioAvanceService.actualizarVisitadoMenu(usuario.idUsuario , idMenu)           

            let documentacionVM = new DocumentacionVM( usuario  , lstAvanceMenus ,lstAvanceSubMenus , lstUsuarioDocumentosNombres, divId, 8 , 2 )
            res.render( 'documentacion.ejs', { documentacionVM : documentacionVM }) 
        }
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const getDocumentacion1 = async (req  , res ) => {

    try {
        let idMenu = 10
        let usuario = new UsuarioDTO()
        usuario = req.session.user
        let idMenuActual=req.query.MenuActual
        let lstUsuarioDocumentosNombres = [];
        
        await MenuServices.actualizarCantidadIngresos(idMenu) 
        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 2)
        lstUsuarioDocumentosNombres   =await UsuarioDocumentoService.obtenerUsuarioDocumentosNombres(usuario.idUsuario);  
        
        let documentacionVM = new DocumentacionVM( usuario  , lstAvanceMenus ,lstAvanceSubMenus,lstUsuarioDocumentosNombres ,  "documentacion_1" , idMenu , 2 )
        res.render( 'documentacion.ejs', { documentacionVM : documentacionVM } )
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const getDocumentacion2 = async (req  , res ) => {
    try {

        let idMenu = 9
        let usuario = new UsuarioDTO()
        usuario = req.session.user
        let idMenuActual=req.query.MenuActual
        let lstUsuarioDocumentosNombres = [];

        await MenuServices.actualizarCantidadIngresos(idMenu) 
        usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)              
        await UsuarioAvanceService.actualizarVisitadoMenu(usuario.idUsuario , idMenu)
        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 2)
        lstUsuarioDocumentosNombres   =await UsuarioDocumentoService.obtenerUsuarioDocumentosNombres(usuario.idUsuario);  

        let documentacionVM = new DocumentacionVM( usuario  , lstAvanceMenus ,lstAvanceSubMenus,lstUsuarioDocumentosNombres , "documentacion_2", idMenu , 2 )
        res.render( 'documentacion.ejs', { documentacionVM : documentacionVM } )

    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const getInducciones = async (req  , res ) => {

    try {
        let idMenu = 3
        let usuario = new UsuarioDTO()
        usuario = req.session.user  
        let idActualLateral = req.query.idActualLateral

        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 3)
        await MenuServices.actualizarCantidadIngresos(idMenu) 
        await UsuarioAvanceService.actualizarVisitadoMenu(usuario.idUsuario , idMenu)
        await UsuarioAvanceService.actualizarVisitadoMenu(usuario.idUsuario , 10)
        await UsuarioAvanceService.habilitarSiguienteMenu(usuario.idUsuario , idMenu)
        lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 3)
        usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)              
        
        let induccionesVM = new InduccionesVM(usuario ,lstAvanceMenus,lstAvanceSubMenus,"induccion_1",10,3 )        
        res.render( 'inducciones.ejs', { induccionesVM : induccionesVM })
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const getInducciones1 = async (req  , res ) => {

    try {
        let idMenu = 10
        let usuario = new UsuarioDTO()
        usuario = req.session.user    

        await MenuServices.actualizarCantidadIngresos(idMenu) 
        await UsuarioAvanceService.actualizarVisitadoMenu(usuario.idUsuario , idMenu)
        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 3)
        await UsuarioAvanceService.habilitarSiguienteMenu(usuario.idUsuario , idMenu)
        usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)

        let induccionesVM = new InduccionesVM(usuario ,lstAvanceMenus,lstAvanceSubMenus,"induccion_1",idMenu,3 )        
        res.render( 'inducciones.ejs',{ induccionesVM : induccionesVM })
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const getInducciones2 =  async (req  , res ) => {

    try {
        let idMenu = 11
        let usuario = new UsuarioDTO()
        usuario = req.session.user  
    
        await MenuServices.actualizarCantidadIngresos(idMenu) 
        await UsuarioAvanceService.actualizarVisitadoMenu(usuario.idUsuario , idMenu)
        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 3)
        await UsuarioAvanceService.habilitarSiguienteMenu(usuario.idUsuario , idMenu)
        usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)

        let induccionesVM = new InduccionesVM(usuario ,lstAvanceMenus,lstAvanceSubMenus,"induccion_2",idMenu,3 )     
        res.render( 'inducciones.ejs',{ induccionesVM : induccionesVM })
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}


const getEditarPolitica = async (req  , res ) => {

    try {
        
        
        let idMenu = 7
        let usuario = new UsuarioDTO()
        usuario = req.session.user
        let idMenuActual = req.query.MenuActual
        let esPolitica = req.query.esPolitica
        let idPoli = req.query.idPoli
        
        
        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)   
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)
        await UsuarioService.actualizarPolitica(usuario.idUsuario,esPolitica,idPoli) 

        if(idPoli == 1){
            usuario.esAceptoPoli = esPolitica
        }
        if(idPoli == 2){
            usuario.esAceptoPoli2 = esPolitica
        }
        if(idPoli == 3){
            usuario.esAceptoPoli3 = esPolitica
        }

        usuario.valorAvance = await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)
        let conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, "PoliticaAnticorrupcion" , idMenu, 1 )
        
        res.render('conocenos.ejs', {conocenosVM : conocenosVM})                      
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }

}

const postHabilitarSiguiente = async (req,res)=> {
    try {
        let idMenu = req.query.idMenu
        let usuario = new UsuarioDTO()
        usuario = req.session.user
        
        let divId = req.query.menu
       
        
        await UsuarioAvanceService.habilitarSiguienteMenu(usuario.idUsuario , idMenu)

        usuario.valorAvance =  await UsuarioAvanceService.actualizarValorAvance(usuario.idUsuario)

        let lstAvanceMenus = await UsuarioAvanceService.obtenerMenusAvance(usuario.idUsuario)  
        console.log(usuario.idUsuario) 
        console.log(idMenu) 
        let lstAvanceSubMenus = await UsuarioAvanceService.obtenerSubMenusAvance(usuario.idUsuario , 1)

        let conocenosVM = new ConocenosVM( usuario , lstAvanceMenus, lstAvanceSubMenus, divId , 0, idMenu )

        res.render( 'conocenos.ejs', { conocenosVM : conocenosVM })       
       
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador |'+error
            })
    }
}

//Admin Methods


const getAdmin =  async (req  , res ) => {

    try {
        
         let usuario = new UsuarioDTO()
         usuario = req.session.user  
        
        
         let lstTrabajadores = await UsuarioService.obtenerTrabajadores();
         let numeroVisitas =  await NumeroVisitasService.obtenerNumeroVisitas();

         let adminTrabajadoresVM = new AdminTrabajadoresVM(usuario,lstTrabajadores,null,numeroVisitas)
         res.render('admin.ejs',{ adminTrabajadoresVM : adminTrabajadoresVM })  
       
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador' + error 
            })
    }

}


const getReporteAvance =  async (req  , res ) => {

    try {
        
        let usuario = new UsuarioDTO()
        usuario = req.session.user  
        let lstReporteAvance = await UsuarioService.obtenerReporteAvance();
        let numeroVisitas =  await NumeroVisitasService.obtenerNumeroVisitas();
        let reporteAdminCommonVM = new ReporteAdminCommonVM(usuario , lstReporteAvance , null , numeroVisitas)
        res.render('reporteAvance.ejs',{ reporteAdminCommonVM : reporteAdminCommonVM})  
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}

const getReporteIngresos =  async (req  , res ) => {

    try {
        

        let usuario = new UsuarioDTO()
        usuario = req.session.user  
        let lstReporteIngresos = await MenuServices.obtenerReporteIngresos();
        let numeroVisitas =  await NumeroVisitasService.obtenerNumeroVisitas();
        let reporteAdminCommonVM = new ReporteAdminCommonVM(usuario , lstReporteIngresos , null , numeroVisitas)
        res.render('reporteIngresos.ejs',{ reporteAdminCommonVM : reporteAdminCommonVM})  
         
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}

const getDocumentosAdmin =  async (req  , res ) => {

    try {
        
         let usuario = new UsuarioDTO()
         usuario = req.session.user  
        
         let lstTrabajadores = await UsuarioService.obtenerTrabajadores();
         let lstUsuarioDocumentos = await UsuarioDocumentoService.obtenerUsuarioDocumentos();  
         let numeroVisitas =  await NumeroVisitasService.obtenerNumeroVisitas();

         let documentosAdminCommonVM = new DocumentosAdminCommonVM( usuario, lstTrabajadores,lstUsuarioDocumentos,numeroVisitas)

         res.render('documentosAdmin.ejs',{ documentosAdminCommonVM : documentosAdminCommonVM})  
       
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}

const getDocumentosDescargaMasiva =  async (req  , res ) => {

    try {
        
         let usuario = new UsuarioDTO()
         usuario = req.session.user  
        
         let lstTrabajadores = await UsuarioService.obtenerTrabajadores();
         let numeroVisitas =  await  NumeroVisitasService.obtenerNumeroVisitas();

         res.render('documentosDescargaMasiva.ejs',{ usuario : usuario , lstTrabajadores : lstTrabajadores ,  lstTrabajadoresDocumentos : null ,  numeroVisitas : numeroVisitas})  
       
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}

const descargaMasivaDAP =  async (req  , res ) => {
    try {

        const {  txtNroDocumento } = req.body;    
        let archiveZip = archiver('zip', { zlib: { level: 9 } });
      
        const outputZip = fs.createWriteStream(path.join( __dirname,'../public/files_in',txtNroDocumento,`DAP_${txtNroDocumento}.zip`))
         
        archiveZip.pipe(outputZip);

         
        let archiverZipDestination =path.join( __dirname,'../public/files_in',txtNroDocumento,`DAP_${txtNroDocumento}.zip`)
         
        let archiverZipDirectory = path.join( __dirname,'../public/files_in',txtNroDocumento,'DAP')
                        
        archiveZip.directory(archiverZipDirectory,`/DAP_${txtNroDocumento}`)

        archiveZip.finalize(); 


        outputZip.on('close', () => {
            res.download(archiverZipDestination, (err) => {
              if (err) {
                logger.info('Error-zip:' + err)
              } else {
                logger.info('Zip generado con exito-' + txtNroDocumento)
                logger.info('Zip eliminado despues de descargarlo-' + txtNroDocumento)
                fs.unlinkSync(archiverZipDestination);
              }
            });
          });
       
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }
}


const descargaMasivaDBO =  async (req  , res ) => {
    try {
        const {  txtNroDocumento } = req.body;    
        let archiveZip = archiver('zip', { zlib: { level: 9 } });
      
        const outputZip = fs.createWriteStream(path.join( __dirname,'../public/files_in',txtNroDocumento,`DBO_${txtNroDocumento}.zip`))
         
        archiveZip.pipe(outputZip);

         
        let archiverZipDestination =path.join( __dirname,'../public/files_in',txtNroDocumento,`DBO_${txtNroDocumento}.zip`)
         
        let archiverZipDirectory = path.join( __dirname,'../public/files_in',txtNroDocumento,'DBO')
                        
        archiveZip.directory(archiverZipDirectory,`/DBO_${txtNroDocumento}`)

        archiveZip.finalize(); 


        outputZip.on('close', () => {
            res.download(archiverZipDestination, (err) => {
              if (err) {
                logger.info('Error-zip:' + err)                
              } else {
                logger.info('Zip generado con exito-' + txtNroDocumento)
                logger.info('Zip eliminado despues de descargarlo-' + txtNroDocumento)
                fs.unlinkSync(archiverZipDestination);
              }
            });
          });

        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}






module.exports = {
    getConocenos,
    getDocumentacion,
    getInducciones,
    getConocenos1,
    getConocenos2,
    getConocenos3,
    getConocenos4,
    getDocumentacion1,
    getDocumentacion2,
    getInducciones1,
    getInducciones2,
    getAdmin,
    getDocumentosAdmin,
    postHabilitarSiguiente,
    getReporteIngresos,
    getReporteAvance,
    getDocumentosDescargaMasiva,
    descargaMasivaDAP,
    descargaMasivaDBO,
    getEditarPolitica
}