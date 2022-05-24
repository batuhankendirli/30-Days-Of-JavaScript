// EXERCISES

// Level 1
// 1
let challange = '30 Days Of JavaScript';

// 2
console.log(challange);

// 3
console.log(challange.length);

// 4
console.log(challange.toUpperCase());

// 5
console.log(challange.toLowerCase());

// 6
console.log(challange.substr(0, 2));
console.log(challange.substring(0, 2));

// 7
console.log(challange.slice(3, challange.length));

// 8
console.log(challange.includes('Script')); // true

// 9
console.log(challange.split());

// 10
console.log(challange.split(' '));

// 11
const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12
console.log(challange.replace('JavaScript', 'Python'));

// 13
console.log(challange.charAt(15));

// 14
console.log(challange.charCodeAt('J'));

// 15
console.log(challange.indexOf('a'));

// 16
console.log(challange.lastIndexOf('a'));

// 17
const sentence =
  'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 18
console.log(sentence.lastIndexOf('because'));

// 19
console.log(sentence.search('because'));

// 20
const trimExample = ' 30 Days Of JavaScript ';
console.log(trimExample.trim());

// 21
console.log(challange.startsWith('30'));

// 22
console.log(challange.endsWith('ipt'));

// 23
let pattern = /a/gi;
console.log(challange.match(pattern));

// 24
let string1 = '30 Days of';
let string2 = 'JavaScript';
const newString = string1.concat(' ', string2);
console.log(newString);

// 25
console.log(challange.repeat(2));

// Level 2
// 1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// 2
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

// 3
let number1 = '10';
let number2 = 10;
if (typeof number1 !== typeof number2) {
  const newNumber1 = Number(number1);
  console.log(typeof newNumber1 === typeof number2);
}

// 4
const number = parseFloat('9.8');
if (number === 10) {
  console.log(`It's exactly equal.`);
} else {
  const newNumber = Math.ceil(number);
  console.log(newNumber === 10);
}

// 5
const python = 'python';
const jargon = 'jargon';
if (python.includes('on') && jargon.includes('on')) {
  console.log(`Both python and jargon includes 'on'`);
}

// 6
const sentence1 = 'I hope this course is not full of jargon.';
console.log(sentence1.includes('jargon'));

// 7
let random = Math.floor(Math.random() * 101);
console.log(random);

// 8
let random1 = Math.floor(Math.random() * 51) + 50;
console.log(random1);

// 9
let random2 = Math.floor(Math.random() * 256);
console.log(random2);

// 10
let js = 'JavaScript';
let randomNum = Math.floor(Math.random() * js.length);
console.log(js[randomNum]);

// 11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// 12
const someString =
  'You cannot end a sentence with because because because is a conjunction';

console.log(someString.slice(31, 54));

// Level 3
// 1
const loveSentence =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log(loveSentence.match(/love/gi).length);

// 2
const becauseSentence =
  'You cannot end a sentence with because because because is a conjunction';

console.log(becauseSentence.match(/because/gi).length);

// 3
const text =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const clearedText = text.replace(
  /[`~!@#$%^&*()_|+.,\-=?;:'"<>\{\}\[\]\\\/]/gi,
  ''
);

let wordCounts = {};
const textArr = clearedText.split(/\b/);
console.log(textArr);
for (let i = 0; i < textArr.length; i++)
  wordCounts['_' + textArr[i]] = (wordCounts['_' + textArr[i]] || 0) + 1;
console.log(wordCounts);

// 4
let numText =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let newNumText = numText.replace(/\D/g, ' ').trim().split(' ');
let numbers = [];
for (let i = 0; i < newNumText.length; i++) {
  if (newNumText[i] != '') {
    numbers.push(newNumText[i]);
  }
}
let totalIncome = 0;
numbers.forEach((number) => {
  totalIncome += Number(number);
});
console.log(totalIncome);

// END OF THE EXERCISES
