"use strict";
const obj = {
    a: 1,
    b: 2,
    c: 3,
};
function swapKeysandValues(obj) {
    let swapObject = Object.entries(obj).map(element => element.reverse());
    return Object.fromEntries(swapObject);
}
