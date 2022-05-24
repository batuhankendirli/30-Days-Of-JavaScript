// EXERCISES

// Level 1
// 1
const firstName = 'Batuhan';
const lastName = 'Kendirli';
const country = 'Turkey';
const city = 'Istanbul';
let age = 22;
let isMarried = false;
const year = 2022;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

// 2
typeof '10' == typeof 10
  ? console.log('They are equal.')
  : console.log('They are not equal.');

// 3
parseInt('9.8') == 10
  ? console.log('They are equal.')
  : console.log('They are not equal.');

// 4
if (1) {
  console.log('truthy');
}
if (!undefined) {
  console.log('falsy');
}

// 5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

console.log('jargon'.length != 'python'.length);

// 6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon'.includes('on') && 'python'.includes('on')));

// 7
const date = new Date();
const year1 = date.getFullYear();
const month = date.getMonth();
const date1 = date.getDate();
const day = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();
const secondsElapsed = date.getTime() / 1000;
console.log(secondsElapsed);

// Level 2
// 1
const base = prompt('Enter base: ');
const height = prompt('Enter height: ');
console.log(`Area of the triangle is ${0.5 * base * height}`);

// 2
const sideA = Number(prompt('Enter side a: '));
const sideB = Number(prompt('Enter side b: '));
const sideC = Number(prompt('Enter side c: '));
console.log(`The perimeter of the triangle is ${sideA + sideB + sideC}`);

// 3
const length = Number(prompt('Enter length: '));
const width = Number(prompt('Enter width: '));
console.log(`Area of rectangle is: ${2 * (length + width)}`);

// 4
const r = prompt('Enter radius: ');
const pi = 3.14;
console.log(`Area of the circle is ${pi * r * r}`);
console.log(`Circumference of the circle is ${pi * 2 * r}`);

// 5
/* y=2x-2 */
const slope1 = 2;
console.log(
  `Slope: ${slope1}, x-intercept: ${2 / 2} and y-intercept: ${2 * 0 - 2}`
);

// 6
/* m=(y2-y1)/(x2-x1) */
const slope2 = (10 - 2) / (6 - 2);
console.log(`Slope: ${slope2}`);

// 7
if (slope1 > slope2) {
  console.log(`First slope is higher than second slope.`);
} else if (slope1 == slope2) {
  console.log('Both slopes are equal.');
} else {
  console.log('Second slope is higher than first slope.');
}

// 8
/* y=x2 + 6x + 9 */
let x = 0;
let y = x ** 2 + 6 * x + 9;
console.log(y);

// 9
const userHour = prompt('Enter hours: ');
const userRatePerHour = prompt('Enter rate per hour: ');
console.log(`Your weekly earning is ${userHour * userRatePerHour}`);

// 10
const myName = 'Batuhan';
myName.length > 7
  ? console.log('My name is long')
  : console.log('My name is short');

// 11
const myLastName = 'Kendirli';
console.log(
  `My first name, ${myName} is ${
    myName.length > myLastName.length ? 'longer' : 'shorter'
  } than my family name, ${myLastName}.`
);

// 12
let myAge1 = 22;
let yourAge1 = 25;
if (myAge1 > yourAge1) {
  console.log(`I am ${myAge1 - yourAge1} years older than you.`);
} else {
  console.log(`I am ${yourAge1 - myAge1} years younger than you.`);
}

// 13
const userBirthDate = prompt('Enter birth year: ');
console.log(
  `You are ${userBirthDate}. ${
    2022 - userBirthDate >= 18
      ? 'You are old enough to drive.'
      : `You will be allowed to drive after ${
          18 - (2022 - userBirthDate)
        } years.`
  }`
);

// 14
const yearsLived = prompt('Enter number of years you live: ');
console.log(`You lived ${yearsLived * 60 * 60 * 24 * 365} seconds.`);

// 15
const newDate = new Date();
let newYear = String(newDate.getFullYear());
let newMonth = String(newDate.getMonth());
let newDay = String(newDate.getDate());
let newHour = String(newDate.getHours());
let newMinutes = String(newDate.getMinutes());
console.log(`${newYear}-${newMonth}-${newDay} ${newHour}:${newMinutes}`);

console.log(`${newDay}-${newMonth}-${newYear} ${newHour}:${newMinutes}`);

console.log(`${newDay}/${newMonth}/${newYear} ${newHour}:${newMinutes}`);

// Level 3
// 1
if (newMonth.length == 1) {
  newMonth = '0'.concat(newMonth);
}
if (newDay.length == 1) {
  newDay = '0'.concat(newDay);
}
if (newHour.length == 1) {
  newHour = '0'.concat(newHour);
}
if (newMinutes.length == 1) {
  newMinutes = '0'.concat(newMinutes);
}
console.log(`${newYear}-${newMonth}-${newDay} ${newHour}:${newMinutes}`);

// END OF THE EXERCISES
