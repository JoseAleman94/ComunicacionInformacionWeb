document.getElementById("enviarBtn").addEventListener("click", function(event) {
    // Previene la acción predeterminada del enlace
    event.preventDefault();

    // Obtiene el valor del campo de correo electrónico
    const correo = document.getElementById("suscripcion").value;
    const errorCorreo = document.getElementById("errorCorreo");

    // Limpia cualquier mensaje de error anterior
    errorCorreo.textContent = "";

    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(correo)) {
        // Si el correo no es válido, muestra un mensaje de error
        Swal.fire({
            title: 'Atención',
            text: 'Por favor ingrese un e-mail correcto',
            icon: 'warning',
            customClass: {
              popup: 'swal2-popup-custom',
              title: 'swal2-title-custom',
              confirmButton: 'swal2-confirm-custom',
              cancelButton: 'swal2-cancel-custom'
            },
            buttonsStyling: false // Necesario para que se apliquen los estilos personalizados
          });
    } else {
        // Si el correo es válido, muestra un mensaje de éxito o envía el formulario
        Swal.fire({
            title: 'Proceso exitoso',
            text: 'Te has suscrito correctamente.',
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

