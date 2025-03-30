'use strict'

function lunaAlgoritm(numb){
    let result = numb.replaceAll('-', '').split('');
  
    for(let el of result){
      if(isNaN(el)) return false;
    }
  
    if(result.length % 2 === 0){    
      for(let i = 0; i < result.length; i += 2){
        (result[i] * 2 > 9) ? result[i] = result[i] * 2 - 9 : result[i] = result[i] * 2;
      }    
    } else {
      for(let i = 1; i < result.length; i += 2){
        (result[i] * 2 > 9) ? result[i] = result[i] * 2 - 9 : result[i] = result[i] * 2;
      } 
    }
  
    result = result.reduce((acc, rec) => acc + +rec, 0) % 10 === 0
    return result;
  }