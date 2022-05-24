// EXERCISES

// Level 1
// 1
const userAge = prompt('Enter your age: ');
if (userAge >= 18) {
  console.log('You are old enough to drive.');
} else {
  console.log(`You are left with ${18 - userAge} years to drive.`);
}

// 2
const userAge2 = prompt('Enter your age: ');
let myAge = 22;
if (userAge2 > myAge) {
  console.log(`You are ${userAge2 - myAge} years older than me.`);
} else {
  console.log(`I am ${myAge - userAge2} years older than you.`);
}

// 3
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}.`);
} else if (a == b) {
  console.log(`${a} and ${b} are equal.`);
} else {
  console.log(`${b} is greater than ${a}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

// 4
const userInput = prompt('Enter a number: ');
if (userInput % 2 == 0) {
  console.log(`${userInput} is an even number.`);
} else {
  console.log(`${userInput} is an odd number.`);
}

// Level 2
// 1

const studentScore = 62;
if (studentScore >= 80 && studentScore <= 100) {
  console.log('A');
} else if (studentScore >= 70 && studentScore <= 79) {
  console.log('B');
} else if (studentScore >= 60 && studentScore <= 69) {
  console.log('C');
} else if (studentScore >= 50 && studentScore <= 59) {
  console.log('D');
} else if (studentScore >= 0 && studentScore <= 49) {
  console.log('F');
} else {
  console.log('Please enter a number between 0-100');
}

// 2
const month = 'March';

if (month == 'September' || month == 'October' || month == 'November') {
  console.log('The season is Autumn.');
} else if (month == 'December' || month == 'January' || month == 'February') {
  console.log('The season is Winter.');
} else if (month == 'March' || month == 'April' || month == 'May') {
  console.log('The season is Spring.');
} else if (month == 'June' || month == 'July' || month == 'August') {
  console.log('The season is Summer.');
}

// 3
const userDay = prompt('What day is today: ');
const dayLowerCase = userDay.toLowerCase();
const part1 = dayLowerCase.slice(0, 1).toUpperCase();
const part2 = dayLowerCase.slice(1);
const finalString = part1.concat(part2);
if (
  dayLowerCase == 'monday' ||
  dayLowerCase == 'tuesday' ||
  dayLowerCase == 'wednesday' ||
  dayLowerCase == 'thursday' ||
  dayLowerCase == 'friday'
) {
  console.log(`${finalString} is a working day.`);
} else {
  console.log(`${finalString} is a weekend.`);
}

// Level 3
// 1
const userMonth = prompt('Please enter a month: ');
const newMonth = userMonth.toLowerCase();
const month1 = newMonth.slice(0, 1).toUpperCase();
const month2 = newMonth.slice(1);
const finalMonth = month1.concat(month2);
switch (newMonth) {
  case 'january' ||
    'march' ||
    'may' ||
    'july' ||
    'august' ||
    'october' ||
    'december':
    console.log(`${finalMonth} has 31 days.`);
    break;

  case 'february':
    console.log(`${finalMonth} has 28 days.`);
    break;

  case 'april' || 'june' || 'september' || 'november':
    console.log(`${finalMonth} has 30 days.`);
    break;
  default:
    console.log('Opsie dasy');
    break;
}

// 2
const year = new Date().getFullYear();
if (
  newMonth == 'january' ||
  newMonth == 'march' ||
  newMonth == 'may' ||
  newMonth == 'july' ||
  newMonth == 'august' ||
  newMonth == 'october' ||
  newMonth == 'december'
) {
  console.log(`${finalMonth} has 31 days.`);
} else if (
  newMonth == 'april' ||
  newMonth == 'june' ||
  newMonth == 'september' ||
  newMonth == 'november'
) {
  console.log(`${finalMonth} has 30 days.`);
} else if (newMonth == 'february') {
  if (year % 4 == 0) {
    console.log(`${finalMonth} has 29 days.`);
  } else {
    console.log(`${finalMonth} has 28 days.`);
  }
}

// END OF THE EXERCISES
