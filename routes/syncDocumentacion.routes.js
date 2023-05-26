/*
    rutas de auth
    ruta: /syncDocumentacion
*/

const { Router } = require('express')
const {  postCargarDocumentacion   }  = require('../controllers/syncDocumentacion.controller')
const router = Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path');



const storage = multer.diskStorage({
    destination : (req , file , cb) => {
        let u = req.session.user
        let  codeDoc = req.query.codeDoc
        let id = codeDoc.split("_")[0]
        let pathDestination =  path.join( __dirname,'../public/files_in',u.numeroDocumento);
        
        if (!fs.existsSync(pathDestination)){
            fs.mkdirSync(pathDestination)
        }
    
       
        if(id <= 9 || id == 17){
            pathDestination = path.join( __dirname,'../public/files_in',u.numeroDocumento,'DAP' )
        }else{
            pathDestination = path.join( __dirname,'../public/files_in',u.numeroDocumento,'DBO' )    
        }
        
        console.log(pathDestination)
        if (!fs.existsSync(pathDestination)){
                fs.mkdirSync(pathDestination)
        }
        
        cb(null , pathDestination)
    },

    
    filename : (req , file , cb) => {
       let  codeDoc = req.query.codeDoc
       let u = req.session.user
        let id = codeDoc.split("_")[0]
        let name = codeDoc.split("_")[1]
        let extension = file.originalname.split(".")[1]
        cb(null,  codeDoc + "_" + u.numeroDocumento +"."+ extension  )
        
    }
})


let upload = multer({
    storage : storage
})



router.post(
    '/cargarDocumentacion',     
    upload.single('file_inDoc1') ,
    postCargarDocumentacion
    )

router.post(
    '/cargarDocumentacion2',     
    upload.single('file_inDoc2') ,
    postCargarDocumentacion
    )
        
router.post(
    '/cargarDocumentacion3',     
    upload.single('file_inDoc3') ,
    postCargarDocumentacion
    )

router.post(
    '/cargarDocumentacion4',     
    upload.single('file_inDoc4') ,
    postCargarDocumentacion
    )    

router.post(
    '/cargarDocumentacion5',     
    upload.single('file_inDoc5') ,
    postCargarDocumentacion
    )    
router.post(
    '/cargarDocumentacion6',     
    upload.single('file_inDoc6') ,
    postCargarDocumentacion
    )
router.post(
    '/cargarDocumentacion7',     
    upload.single('file_inDoc7') ,
    postCargarDocumentacion
    )

router.post(
    '/cargarDocumentacion8',     
    upload.single('file_inDoc8') ,
    postCargarDocumentacion
    )
router.post(
    '/cargarDocumentacion9',     
    upload.single('file_inDoc9') ,
    postCargarDocumentacion
    ) 

router.post(
    '/cargarDocumentacion10',     
    upload.single('file_inDoc10') ,
    postCargarDocumentacion
    )
router.post(
    '/cargarDocumentacion11',     
    upload.single('file_inDoc11') ,
    postCargarDocumentacion
    )
router.post(
    '/cargarDocumentacion12',     
    upload.single('file_inDoc12') ,
    postCargarDocumentacion
    )
router.post(
    '/cargarDocumentacion13',     
    upload.single('file_inDoc13') ,
    postCargarDocumentacion
    )
router.post(
    '/cargarDocumentacion14',     
    upload.single('file_inDoc14') ,
    postCargarDocumentacion
    )
router.post(
    '/cargarDocumentacion15',     
    upload.single('file_inDoc15') ,
    postCargarDocumentacion
    )                        
router.post(
    '/cargarDocumentacion16',     
    upload.single('file_inDoc16') ,
    postCargarDocumentacion
    )
router.post(
        '/cargarDocumentacion17',     
        upload.single('file_inDoc17') ,
        postCargarDocumentacion
        )    


module.exports = router;