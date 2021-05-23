const refs = {
    textInput: document.querySelector('#name-input'),
    textOutput: document.querySelector('#name-output'),
}

refs.textInput.addEventListener('input',onInput);

function onInput(event) {
    if (event.currentTarget.value !=='') {
        refs.textOutput.textContent = event.currentTarget.value;
    }else 
    refs.textOutput.textContent = 'незнакомец';
}