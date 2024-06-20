const obj: Record<string, number> = {
    a : 1,
    b: 2,
    c: 3,
}


function swapKeysandValues<T extends Record<string,number>>(obj: T){
    let swapedObject = {};
    for(let key in obj){        
        swapedObject = {...swapedObject, [obj[key]] : key}
    }
    return swapedObject
}







