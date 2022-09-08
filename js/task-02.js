const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const productContainer = document.querySelector ('#ingredients');
for (let i = 0; i < ingredients.length; i += 1) {
 //console.log(ingredients[i]);
const itemsLi = document.createElement('li');

//ingredients[i];
itemsLi.classList.add('item');
console.log (itemsLi);
};

/*const elements = ingredients.map(itemsLi);

console.log(elements);
productContainer.append(...elements);
console.log (productContainer);*/
