let ExitoLogin = document.querySelector('#IdExitoLogin')
let Deshabilitado = document.querySelector('#IdDeshabilitado')

if(ExitoLogin.value === "false"){
    Swal.fire({
        title: 'DNI o Contraseña Incorrecto.',      
        icon: 'error', 
        showConfirmButton: true,
        allowEscapeKey: false,
        allowOutsideClick: true
      })    
}


if(Deshabilitado.value === "true"){
  Swal.fire({
      title: 'El usuario esta deshabilitado.',      
      icon: 'error', 
      showConfirmButton: true,
      allowEscapeKey: false,
      allowOutsideClick: true
    })    
}