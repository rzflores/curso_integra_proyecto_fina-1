const express = require('express');
const session = require('express-session')
var flash = require('connect-flash');
const fs = require('fs');
require('dotenv').config()
const path = require('path');

//crear servidor express
const app = express();

//midleware - Directorio publico
app.use ( express.static( 'public') )

app.use(flash());

//ejs
app.set('views', path.join( __dirname,'./public/views'));
app.set('view engine', 'ejs');

// midleware - parse de body
app.use( express.json() )
app.use( express.urlencoded({extended:false}))
app.use(session({ secret: 'Abasd1212ads', resave: true, saveUninitialized: true }));

//rutas
app.use('/auth' , require('./routes/auth.routes'))
app.use('/trabajador' , require('./routes/trabajador.routes'))
app.use('/sync' , require('./routes/syncDocumentacion.routes'))
app.use('/' , require('./routes/panel.routes'))

app.listen( process.env.PORT ,() => {  console.log(`servidor corriendo  ${ process.env.PORT }`); } )