
const myItem = document.querySelectorAll('.list-item');
 myItem.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});
   
