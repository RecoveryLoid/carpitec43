window.onload = function() {

    var nameData = document.getElementById('name');
    var emailData = document.getElementById('email');
    var messageData = document.getElementById('message');
    const regexNumber = /^[A-Za-zá-ü- ]+$/;

    const emailValue = emailData.value;
    const messageValue = messageData.value;
    const formData = [nameData, emailData, messageData];

    formData.forEach( (element) => {
        element.addEventListener('input', function () {
            const nameValue = nameData.value;
            if ( regexNumber.test(nameValue) == false ) {
                showError('active','El nombre no debe incluir números ni caracteres especiales');
                return false;
            }
            else if ( nameValue == "" ) {
                showError('inactive', 'text');
            }
            else {
                showError('inactive', 'text');
            }
        })
    });
};

function showError(status, errorText) {
    const warning = document.getElementById("warning");
    const disabledBtn = document.getElementById('submit');

    if ( status === 'active' ) {
        warning.innerHTML = errorText;
        warning.classList.remove('d-none');
        disabledBtn.disabled=true;
    }
    else {
        warning.classList.add('d-none');
        disabledBtn.disabled=false;
    }
}
