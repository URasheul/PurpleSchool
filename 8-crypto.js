'use strict'

function crypto(passw) {
    if(passw.length < 6) return 'Password is too short'
    let cryptoPassword = passw.split('');
    cryptoPassword = cryptoPassword.slice(3).concat(cryptoPassword.slice(0, 3)).join('');    
    return cryptoPassword
  }
  
  
  function check(cryptoPassword, password){
    let checkCrypto = cryptoPassword.split('');
    checkCrypto = checkCrypto.slice(-3).concat(checkCrypto.slice(0, -3)).join('');
    return checkCrypto === password
  }