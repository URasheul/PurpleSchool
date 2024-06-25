
const user = {
    name: 'Alex',
    age: 33,
    skills: ['java', 'css', 'react'],    
}

function pickObjectKeys<T extends Record<string, any>>(obj: T, keys: (keyof T)[]){
    const resultObject: Record<string, T[keyof T]> = {}
    keys.forEach(item => {
        resultObject[item as string] = obj[item]
    })    
    return resultObject
}

const result = pickObjectKeys<typeof user>(user, ['name', 'skills']);

