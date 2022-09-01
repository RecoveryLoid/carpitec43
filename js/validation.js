const disabledBtn = document.getElementById('submit');
var nameData = document.getElementById('name');
var emailData = document.getElementById('email');
var messageData = document.getElementById('message');
const warning = document.getElementById("warning");

window.onload = function () {

    const formData = [nameData, emailData, messageData];

    formData.forEach((element) => {
        element.addEventListener('input', function () {
            const nameValue = nameData.value.trim();
            const emailValue = emailData.value.trim();
            const messageValue = messageData.value.trim();

            if ([nameValue, emailValue, messageValue].includes('')) {
                disabledBtn.disabled = true;
            }
            else {
                showError('inactive', 'text');
            }
        });
    });

    /* Evita el tooltip por defecto de html5 para cada input */
    formData.forEach((element) => {
        element.addEventListener("invalid", function (event) {
            event.preventDefault();
        });
    });

    nameData.addEventListener('input', function () {
        const regexName = /^[A-Za-zá-üñÑáéíóúÁÉÍÓÚ\s]+$/;
        const nameValue = nameData.value;

        if (nameValue.length < 3) {
            showError('active', 'El mínimo son 3 caracteres');
            borderError(nameData, 'active');
        }
        else if (nameValue.length > 50) {
            showError('active', 'El máximo son 50 caracteres');
            borderError(nameData, 'active');
        }
        else if (!regexName.test(nameValue)) {
            showError('active', 'El nombre no debe incluir números ni caracteres especiales');
            borderError(nameData, 'active');
        }
        else {
            warning.classList.add('d-none');
            borderError(nameData, 'inactive');
        }
    });

    emailData.addEventListener('input', function () {
        const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const emailValue = emailData.value;

        if (!validEmail.test(emailValue)) {
            showError('active', 'Correo no válido');
            borderError(emailData, 'active');
        }
        else if (emailValue.length > 50) {
            showError('active', 'El máximo son 50 caracteres');
            borderError(emailData, 'active');
        }
        else {
            warning.classList.add('d-none');
            borderError(emailData, 'inactive');
        }
    });

    messageData.addEventListener('input', function () {
        const messageValue = messageData.value;

        if (messageValue.length < 20) {
            showError('active', 'El mínimo son 20 caracteres');
            borderError(messageData, 'active');
        }
        else if (messageValue.length > 255) {
            showError('active', 'El máximo son 255 caracteres');
            borderError(messageData, 'active');
        }
        else {
            warning.classList.add('d-none');
            borderError(messageData, 'inactive');
        }
    });
};

function showError(status, errorText) {

    if (status === 'active') {
        warning.innerHTML = errorText;
        warning.classList.remove('d-none');
        disabledBtn.disabled = true;
    }
    else {
        warning.classList.add('d-none');
        disabledBtn.disabled = false;
    }
}

function borderError(input, status) {

    if (status == 'active') {
        input.classList.add('form-control-danger');
    }
    else {
        input.classList.remove('form-control-danger');
    }
}
