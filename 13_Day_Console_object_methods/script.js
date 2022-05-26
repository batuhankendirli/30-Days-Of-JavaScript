// EXERCISES

// Level 1
// 1
import { countries } from './countries.js';
console.table(countries);

// 2
/* I couldn't find another countries object, so I am going to use countries.js again */
console.table(countries);

// 3
console.group('Countries');
console.log(countries);
console.groupEnd();

// Level 2
// 1
console.assert(10 > 2 * 10, '10 is not greater than 2*10');

// 2
console.warn('This is a warning, something is not right!');

// 3
console.error('This is an error.');

// Level 3
// 1
const arr = ['Batuhan', 'Kendirli', 'Turkey', 'Istanbul'];
console.time('while loop');
let i = 0;
while (i < arr.length) {
  let r = i * i;
  i++;
}
console.timeEnd('while loop');

console.time('for loop');
for (let i = 0; i < arr.length; i++) {
  let r = i * i;
}
console.timeEnd('for loop');

console.time('for of loop');
for (const item of arr) {
  let r = i * i;
}
console.timeEnd('for of loop');

console.time('forEach loop');
arr.forEach((item, index) => {
  let r = index * index;
});
console.timeEnd('forEach loop');

// END OF THE EXERCISES
