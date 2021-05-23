const refs = {
    incrimentBtn: document.querySelector('[data-increment]'),
    decrimentBtn: document.querySelector('[data-decrement]'),
    valueLabel:document.querySelector('#value'),
}
refs.incrimentBtn.addEventListener('click', onIncimentValue);
refs.decrimentBtn.addEventListener('click', onDecrimentValue);

let counterValue = 0;
function onDecrimentValue() {
    counterValue -= 1;
    refs.valueLabel.textContent = counterValue;
    
}
function onIncimentValue() {
    counterValue += 1;
    refs.valueLabel.textContent = counterValue;

}