// EXERCISES

// Level 1
// 1
const anEmptySet = new Set();

// 2
for (let i = 0; i <= 10; i++) {
  anEmptySet.add(i);
}
console.log(anEmptySet);

// 3
anEmptySet.delete(0);
console.log(anEmptySet);

// 4
anEmptySet.clear();
console.log(anEmptySet);

// 5
const exampleArr = [
  'Batuhan',
  'Kendirli',
  'Turkey',
  'Istanbul',
  'Frontend Developer',
];
const anotherSet = new Set(exampleArr);
console.log(anotherSet);

// 6
const countriesArr = ['Finland', 'Sweden', 'Norway'];
const map = new Map();
for (let i = 0; i < countriesArr.length; i++) {
  map.set(countriesArr[i]);
}
console.log(map);
console.log(map.size);

// Level 2
// 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C);

// 2
c = a.filter((num) => B.has(num));
C = new Set(c);
console.log(C);

// 3
c = a.filter((num) => !B.has(num));
let d = a.filter((num) => B.has(num));
let e = [...d, ...c];
C = new Set(e);
console.log(C);

// Level 3
// 1
import { countries } from './countries.js';
const countriesSet = new Set(countries);
console.log(countriesSet.size);

// 2
const mostSpokenLanguages = function (arr, number) {
  const filteredLangSet = new Set();
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].languages.length; j++) {
      filteredLangSet.add(arr[i].languages[j]);
    }
  }
  filteredLangSet.forEach((lang) => {
    let counter = 0;
    let obj = {};

    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr[j].languages.length; k++) {
        if (lang === arr[j].languages[k]) {
          counter++;
        }
      }
    }
    obj[lang] = counter;
    finalArr.push(obj);
  });

  return finalArr
    .sort((a, b) => {
      return Object.values(b) - Object.values(a);
    })
    .slice(0, number);
};
console.log(mostSpokenLanguages(countries, 6));

// END OF THE EXERCISES
