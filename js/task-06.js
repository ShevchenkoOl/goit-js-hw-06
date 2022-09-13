const input = document.querySelector('#validation-input');
//console.log(input.value.length);


input.addEventListener('input', checkSyblols)

function checkSyblols (event){
event.prevenDegault ();

console.log(event);
}

//if (this.iput('data-length') ==== this.input){

//}*/



/*document.getElementById("validation-input").onblur = function() {
    console.log(this.value.length);
    if (this.getAttribute('data-length') > this.value.length) { 
      this.classList.remove('valid');
      this.classList.add('invalid');
    } else {
      this.classList.remove('invalid');
      this.classList.add('valid');
    }
  };*/