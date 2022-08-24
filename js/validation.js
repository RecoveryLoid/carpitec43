function showError(className ,errorText) {
    const warning = document.getElementById("warning");
    warning.innerHTML = errorText;
    warning.classList.remove('d-none');
    warning.classList.add(className);
}

function validateForm() {
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const disabledBtn = document.getElementById('submit').disabled=false;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if ([name, email, message].includes("")) {
        showError('bg-danger','Todos los campos son obligatorios');
        return false;
    }
}
