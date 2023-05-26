let ExitoResult = document.querySelector('#ExitoResult')

if(ExitoResult.value === "true"){
    Swal.fire({
        title: 'Se registro Correctamente.',      
        icon: 'success', 
        showConfirmButton: true,
        allowEscapeKey: false,
        allowOutsideClick: true
      })    
}