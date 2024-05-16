// Funciones de validación
function validarEmail(email) {
    var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }

  function validarNombre(nombre) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(nombre);
  }

  // Validación en tiempo real para el nombre
  document.getElementById('nombre').addEventListener('input', function() {
    var nombre = this.value;
    var nombreError = document.getElementById('nombre_error');
    
    if (validarNombre(nombre)) {
      nombreError.textContent = 'Nombre correcto';
      nombreError.className = 'success';
    } else {
      nombreError.textContent = 'Nombre incorrecto';
      nombreError.className = 'error';
    }
  });

  // Validación en tiempo real para el correo electrónico
  document.getElementById('email').addEventListener('input', function() {
    var email = this.value;
    var emailError = document.getElementById('email_error');

    if (validarEmail(email)) {
      emailError.textContent = 'Correo electrónico válido';
      emailError.className = 'success';
    } else {
      emailError.textContent = 'El correo electrónico no es válido';
      emailError.className = 'error';
    }
  });

  // Validación del formulario al enviarlo
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    var nombreError = document.getElementById('nombre_error');
    var emailError = document.getElementById('email_error');

    var valid = true;

    if (!validarNombre(nombre)) {
      nombreError.textContent = 'Nombre incorrecto';
      nombreError.className = 'error';
      valid = false;
    } else {
      nombreError.textContent = '';
    }

    if (!validarEmail(email)) {
      emailError.textContent = 'El correo electrónico no es válido';
      emailError.className = 'error';
      valid = false;
    } else {
      emailError.textContent = '';
    }

    if (!valid) {
      event.preventDefault();
    }
  });