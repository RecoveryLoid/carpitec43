const disabledBtn = document.getElementById('submit');
var nameData = document.getElementById('name');
var emailData = document.getElementById('email');
var messageData = document.getElementById('message');

/* Evita el tooltip por defecto de html5 */
emailData.addEventListener("invalid", function (event) {
    event.preventDefault();
});

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
        })
    });

    nameData.addEventListener('input', function () {
        const nameValue = nameData.value;
        const regexName = /^[A-Za-zá-üñÑáéíóúÁÉÍÓÚ\s]+$/;
        const warning = document.getElementById("warning");

        if (nameValue.length < 3) {
            showError('active', 'El mínimo son 3 carácteres');
            borderError(nameData, 'active');
        }
        else if (!regexName.test(nameValue)) {
            showError('active', 'El nombre no debe incluir números ni carácteres especiales');
            borderError(nameData, 'active');
        }
        else {
            warning.classList.add('d-none');
            borderError(nameData, 'inactive');
        }
    })

    emailData.addEventListener('input', function () {
        const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const emailValue = emailData.value;
        const warning = document.getElementById("warning");

        if (!validEmail.test(emailValue)) {
            showError('active', 'Correo no válido');
            borderError(emailData, 'active');
        }
        else {
            warning.classList.add('d-none');
            borderError(emailData, 'inactive');
        }
    })
};

function showError(status, errorText) {

    const warning = document.getElementById("warning");

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
