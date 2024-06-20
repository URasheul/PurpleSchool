"use strict";
const obj = {
    a: 1,
    b: 2,
    c: 3,
};
function swapKeysandValues(obj) {
    let swapedObject = {};
    for (let key in obj) {
        swapedObject = { ...swapedObject, [obj[key]]: key };
    }
    return swapedObject;
}
