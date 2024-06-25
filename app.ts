
interface IA  {
    a: number;
    b: string;
}

interface IB {
    a: number;
    c: boolean;
}

let a: IA = {
    a: 11,
    b: 'user'
}

let b: IB = {
    a: 12,
    c: true
}


function difference<T extends Record<string, any>, V extends Record<string, any>>(obj1: T, obj2: V): Pick<T, Exclude<keyof T, keyof V>>{
    const resultObj: {[K in keyof T]: T[K]} = {} as {[K in keyof T]: T[K]};    
    for(let key in obj1){
        if(!obj2[key]){
            resultObj[key] = obj1[key];
        }
    }
    return resultObj;
}

let diffObject = difference<typeof a, typeof b>(a,b)
