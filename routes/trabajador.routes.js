/*    
    ruta: /trabajador
*/

const { Router } = require('express')
const { getEditarTrabajador  , 
        getInsertarTrabajador,
        postInsertarTrabajador , 
        postEditarTrabajador , 
        postDeshablitarTrabajador  
    }  = require('../controllers/trabajador.controllers')
const router = Router()
const multer = require('multer')
const path = require('path');



const storage = multer.diskStorage({
    destination : (req , file , cb) => {

        cb(null , path.join( __dirname,'../public/files_hoja' ))
    }, 
    filename : (req , file , cb) => {
        let u = req.session.user
        console.log(file) 
        let extension = file.originalname.split(".")[1]
        
        cb(null,  "HojaRuta_" + req.body.txtNroDocumento +"."+ extension  )
    }
})


let upload = multer({
    storage : storage
})

router.get(
    '/',     
    getInsertarTrabajador
    )


router.post(
    '/',
    upload.single('fileHojaRuta') ,     
    postInsertarTrabajador
    )
    

router.post(
    '/deshabilitar',     
    postDeshablitarTrabajador
    )


    
router.post(
    '/redirectEditarTrabajador',     
    getEditarTrabajador
)


router.post(
    '/editarTrabajador', 
    upload.single('fileHojaRutaEditar') ,        
    postEditarTrabajador
)


// router.post(
//     '/obtenerTrabajador',     
//     obtenerTrabajador
// )


module.exports = router;