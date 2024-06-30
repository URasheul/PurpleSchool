class User {    
    @AllowFunc()
    age: number = 30;
}


function AllowFunc() {
    return function(target: Object, propertyKey: string | symbol){          
    let value: number;        
    const getter = function(){
        return value;   
    }
    const setter = function(newValue: number){
        try {
            if(newValue > 0 && newValue < 50){                        
                value = newValue ;
                console.log(`Значение ${newValue} успешно установлено!`);
                
            } else {
                throw new Error('Значение должно быть больше 0 и меньше 50');
            } 
        } catch(error){
            
            console.log((error as Error).message);
            
        }                
    }
    Object.defineProperty(target, propertyKey, {
        set: setter,   
        get: getter     
    });
}
}


const person = new User()
console.log(person.age);
person.age = 55;
console.log(person.age);
person.age = 21;
console.log(person.age);
