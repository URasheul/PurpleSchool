'use strict'

const arr = [-31, -40, 5, 13, 0 , 0 , -33,  5, 14, 23, 7, -3];

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


/* Version 2 */

function sort2(array) {
  let initialArr = [...array];
  
  for( let i = 0; i < array.length; i++){
    let element = initialArr[i];
    let minElementIndex = i;
    
    for( let j = i; j < array.length; j++){
      if(initialArr[j] < element){
        element = initialArr[j];
        minElementIndex = j;
      }
    }
    initialArr[minElementIndex] = initialArr[i];
    initialArr[i] = element;
    
  }
  
  return initialArr
}



/* Version 3
тут отсутствует цикл в цикле*/


function sort3(array) {
  let initialArr = [...array];
  let sortedArr = [];
  
  for( let i = 0; i < array.length; i++){
    sortedArr.push(Math.min(...initialArr))    
    initialArr.splice(initialArr.indexOf(sortedArr[ sortedArr.length -1 ]), 1);       
    
  }
  return sortedArr
}






