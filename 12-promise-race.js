'use strict'

const promises = [
    new Promise((res, rej)=> setTimeout(res, 2000, 'second')),
    new Promise((res, rej)=> setTimeout(res, 1000, 'first')),
    new Promise((res, rej)=> setTimeout(rej, 600, 'third reject'))    
]

function race(promisesArray){

    return new Promise((resolve, reject)=> {
        promisesArray.forEach(async element =>{  
            try {                
                const result = await element;                
                resolve(result)

            } catch (error) {                
                reject(error)
            }
        })
    }) 
   
       
}

race(promises)
    .then(data => console.log(data))
    .catch(err => console.log(err))
