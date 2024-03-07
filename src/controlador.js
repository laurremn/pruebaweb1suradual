

let cajaNombre=document.getElementById('nombre');
let cajaEmail=document.getElementById('email');
let cajaTelefono=document.getElementById('telefono');
let cajaAsunto=document.getElementById('asunto');
let cajaMensaje=document.getElementById('mensaje');
let botonEnviar=document.getElementById('enviar');

botonEnviar.addEventListener('click', function(evento) {


    evento.preventDefault()
   
    let nombre=cajaNombre.value
    let email=cajaEmail.value
    let telefono=cajaTelefono.value
    let asunto=cajaAsunto.value
    let mensaje = cajaMensaje.value

    if(nombre=="" || email=="" || telefono=="" || asunto=="" || mensaje==""){
        Swal.fire({
            title: "Error",
            text: "Completa Todos los datos",
            icon: "error",
          })

        }else{
        Swal.fire({
            title: "Bienvenido",
            text: "Tus datos estan correctos",
            icon: "success",
      })
    }
})