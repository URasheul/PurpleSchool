'use strict'

function getLocation(){
  return new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(position => {      
      if(position){
        resolve(position.coords)
      }
        reject(new Error('can not find your position'))
    })
  }) 
  
}

getLocation()
.then(data => console.log(`${data.latitude
} ${data.longitude}`))
.catch(err => console.log(err))
.finally(() => console.log('coordinate loading finished'))