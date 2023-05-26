// const transporter = require('../mailer/configMailer')
// const envioCorreoMitad = async (toMail,toMailAdmin ,nombres,apellidos,numeroDoc ) => {
//     //envio usuario
//     await transporter.sendMail({
//         from: "'Correo  desde Informadoscv' <adminbienvenidos@informadoscv.com>", 
//         to: toMail,
//         subject: 'Web Inducciones Completado al 50%', 
//         text: '', 
//         html: '<b>Mediante este correo se  informa que se ha completado con  exito el 50% de la pagina de Inducción</b>' 
//     });
//     //envio admin
//     await transporter.sendMail({
//         from: "'Correo  desde Informadoscv' <adminbienvenidos@informadoscv.com>", 
//         to: toMailAdmin,
//         subject: 'Web Inducciones Completado al 100%', 
//         text: '',
//         html:  `
//         <h3>Usuario ha completo su avance al 50%</h3>
//         <li>  
//             <b>Nombres: ${nombres}   </b><br>
//             <b>Apellidos: ${apellidos}   </b><br>
//             <b>Numero de documento: ${numeroDoc}   </b><br>
//             <b>Correo: ${toMail}  </b>
//         </li>
//         `
//     });
// }

// const envioCorreoFinal = async (toMail,toMailAdmin ,nombres,apellidos,numeroDoc ) => {
//     ///envio usuario
//     await transporter.sendMail({
//         from: "'Correo  desde Informadoscv' <adminbienvenidos@informadoscv.com>", 
//         to: toMail,
//         subject: 'Web Inducciones Completado al 100%', 
//         text: '', 
//         html: '<b>Mediante este correo se  informa que se ha completado con exito el 100% de la pagina de Inducción</b>' 
//       });

//       //envio admin
//       await transporter.sendMail({
//         from: "'Correo  desde Informadoscv' <adminbienvenidos@informadoscv.com>", 
//         to: toMailAdmin,
//         subject: 'Web Inducciones Completado al 100%', 
//         text: '', 
//         html: `
//         <h3>Usuario ha completo su avance al 100%</h3>
//         <li>  
//         <b>Nombres: ${nombres}   </b><br>
//         <b>Apellidos: ${apellidos}   </b><br>
//         <b>Numero de documento: ${numeroDoc}   </b><br>
//         <b>Correo: ${toMail}  </b>
//         </li>
//         `
//       });

// }



// module.exports = { 
//     envioCorreoMitad,
//     envioCorreoFinal
// }; 