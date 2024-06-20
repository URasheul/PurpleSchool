
const user = {
    name: 'Alex',
    age: 33,
    skills: ['java', 'css', 'react'],    
}

function pickObjectKeys<T extends Record<string, any>>(obj: T, keys: (keyof T)[]){
    return keys.reduce((acc, rec) => {
        return {...acc, [rec]: obj[rec]}
    }, {})
}

const  result = pickObjectKeys(user, ['name', 'skills']);

