'use strict'

document.body.innerHTML = `<input type="text" class="input input__first">
<input type="text" class="input input__second">
<div class="calcButtons">
<button class="button" id = "plus">+</button>
<button class="button" id = "minus">-</button>
<button class="button" id = "multi">*</button>
<button class="button" id = "division">/</button>
</div>
<div>Result: <span class="result"></span></div>`



const firstNumber = document.querySelector('.input__first')
const secondNumber = document.querySelector('.input__second')
const calcButtons = document.querySelector('.calcButtons')
const result = document.querySelector('.result')

const operations = {
  plus : (arg1, arg2) => arg1 + arg2,
  minus : (arg1, arg2) => arg1 - arg2,
  multi : (arg1, arg2) => arg1 * arg2,
  division : (arg1, arg2) => arg1 / arg2,
}


calcButtons.onclick = function(e){

  console.log(Number.isFinite(Number(firstNumber.value)));
  console.log(Number.isFinite(Number(secondNumber.value)));

  if(!firstNumber.value || !secondNumber.value || 
    !Number.isFinite(Number(firstNumber.value)) || !Number.isFinite(Number(secondNumber.value))) {
    return alert('Input is incorrect')
  }
  result.innerText = operations[e.target.id](Number(firstNumber.value), Number(secondNumber.value));
  
  firstNumber.value = '';
  secondNumber.value = '';
 
  }
 