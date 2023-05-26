/*
    rutas de navegacion
    ruta: /
*/

const { Router } = require('express')
const   { 
    getConocenos  , 
    getConocenos1 , 
    getConocenos2 ,
    getConocenos3 ,
    getConocenos4 ,
    getDocumentacion1 , 
    getDocumentacion2 , 
    getInducciones1 ,
    getInducciones2 , 
    getDocumentacion , 
    getInducciones ,
    getAdmin,
    getDocumentosAdmin,
    postHabilitarSiguiente,
    getReporteIngresos,
    getReporteAvance,
    getDocumentosDescargaMasiva ,
    descargaMasivaDAP,
    descargaMasivaDBO,
    getEditarPolitica 
} = require('../controllers/panel.controller');

const router = Router()



router.get('/',(req,res)=>{
    res.render( 'login.ejs' , {exitoLogin : true,deshabilitado :false} )   
})

//Conocenos

router.get('/conocenos',getConocenos)
router.get('/conocenos_1',getConocenos1)
router.get('/conocenos_2',getConocenos2)
router.get('/conocenos_3',getConocenos3)
router.get('/conocenos_4',getConocenos4)

//documentacion

router.get('/documentacion',getDocumentacion)
router.get('/documentacion_1',getDocumentacion1)
router.get('/documentacion_2',getDocumentacion2)

//inducciones

router.get('/inducciones',getInducciones)
router.get('/induccion_1',getInducciones1)
router.get('/induccion_2',getInducciones2)

//admin

router.get('/admin',getAdmin)
router.get('/documentosAdmin',getDocumentosAdmin)
router.get('/reporteIngresos', getReporteIngresos  ) 
router.get('/reporteAvance', getReporteAvance  ) 
router.post('/postHabilitarPolitica',getEditarPolitica)
router.post('/habilitarSiguiente' , postHabilitarSiguiente)
router.get('/documentosDescargaMasiva',getDocumentosDescargaMasiva)
router.post('/descargaMasivaDAP',descargaMasivaDAP)
router.post('/descargaMasivaDBO',descargaMasivaDBO)

module.exports = router;