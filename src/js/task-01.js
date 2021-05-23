// const listItem = document.querySelectorAll('.item');
// console.log(listItem);
const titles = document.querySelectorAll('.list-itme-title');
const listInlist = document.querySelectorAll('.list-item-list');

console.log(`Категория:${titles[0].textContent}`);
console.log(`Количество элементов:${listInlist[0].children.length}`);

console.log(`Категория:${titles[1].textContent}`);
console.log(`Количество элементов:${listInlist[1].children.length}`);

console.log(`Категория:${titles[2].textContent}`);
console.log(`Количество элементов:${listInlist[2].children.length}`);