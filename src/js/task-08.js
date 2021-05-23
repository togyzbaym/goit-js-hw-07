const refs = {
    onAmount: document.querySelector('#amount'),
    createBtn: document.querySelector('[data-action="render"]'),
    clearBtn: document.querySelector('[data-action="destroy"]'),
    divBox: document.querySelector('#boxes'),
}

refs.onAmount.addEventListener('input', createBoxes);
refs.createBtn.addEventListener('click', null);
refs.clearBtn.addEventListener('click', destroyBoxes);
 
function createBoxes(amount) {
    for (let i = 0; i < amount; i++){
        document.createElement('div');
        refs.divBox.appendChild(div)
    }
}

function destroyBoxes() {
   /// refs.divBox.innerHTML = '';
    refs.onAmount.innerHTML = '';
}