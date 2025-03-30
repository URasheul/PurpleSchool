'use strict'

function query(obj){
    let queryString = Object.entries(obj).map(elem =>{
      return elem.join('=')
    }).join('&');
    return queryString
  }
  