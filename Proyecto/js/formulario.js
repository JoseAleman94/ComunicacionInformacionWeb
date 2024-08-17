document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();

    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorAsunto").textContent = "";
    document.getElementById("errorComentario").textContent = "";

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const asunto = document.getElementById("asunto").value;
    const comentario = document.getElementById("comentario").value;

    let isValid = true;

    if(nombre.length < 3){
        /*document.getElementById("errorNombre").textContent = "El nombre debe tener al menos 3 caracteres";*/
        Swal.fire({
            title: 'Atención',
            text: 'Por favor ingrese el nombre.',
            icon: 'warning',
            customClass: {
              popup: 'swal2-popup-custom',
              title: 'swal2-title-custom',
              confirmButton: 'swal2-confirm-custom',
              cancelButton: 'swal2-cancel-custom'
            },
            buttonsStyling: false
          });
          
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(correo)){
        /*document.getElementById("errorCorreo").textContent = "Por favor ingrese un e-mail válido.";*/
        Swal.fire({
            title: 'Atención',
            text: 'Por favor ingrese el correo eletrónico',
            icon: 'warning',
            customClass: {
              popup: 'swal2-popup-custom',
              title: 'swal2-title-custom',
              confirmButton: 'swal2-confirm-custom',
              cancelButton: 'swal2-cancel-custom'
            },
            buttonsStyling: false
          });
          
        isValid = false;
    }

    if(asunto.length < 3){
        /*document.getElementById("errorAsunto").textContent = "Por favor ingrese un asunto.";*/
        Swal.fire({
            title: 'Atención',
            text: 'Por favor agregue un asunto.',
            icon: 'error',
            customClass: {
              popup: 'swal2-popup-custom',
              title: 'swal2-title-custom',
              confirmButton: 'swal2-confirm-custom',
              cancelButton: 'swal2-cancel-custom'
            },
            buttonsStyling: false
          });
          
        isValid = false;
    }

    if(comentario.length < 10){
        /*document.getElementById("errorComentario").textContent = "Por favor ingrese un comentario con más contenido.";*/
        Swal.fire({
            title: 'Atención',
            text: 'Por favor agregue un comentario.',
            icon: 'error',
            customClass: {
              popup: 'swal2-popup-custom',
              title: 'swal2-title-custom',
              confirmButton: 'swal2-confirm-custom',
              cancelButton: 'swal2-cancel-custom'
            },
            buttonsStyling: false
          });   
        isValid = false;
    }

    if(isValid){
        Swal.fire({
            title: 'Éxito',
            text: 'Formulario enviado correctamente.',
            icon: 'success',
            customClass: {
              popup: 'swal2-popup-custom',
              title: 'swal2-title-custom',
              confirmButton: 'swal2-confirm-custom',
              cancelButton: 'swal2-cancel-custom'
            },
            buttonsStyling: false // Necesario para que se apliquen los estilos personalizados
          });      
    }
});


