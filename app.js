"use strict";
let a = {
    a: 11,
    b: 'user'
};
let b = {
    a: 12,
    c: true
};
function difference(obj1, obj2) {
    const resultObj = {};
    for (let key in obj1) {
        if (!obj2[key]) {
            resultObj[key] = obj1[key];
        }
    }
    return resultObj;
}
let diffObject = difference(a, b);
