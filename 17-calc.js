'use strict'

document.body.innerHTML = `<input type="text" class="input input__first">
<input type="text" class="input input__second">
<button class="button button__plus">+</button>
<button class="button button__minus">-</button>
<button class="button button__multi">*</button>
<button class="button button__division">/</button>
<div>Result: <span class="result"></span></div>`

const firstNumber = document.querySelector('.input__first')
const secondNumber = document.querySelector('.input__second')
const result = document.querySelector('.result')

function plus(){
  if(!firstNumber.value || !secondNumber.value) {
    return alert('Input is incorrect')
  }
  result.innerText = +firstNumber.value + +secondNumber.value;
  firstNumber.value = '';
  secondNumber.value = '';

}

function minus(){
  if(!firstNumber.value || !secondNumber.value) {
    return alert('Input is incorrect')
  }
  result.innerText = firstNumber.value - secondNumber.value;
  firstNumber.value = '';
  secondNumber.value = '';
}

function multi(){
  if(!firstNumber.value || !secondNumber.value) {
    return alert('Input is incorrect')
  }
  result.innerText = firstNumber.value * secondNumber.value;
  firstNumber.value = '';
  secondNumber.value = '';
}

function division(){
  if(!firstNumber.value || !secondNumber.value) {
    return alert('Input is incorrect')
  }
  result.innerText = firstNumber.value / secondNumber.value;
  firstNumber.value = '';
  secondNumber.value = '';
}

const plusButton = document.querySelector('.button__plus');
const minusButton = document.querySelector('.button__minus');
const multiButton = document.querySelector('.button__multi');
const divisionButton = document.querySelector('.button__division');
plusButton.addEventListener('click', plus);
minusButton.onclick = minus;
multiButton.onclick = multi;
divisionButton.onclick = division;