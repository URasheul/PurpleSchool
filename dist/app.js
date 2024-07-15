"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [{
        id: 7,
        name: 'Foo',
        age: '34',
        email: { primary: 'foo@email.com' }
    }, {
        id: 3,
        name: 'Baz',
        age: '67',
        email: { primary: 'baz@email.com' }
    }, {
        id: 4,
        name: 'Bar',
        age: '67',
        email: { primary: 'bar@email.com' }
    }];
// users.sort(sortBy('name', 'age'));
function test(...arg) {
    console.log(arguments);
    let args = Array.prototype.slice.call(arguments);
    console.log(args);
}
let arr = [2, 4, 5, 6];
let x = arr.slice(1);
console.log(x);
console.log(arr);
