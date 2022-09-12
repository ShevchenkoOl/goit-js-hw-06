const minusNumber = document.querySelector('button[data-action="decrement"]');
const addNumber = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
let  numberPress = document.querySelector('#value');

addNumber.addEventListener('click', () => {
  numberPress.textContent = `${(counterValue +=1)}`
});
  
minusNumber.addEventListener('click', () => {
  numberPress.textContent = `${(counterValue -=1)}`
});








