const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    const arr = [];
    arrays.forEach((element) => element.forEach((element) => arr.push(element)));
    return arr;
}
console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);