'use strict'

const userBirthday = '2009-01-04'

function ageValidation(age){
    const userAge = new Date(age)    
    const now = new Date();
    const isMoreThan14 = new Date(now.getTime() - userAge.getTime()).getFullYear() - 1970; 
    
    return isMoreThan14 > 14
}


console.log(ageValidation(userBirthday));