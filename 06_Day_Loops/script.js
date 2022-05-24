// EXERCISES

// Level 1
// 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

let k = 0;
while (k <= 10) {
  console.log(k);
  k++;
}

// 2
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let x = 10;
do {
  console.log(x);
  x--;
} while (x >= 0);

let y = 10;
while (y >= 0) {
  console.log(y);
  y--;
}

// 3
const t = 12;
for (let i = 0; i <= t; i++) {
  console.log(i);
}

// 4
const symbol = '#';
for (let i = 1; i <= 7; i++) {
  console.log(symbol.repeat(i));
}

// 5
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i ** 2}`);
}

// 6
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

// 7
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 8
for (let i = 0; i <= 100; i++) {
  if (!(i % 2 == 0)) {
    console.log(i);
  }
}

// 9
const primeArr = [];
for (let i = 0; i <= 100; i++) {
  let counter = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      counter++;
    }
  }
  if (!(counter > 0) && i != 0 && i != 1) {
    primeArr.push(i);
  }
  counter = 0;
}
primeArr.forEach((num) => {
  console.log(num);
});

// 10
let total = 0;
for (let i = 0; i <= 100; i++) {
  total += i;
}
console.log(`The sum of all number from 0 to 100 is ${total}`);

// 11
let totalEvens = 0;
let totalOdds = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    totalEvens += i;
  } else {
    totalOdds += i;
  }
}

console.log(
  `The sum of all evens from 0 to 100 is ${totalEvens}. \nAnd the sum of all odds from 0 to 100 is ${totalOdds}.`
);

// 12
let sumEvens = 0;
let sumOdds = 0;
let evenAndOddArr = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}

evenAndOddArr.push(sumEvens);
evenAndOddArr.push(sumOdds);
console.log(evenAndOddArr);

// 13
let randomArr = [];
for (let i = 0; i < 5; i++) {
  const random = Math.floor(Math.random() * 100);
  randomArr.push(random);
}
console.log(randomArr);

// 14
randomArr = [];
console.log(randomArr);

do {
  const random = Math.floor(Math.random() * 8);
  if (!randomArr.includes(random)) {
    randomArr.push(random);
  }
} while (randomArr.length < 8);
console.log(randomArr);

// 15
const characters = '123456789!@#$%^&*_-qwertyuiopasdfghjklzxcvbnm';
let randomId = [];
for (let i = 0; i < 6; i++) {
  const random = Math.floor(Math.random() * characters.length);
  randomId.push(characters[random]);
}
const randomIdFinal = randomId.join('');
console.log(randomIdFinal);

// Level 2
// 1
const randomId1 = [];
const randomNum = Math.floor(Math.random() * 33);
for (let i = 0; i <= randomNum; i++) {
  const random = Math.floor(Math.random() * characters.length);
  randomId1.push(characters[random]);
}
const randomIdWithRandomLength = randomId1.join('');
console.log(randomIdWithRandomLength);

// 2
const randomHexaDecimal = ['#'];
const hexaCharacters = 'abcdef0123456789';
for (let i = 0; i < 6; i++) {
  const random = Math.floor(Math.random() * hexaCharacters.length);
  randomHexaDecimal.push(hexaCharacters[random]);
}
const randomHexaDecimalFinal = randomHexaDecimal.join('');
console.log(randomHexaDecimalFinal);

// 3
const randomRgbValues = [];
for (let i = 0; i < 3; i++) {
  const random = Math.floor(Math.random() * 256);
  randomRgbValues.push(random);
}
const randomRgb = randomRgbValues.join(', ');
const randomRgbFinal = `rgb(${randomRgb})`;
console.log(randomRgbFinal);

// 4
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];
const newCountries = [];
countries.forEach((country) => {
  newCountries.push(country.toUpperCase());
});
console.log(newCountries);

// 5
const countryLength = [];
countries.forEach((country) => {
  countryLength.push(country.length);
});
console.log(countryLength);

// 6
const countries2 = [];
countries.forEach((country) => {
  const c = [country, country.slice(0, 3).toUpperCase(), country.length];
  countries2.push(c);
});
console.log(countries2);

// 7
const countriesWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land')) {
    countriesWithLand.push(countries[i]);
  }
}
if (!(countriesWithLand.length > 1)) {
  console.log('All these countries are without land.');
}

console.log(countriesWithLand);

// 8
const countriesEndsWith = [];
let iaCounter = 0;
for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith('ia')) {
    countriesEndsWith.push(countries[i]);
  }
}
console.log(countriesEndsWith);

if (!(countriesEndsWith.length > 1)) {
  console.log('These are countries ends without ia.');
}

// 9
let biggestNum = 0;
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > biggestNum) {
    biggestNum = countries[i].length;
  }
}
for (let i = 0; i < countries.length; i++) {
  if (biggestNum == countries[i].length) {
    console.log(countries[i]);
  }
}

// 10
const countriesWithFiveCharacters = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    countriesWithFiveCharacters.push(countries[i]);
  }
}
console.log(countriesWithFiveCharacters);

// 11
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

let longestWord = 0;
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > longestWord) {
    longestWord = webTechs[i].length;
  }
}
for (let i = 0; i < webTechs.length; i++) {
  if (longestWord == webTechs[i].length) {
    console.log(webTechs[i]);
  }
}

// 12
const webTechsWithLength = [];
for (let i = 0; i < webTechs.length; i++) {
  const tempArr = [webTechs[i], webTechs[i].length];
  webTechsWithLength.push(tempArr);
}
console.log(webTechsWithLength);

// 13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const mern = [];
for (let i = 0; i < mernStack.length; i++) {
  mern.push(mernStack[i][0]);
}
const mernFinal = mern.join('');
console.log(mernFinal);

// 14
const techArr = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Redux',
  'Node',
  'Express',
  'MongoDB',
];
for (let i = 0; i < techArr.length; i++) {
  console.log(techArr[i]);
}

// 15
const fruitArr = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruitArr = [];
for (let i = fruitArr.length - 1; i >= 0; i--) {
  reversedFruitArr.push(fruitArr[i]);
}
console.log(reversedFruitArr);

// 16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}

// Level 3
// 1
const copiedCountriesArr = [];
for (let i = 0; i < countries.length; i++) {
  copiedCountriesArr.push(countries[i]);
}
console.log(copiedCountriesArr);

// 2
/* We have already copied it. Let's sort it. */
const sortedCountries = copiedCountriesArr.sort();
console.log(sortedCountries);

// 3
/* it mutates original webTechs array */
const sortedWebTechs = webTechs.sort();
console.log(sortedWebTechs);

/* it mutates original mernStack array */
const sortedMernStack = mernStack.sort();
console.log(sortedMernStack);

// 4
import { countriesArr } from './countries.js';
const countriesContainingLand = [];
for (let i = 0; i < countriesArr.length; i++) {
  if (countriesArr[i].includes('land')) {
    countriesContainingLand.push(countriesArr[i]);
  }
}
console.log(countriesContainingLand);

// 5
let highestNum = 0;
for (let i = 0; i < countriesArr.length; i++) {
  if (countriesArr[i].length > highestNum) {
    highestNum = countriesArr[i].length;
  }
}
for (let i = 0; i < countriesArr.length; i++) {
  if (highestNum == countriesArr[i].length) {
    console.log(countriesArr[i]);
  }
}

// 6
/* Same exercise as 4th one */

// 7
const countriesWithFourCharacters = [];
for (let i = 0; i < countriesArr.length; i++) {
  if (countriesArr[i].length == 4) {
    countriesWithFourCharacters.push(countriesArr[i]);
  }
}
console.log(countriesWithFourCharacters);

// 8
const countriesWithTwoOrMoreWords = [];
for (let i = 0; i < countriesArr.length; i++) {
  if (countriesArr[i].includes(' ')) {
    countriesWithTwoOrMoreWords.push(countriesArr[i]);
  }
}
console.log(countriesWithTwoOrMoreWords);

// 9
/* Reversing without mutating original countriesArr array */
const copiedCountries = [];
for (let i = 0; i < countriesArr.length; i++) {
  copiedCountries.push(countriesArr[i]);
}
const reversedCountriesArr = [];
for (let i = copiedCountries.length - 1; i >= 0; i--) {
  reversedCountriesArr.push(copiedCountries[i].toUpperCase());
}
console.log(reversedCountriesArr);

// END OF THE EXERCISES
