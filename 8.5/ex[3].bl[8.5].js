const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};
const {name, age,likes} = alex;
const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = (object) => {
    const {name, age, likes} = object;
    return `${name} is ${age} years old and likes ${likes.reduce((x,y) => x + ', ' + y)}.`
};

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(
  personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.',
);