'use strict'

const userBirthday = '2009-08-19'

function ageValidation(age){
    const necessaryAge = 14 * 365 * 24 * 60 * 60 * 1000;
    const userAge = new Date(age)       
    const now = new Date();
    const isMoreThan14 = now - userAge > necessaryAge;
    
    return isMoreThan14 
}


console.log(ageValidation(userBirthday));