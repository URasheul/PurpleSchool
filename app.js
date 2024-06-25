"use strict";
const user = {
    name: 'Alex',
    age: 33,
    skills: ['java', 'css', 'react'],
};
function pickObjectKeys(obj, keys) {
    const resultObject = {};
    keys.forEach(item => {
        resultObject[item] = obj[item];
    });
    return resultObject;
}
const result = pickObjectKeys(user, ['name', 'skills']);
