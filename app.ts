const obj: Record<string, number> = {
    a : 1,
    b: 2,
    c: 3,
}

function swapKeysandValues<T extends Record<string,number>, V extends Record<number, string>>(obj: T): V {
    let swapObject = Object.entries(obj).map(element => element.reverse())    
    return Object.fromEntries(swapObject);
}





