const allItemsEls = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allItemsEls.length}`);

/*for (let i = 0; i < allItemsEl.length; i += 1) {
  const categoryTitle = allItemsEl[i].firstElementChild.textContent;
  const elementsNumber = allItemsEl[i].lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsNumber}`);
}*/



const  foodIngredients = allItemsEls.forEach(allItemsEl => {
  const categoryTitle = allItemsEl.firstElementChild.textContent;
  const elementsNumber = allItemsEl.lastElementChild.children.length;

console.log(`Category: ${categoryTitle}`);
 console.log(`Elements: ${elementsNumber}`);
    
 });
 