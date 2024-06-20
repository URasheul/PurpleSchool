"use strict";
const user = {
    name: 'Alex',
    age: 33,
    skills: ['java', 'css', 'react']
};
function pickObjectKeys(obj, keys) {
    return keys.reduce((acc, rec) => {
        return { ...acc, [rec]: obj[rec] };
    }, {});
}
const result = pickObjectKeys(user, ['name', 'skills']);
console.log(result);
console.log(user);
