
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
function countA (string) {
    string = string.toLowerCase()
    let numberOfA = 0;
    for (let index = 0; index < string.length; index += 1) {
        if (string[index] === 'a') {
            numberOfA += 1;
        }
    }
    return numberOfA;
}
function containsA() {
  return names
  .map(element => countA(element))
  .reduce((x,y) => x + y);
}
assert.deepStrictEqual(containsA(), 20);