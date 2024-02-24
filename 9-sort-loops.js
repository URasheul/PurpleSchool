'use strict'

const arr = [-31, -15, -15, 1, 1, 0, -40, 5, 14, 23, 7, -3];

function sort(array) {
  let newArr = [].concat(array);
  let newArrPositive = [].concat(array);
  let sortArr = [];
  let sortArrPositive = [];
  for(let i ; newArr.length; i++ ){
    i = 0;
    let amount = newArr[i];
    for(let j of newArr){
      if( j < amount ){
        amount = j;
      }      
    }
    newArr.splice(newArr.indexOf(amount), 1);
    sortArr.push(amount);
  }
  for(let i ; newArrPositive.length; i++ ){
    i = 0;
    let amount = newArrPositive[i];
    for(let j of newArrPositive){
      if( j > amount ){
        amount = j;
      }      
    }
    newArrPositive.splice(newArrPositive.indexOf(amount), 1);
    sortArrPositive.push(amount);
  }
  return `По возрастанию: ${sortArr}
  По убыванию: ${sortArrPositive}`;
}