
const myItem = document.querySelectorAll('.list-item');
const result = myItem.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});
   
