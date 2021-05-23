const refs = {
    fontSizeControlInput: document.querySelector('#font-size-control'),
    textLable:document.querySelector('#text'),
}
refs.fontSizeControlInput.addEventListener('input', onChangeFontSize);

function onChangeFontSize() {
    let val = refs.fontSizeControlInput.value;

    refs.textLable.style.fontSize = val+'%';
}
