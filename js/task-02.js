const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const productContainer = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i += 1) {

  const itemsLi = document.createElement('li');
itemsLi.textContent = ingredients[i];
itemsLi.classList.add('item');
productContainer.append(itemsLi);
console.log(productContainer);
};

/*const  foodIngredients = ingredients.forEach(ingredient => {
  let itemsLi = document.createElement('li');
    itemsLi.textContent = ingredient;
    itemsLi.classList.add('item');
    productContainer.append(itemsLi);
 });
console.log(productContainer);*/