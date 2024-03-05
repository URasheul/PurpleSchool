'use strict'

const arr = [-31, -15, -41, -40, 0, -15, 1, 1, 0, -40, 5, 14, 23, 7, -3];

function sort(array) {
  let initialArr = [...array];
  let sortedArr = [];

  for( let i = 0; i < array.length; i++){
   let element = initialArr[0];
    
    for( let j of initialArr){
      if(j < element){
        element = j;
      }
    }
    initialArr.splice(initialArr.indexOf(element), 1);       
    sortedArr.push(element)  
  }
  return sortedArr
}

