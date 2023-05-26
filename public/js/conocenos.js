
var floatCultu = document.querySelector("#floatCultu");

if(floatCultu !== null){
  floatCultu.addEventListener('click',() => {
    floatCultu.style.display = "none";
  })  
}


var floatInclu = document.querySelector("#floatInclu");
if(floatInclu !== null){
  floatInclu.addEventListener('click',() => {
    floatInclu.style.display = "none";
  })  
}
   




var videoPlayer3;
var validPlayer3 = document.querySelector('#my-video-3');
if(validPlayer3 !== null){
var player3 = videojs(document.querySelector('#my-video-3'));
  videojs.getPlayer('#my-video-3').ready(function() {
    videoPlayer3 = this;
  })
  player3.on('play', function() {
    videoPlayer3.controlBar.hide();
  })
}


let btnHabilitarCultura =  document.getElementById('btnHabilitarSiguienteCultura')
let myVideo1 = document.querySelector('#myVideo1');

if(btnHabilitarCultura !== null && myVideo1 !== null){
myVideo1.addEventListener('ended',()=>{
    btnHabilitarCultura.click();
  },false)
}


let btnHabilitarPolitica =  document.getElementById('btnHabilitarSiguientePolitica')
let myVideo2 = document.querySelector('#myVideo2');

if(btnHabilitarPolitica !== null && myVideo2 !== null) { 
    myVideo2.addEventListener('ended',()=>{
      btnHabilitarPolitica.click();
      },false)
}


let btnHabilitarDocumentos =  document.getElementById('btnHabilitarDocumentos')
let myVideo3 = document.querySelector('#myVideo3');

if(btnHabilitarDocumentos !== null && myVideo3 !== null) {
    myVideo3.addEventListener('ended',()=>{
      btnHabilitarDocumentos.click();
      },false)
}


let formPolitica = document.querySelector('#frmHabilitarPolitica')
let btnPolitica = document.querySelector('#btnHabilitarPolitica')
let checkPoli = document.querySelector("#checkAceptoPoli")

if(checkPoli != null)
{
checkPoli.addEventListener('change',() => {
  if (checkPoli.checked) {
    console.log("Checkbox is checked..");
    formPolitica.setAttribute('action','/postHabilitarPolitica?menu=PoliticaAnticorrupcion&idMenu=7&esPolitica=1&idPoli=1') 
    Swal.fire({
      title: 'Politica Aceptada',      
      icon: 'success',   
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    })  
  } else {
    console.log("Checkbox is not checked..");
    formPolitica.setAttribute('action','/postHabilitarPolitica?menu=PoliticaAnticorrupcion&idMenu=7&esPolitica=0&idPoli=1')      
    Swal.fire({
      title: 'Politica No Aceptada',      
      icon: 'error', 
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    })    
  }
  setTimeout(function() {      
    btnPolitica.click()
  }, 3000); 
  
  })
}


let formPolitica2 = document.querySelector('#frmHabilitarPolitica2')
let btnPolitica2 = document.querySelector('#btnHabilitarPolitica2')
let checkPoli2 = document.querySelector("#checkAceptoPoli2")

if(checkPoli2 != null)
{
  checkPoli2.addEventListener('change',() => {
  if (checkPoli2.checked) {
    console.log("Checkbox is checked..");
    formPolitica2.setAttribute('action','/postHabilitarPolitica?menu=PoliticaAnticorrupcion&idMenu=7&esPolitica=1&idPoli=2') 
    Swal.fire({
      title: 'Politica Aceptada',      
      icon: 'success',   
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    })  
  } else {
    console.log("Checkbox is not checked..");
    formPolitica2.setAttribute('action','/postHabilitarPolitica?menu=PoliticaAnticorrupcion&idMenu=7&esPolitica=0&idPoli=2')      
    Swal.fire({
      title: 'Politica No Aceptada',      
      icon: 'error', 
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    })    
  }
  setTimeout(function() {      
    btnPolitica2.click()
  }, 3000); 
  
  })
}


let formPolitica3 = document.querySelector('#frmHabilitarPolitica3')
let btnPolitica3 = document.querySelector('#btnHabilitarPolitica3')
let checkPoli3 = document.querySelector("#checkAceptoPoli3")

if(checkPoli3 != null)
{
  checkPoli3.addEventListener('change',() => {
  if (checkPoli3.checked) {
    console.log("Checkbox is checked..");
    formPolitica3.setAttribute('action','/postHabilitarPolitica?menu=PoliticaAnticorrupcion&idMenu=7&esPolitica=1&idPoli=3') 
    Swal.fire({
      title: 'Politica Aceptada',      
      icon: 'success',   
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    })  
  } else {
    console.log("Checkbox is not checked..");
    formPolitica3.setAttribute('action','/postHabilitarPolitica?menu=PoliticaAnticorrupcion&idMenu=7&esPolitica=0&idPoli=3')      
    Swal.fire({
      title: 'Politica No Aceptada',      
      icon: 'error', 
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    })    
  }
  setTimeout(function() {      
    btnPolitica3.click()
  }, 3000); 
  
  })
}



if(window.location.href == "http://localhost:8686/conocenos_4?MenuActual=7"){
  if( (checkPoli.checked == false  
    && checkPoli != null)
    || (checkPoli2.checked == false  
    && checkPoli2 != null)
    || (checkPoli3.checked == false
    && checkPoli3 != null))
    {
  console.log("check en falso");
  const links = document.querySelectorAll('a');

  Swal.fire({
      title: 'Debe aceptar todas las políticas para seguir continuar.',      
      icon: 'info', 
      timer: 3000,
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    })    
  
  // setTimeout(function() {      
    links.forEach(link => {       
      if (link.getAttribute('href') !== "/conocenos_4?MenuActual=7") {
          link.setAttribute('href' ,  "/conocenos_4?MenuActual=7")
       }
      }
    );
    // }, 4000); 
  }
}      