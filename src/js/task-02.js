const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridenstEl = document.querySelector('#ingredients');
console.log(ingridenstEl);

const makeIngridents = ingridents => {
    return ingredients.map(ingrident => {
        const liEl = document.createElement('li');
        liEl.classList.add('ingridents-item');
        liEl.textContent = ingrident;
        return liEl;

    });
}
const element = makeIngridents(ingredients);
ingridenstEl.append(...element);