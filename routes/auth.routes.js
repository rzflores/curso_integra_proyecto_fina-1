/*
    rutas de auth
    ruta: /auth
*/

const { Router } = require('express')
const {  loginUsuario   }  = require('../controllers/auth.controllers')
const router = Router()


router.post(
    '/',     
    loginUsuario
    )



module.exports = router;