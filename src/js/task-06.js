const validationInput = document.querySelector('#validation-input');
const currentLength = Number(validationInput.getAttribute('data-length'));
   
validationInput.addEventListener('blur', onClassValidInvalid);

function onClassValidInvalid(event) {
    const inputDataLength = event.currentTarget.value.length;
    onRemoveClasses();

    if (inputDataLength === currentLength) {
        validationInput.classList.add('valid');
    } else 
        validationInput.classList.add('invalid');
    }
function onRemoveClasses() {
    validationInput.classList.remove('valid');
    validationInput.classList.remove('invalid');
}
