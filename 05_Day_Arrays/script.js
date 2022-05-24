// EXERCISES

// Level 1
// 1
const anArr = [];

// 2
const someArr = [12, 44, 23, 56, 13, 63, 93];

// 3
console.log(someArr.length);

// 4
console.log(
  `First item: ${someArr[0]}\nMiddle item: ${
    someArr[Math.floor(someArr.length / 2)]
  }\nLast item: ${someArr[someArr.length - 1]}`
);

// 5
const mixedDataTypes = ['Batuhan', 22, true, null, undefined, NaN];
console.log(mixedDataTypes);

// 6
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(
  `First company: ${itCompanies[0]}\nMiddle company: ${
    itCompanies[Math.floor(itCompanies.length / 2)]
  }\nLast company: ${itCompanies[itCompanies.length - 1]}`
);

// 10
itCompanies.forEach((company) => {
  console.log(company);
});

// 11
itCompanies.forEach((company) => {
  let temp = company.toUpperCase();
  console.log(temp);
});

// 12
let tempIt = itCompanies.slice(0, -1);
console.log(
  `${tempIt.join(', ')} and ${
    itCompanies[itCompanies.length - 1]
  } are big IT companies.`
);

// 13
if (itCompanies.includes('Facebook')) {
  console.log('Facebook');
} else {
  console.log('Company is not found.');
}

// 14
const companies = [];
itCompanies.forEach((company) => {
  let temp = company.toLowerCase();
  let counter = 0;
  for (let i = 0; i < company.length; i++) {
    if (temp[i] == 'o') {
      counter++;
    }
  }
  if (counter > 1) {
    companies.push(company);
  }
  counter = 0;
});
console.log(companies);

// 15
console.log(itCompanies.sort());

// 16
console.log(itCompanies.reverse());

// 17
console.log(itCompanies.slice(0, 3));

// 18
console.log(itCompanies.slice(-3));

// 19
console.log(
  itCompanies.slice(
    Math.floor(itCompanies.length / 2),
    Math.ceil(itCompanies.length / 2)
  )
);

// 20
itCompanies.shift();
console.log(itCompanies);
itCompanies.unshift('Oracle'); // added back for the next exercise

// 21
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);

// 22
itCompanies.pop();
console.log(itCompanies);

// 23
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

// Level 2
// 1
import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

// 2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const clearedText = text.replace(
  /[`~!@#$%^&*()_|+.,\-=?;:'"<>\{\}\[\]\\\/]/gi,
  ''
);
console.log(clearedText.split(' '));
console.log(clearedText.split(' ').length);

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

shoppingCart.splice(shoppingCart.length - 2, 1);
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

// 4
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

// 5
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocessor.');
} else {
  webTechs.push('Sass');
}
console.log(webTechs);

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Level 3
// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
console.log(`Min age: ${ages[0]}\nMax age: ${ages[ages.length - 1]}`);

if (ages.length % 2 == 0) {
  const medianOne = ages[ages.length / 2];
  const medianTwo = ages[ages.length / 2 + 1];
  console.log(`Median: ${(medianOne + medianTwo) / 2}`);
}

let totalAge = 0;
ages.forEach((age) => {
  totalAge += age;
});
console.log(`Average age: ${totalAge / ages.length}`);

console.log(`Range of the ages: ${ages[ages.length - 1] - ages[0]}`);

// 2
console.log(countries.slice(0, 10));

// 3
if (countries.length % 2 == 0) {
  console.log(
    countries[countries.length / 2],
    countries[countries.length / 2 + 1]
  );
} else {
  console.log(countries[Math.floor(countries.length / 2)]);
}

// 4
let partOne = [];
let partTwo = [];
if (countries.length % 2 == 0) {
  partOne = countries.slice(0, countries.length / 2);
  partTwo = countries.slice(countries.length / 2, countries.length);
} else {
  partOne = countries.slice(0, Math.ceil(countries.length / 2));
  partTwo = countries.slice(Math.ceil(countries.length / 2), countries.length);
}

console.log(partOne);
console.log(partTwo);

// END OF THE EXERCISES
