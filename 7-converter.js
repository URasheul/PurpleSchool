'use strict'

const moneyValue = 780;

function exchange(value, originalCurrency, targetCurrency){  
  let amountReceivable = null;
  let rubToDollarExchangeRate = 60;
  let rubToEuroExchangeRate = 70;
  let dollarToEuroExchangeRate = 0.85;

  if(originalCurrency === 'rub' && targetCurrency === '$'){
    amountReceivable = value / rubToDollarExchangeRate;
  }

  if(originalCurrency === 'rub' && targetCurrency === 'euro'){
    amountReceivable = value / rubToEuroExchangeRate;
  }

  if(originalCurrency === '$' && targetCurrency === 'rub'){
    amountReceivable = value * rubToDollarExchangeRate;
  }

  if(originalCurrency === 'euro' && targetCurrency === 'rub'){
    amountReceivable = value * rubToEuroExchangeRate;
  }

  if(originalCurrency === 'euro' && targetCurrency === '$'){
    amountReceivable = value / dollarToEuroExchangeRate;
  }

  if(originalCurrency === '$' && targetCurrency === 'euro'){
    amountReceivable = value * dollarToEuroExchangeRate;
  }

  return amountReceivable;
}
