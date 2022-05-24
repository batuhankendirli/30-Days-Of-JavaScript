// EXERCISES

// Level 1
// 1
const fullName = function () {
  console.log('Batuhan Kendirli');
};
fullName();

// 2
const fullName2 = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
};
console.log(fullName2('Batuhan', 'Kendirli'));

// 3
const addNumbers = function (num1, num2) {
  return `Sum of the numbers: ${num1 + num2}`;
};
console.log(addNumbers(4, 9));

// 4
const areaOfRectangle = function (length, width) {
  return `Area of the rectange: ${length * width} `;
};
console.log(areaOfRectangle(3, 6));

// 5
const perimeterOfRectangle = function (length, width) {
  return `Perimeter of the rectangle: ${2 * (length + width)}`;
};
console.log(perimeterOfRectangle(8, 7));

// 6
const volumeOfRectPrism = function (length, width, height) {
  return `Volume of the rectangle prism: ${length * width * height}`;
};
console.log(volumeOfRectPrism(4, 3, 6));

// 7
const areaOfCircle = function (r) {
  return `Area of the circle: ${3.14 * r * r}`;
};
console.log(areaOfCircle(5));

// 8
const circumOfCircle = function (r) {
  return `Circumference of the circle: ${2 * 3.14 * r}`;
};
console.log(circumOfCircle(4));

// 9
const destiny = function (mass, volume) {
  return `Destiny of the substance: ${mass / volume}`;
};
console.log(destiny(24, 6));

// 10
const speed = function (distance, time) {
  return `Speed: ${distance / time}`;
};
console.log(speed(120, 6));

// 11
const weight = function (mass, gravity) {
  return `Weight: ${mass * gravity}`;
};
console.log(weight(63, 1.3));

// 12
const convertCelciusToFahrenheit = function (oC) {
  return `Fahrenheit: ${(oC * 9) / 5 + 32}`;
};
console.log(convertCelciusToFahrenheit(37));

// 13
const bmi = function (weight, height) {
  const result = weight / height ** 2;
  if (result < 18.5) {
    return 'Underweight.';
  } else if (result >= 18.5 && result < 25) {
    return 'Normal weight.';
  } else if (result >= 25 && result < 30) {
    return 'Overweight.';
  } else {
    return 'Obese.';
  }
};
console.log(bmi(80, 1.8));

// 14
const checkSeason = function (month) {
  if (month == 'December' || month == 'January' || month == 'February') {
    return 'Winter';
  } else if (month == 'March' || month == 'April' || month == 'May') {
    return 'Spring';
  } else if (month == 'June' || month == 'July' || month == 'August') {
    return 'Summer';
  } else if (
    month == 'September' ||
    month == 'October' ||
    month == 'November'
  ) {
    return 'Autumn';
  } else {
    return 'Please enter a month.';
  }
};
console.log(checkSeason('March'));

// 15
const findMax = function (numOne, numTwo, numThree) {
  let max = numOne;
  const arr = [numOne, numTwo, numThree];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMax(-2, -45, -34));

// Level 2
// 1
/* idk what am i supposed to do with this question */
const solveLinEquation = function (a, b, c) {
  const x = `-(${b}y+${c})/${a}`;
  const y = `-(${a}x+${c})/${b}`;
  return `x= ${x}\ny= ${y}`;
};
console.log(solveLinEquation(1, 4, 4));

// 2
const solveQuadEquation = function (a, b, c) {
  const x1 = (-b + Math.sqrt(b ** 2 - 4 * (a * c))) / (2 * a);

  const x2 = (-b - Math.sqrt(b ** 2 - 4 * (a * c))) / (2 * a);
  if (x1 == x2) {
    return `${x1}`;
  } else {
    return `${x1}, ${x2}`;
  }
};
console.log(solveQuadEquation(1, 0, -4));

// 3
const someArr = ['Batuhan', 'Kendirli', 'Turkey', 'Istanbul', 22];
const printArray = function (arr) {
  arr.forEach((item) => {
    console.log(item);
  });
};
printArray(someArr);

// 4
const showDateTime = function () {
  const now = new Date();
  let year = now.getFullYear();
  let month = String(now.getMonth());
  let date = String(now.getDate());
  let hours = String(now.getHours());
  let minutes = String(now.getMinutes());

  const addZero = function (value) {
    if (!(value.length > 1)) {
      value = '0'.concat(value);
    }
    return value;
  };

  return `${addZero(date)}/${addZero(month)}/${year} ${addZero(
    hours
  )}:${addZero(minutes)}`;
};
console.log(showDateTime());

// 5
const swapValues = function (x, y) {
  let temp = x;
  x = y;
  y = temp;
  return `x=${x}\ny=${y}`;
};
console.log(swapValues(21, 43));

// 6
const reverseArray = function (arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};
console.log(
  reverseArray([
    'it',
    'is',
    'really',
    'hard',
    'to',
    'think',
    'of',
    'an',
    'example',
    'array',
  ])
);

// 7
const capitalizeArray = function (arr) {
  let capitalizedArr = [];
  arr.forEach((item) => {
    capitalizedArr.push(item.toUpperCase());
  });
  return capitalizedArr;
};

console.log(capitalizeArray(['JavaScript', 'is', 'the', 'web', 'itself']));

//8
const exampleArr = [1, 34, 13, 64, 97, 37, 21, 33, 21];
const addItem = function (arr, item) {
  arr.push(item);
  return arr;
};
console.log(addItem(exampleArr, 22));

// 9
const removeItem = function (arr, index) {
  arr.splice(index, 1);
  return arr;
};
console.log(removeItem(exampleArr, 5));

// 10
const sumOfNumbers = function (arr) {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return total;
};
console.log(sumOfNumbers(exampleArr));

// 11
const sumOfOdds = function (arr) {
  let total = 0;
  arr.forEach((num) => {
    if (!(num % 2 == 0)) {
      total += num;
    }
  });
  return total;
};
console.log(sumOfOdds(exampleArr));

// 12
const sumOfEvens = function (arr) {
  let total = 0;
  arr.forEach((num) => {
    if (num % 2 == 0) {
      total += num;
    }
  });
  return total;
};
console.log(sumOfEvens(exampleArr));

// 13
const evensAndOdds = function (number) {
  if (number <= 0) {
    return -1;
  }
  let numOfEvens = 0;
  let numOfOdds = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      numOfEvens++;
    } else {
      numOfOdds++;
    }
  }
  return `The number of odds are ${numOfOdds}.\nThe number of evens are ${numOfEvens}.`;
};
console.log(evensAndOdds(100));

// 14
const sum = function (...args) {
  const arr = [...args];
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return total;
};
console.log(sum(12, 5, 32, 14, 10, 15));

// 15
/* idk if there is some sort of rule for creating ip address, so i'm not gonna use any rules in specific. */
const randomUserIp = function () {
  const arr = [];
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * 256);
    arr.push(random);
  }
  const ip = arr.join('.');
  return ip;
};
console.log(randomUserIp());

// 16
/* same goes for mac address */
const randomMacAddress = function () {
  const characters = 'ABCDEF0123456789';
  let arr = [];
  const arr2 = [];
  for (let i = 0; i < 6; i++) {
    arr = [];
    for (let j = 0; j < 2; j++) {
      const random = Math.floor(Math.random() * characters.length);
      arr.push(characters[random]);
    }
    arr2.push(arr.join(''));
  }
  return arr2.join(':');
};
console.log(randomMacAddress());

// 17
const randomHexaNumberGenerator = function () {
  let arr = ['#'];
  const characters = 'abcdef0123456789';
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * characters.length);
    arr.push(characters[random]);
  }
  return arr.join('');
};
console.log(randomHexaNumberGenerator());

// 18
const userIdGenerator = function () {
  const id = [];
  const characters =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 7; i++) {
    const random = Math.floor(Math.random() * characters.length);
    id.push(characters[random]);
  }
  return id.join('');
};
console.log(userIdGenerator());

// Level 3
// 1
const userIdGeneratedByUser = function () {
  const numberOfCharacters = prompt('Number of characters: ');
  const numberOfIds = prompt('Number of ids: ');
  const characters =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const ids = [];
  for (let i = 0; i < numberOfIds; i++) {
    let id = [];
    for (let j = 0; j < numberOfCharacters; j++) {
      const random = Math.floor(Math.random() * characters.length);
      id.push(characters[random]);
    }
    ids.push(id.join(''));
  }
  return ids.join('\n');
};
console.log(userIdGeneratedByUser());

// 2
const rgbColorGenerator = function () {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 256);
    arr.push(random);
  }
  const rgb = `rgb(${arr.join(', ')})`;
  return rgb;
};
console.log(rgbColorGenerator());

// 3
const arrayOfHexaColors = function (number) {
  const characters = 'abcdef0123456789';
  let allArrs = [];
  for (let i = 0; i < number; i++) {
    let arr = ['#'];
    for (let j = 0; j < 6; j++) {
      const random = Math.floor(Math.random() * characters.length);
      arr.push(characters[random]);
    }
    allArrs.push(arr.join(''));
  }
  const hexaColors = allArrs.join('\n');
  return hexaColors;
};
console.log(arrayOfHexaColors(5));

// 4
const arrayOfRgbColors = function (number) {
  const arr2 = [];
  for (let i = 0; i < number; i++) {
    let arr = [];
    for (let j = 0; j < 3; j++) {
      const random = Math.floor(Math.random() * 256);
      arr.push(random);
    }
    arr2.push(`rgb(${arr.join(', ')})`);
  }
  const rgb = arr2.join('\n');
  return rgb;
};
console.log(arrayOfRgbColors(3));

// 5
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const arr = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ];
  return `rgb(${arr.join(', ')})`;
}
console.log(hexToRgb('#023419')); // "51";

// 6
const colorToHex = function (color) {
  const hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal;
};

const convertRgbToHex = function (red, green, blue) {
  return `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`;
};
console.log(convertRgbToHex(220, 15, 135));

// 7
const generateColors = function (type, number) {
  if (type == 'rgb') {
    const arrRGB = [];
    for (let i = 0; i < number; i++) {
      let arr = [];
      for (let j = 0; j < 3; j++) {
        const random = Math.floor(Math.random() * 256);
        arr.push(random);
      }
      arrRGB.push(`rgb(${arr.join(', ')})`);
    }
    return arrRGB;
  } else if (type == 'hexa') {
    const characters = 'abcdef0123456789';
    const arrHexa = [];
    for (let i = 0; i < number; i++) {
      let arr = ['#'];
      for (let j = 0; j < 6; j++) {
        const random = Math.floor(Math.random() * characters.length);
        arr.push(characters[random]);
      }
      arrHexa.push(arr.join(''));
    }
    return arrHexa;
  } else {
    return -1;
  }
};
console.log(generateColors('rgb', 4));

// 8
const shuffleArray = function (arr) {
  const tempArr = [];
  while (tempArr.length < arr.length) {
    const random = Math.floor(Math.random() * arr.length);
    if (!tempArr.includes(arr[random])) {
      tempArr.push(arr[random]);
    }
  }
  return tempArr;
};
const text = 'Hey I love coding with JavaScript it is so fun';
const x = text.split(' ');
console.log(shuffleArray(x));

// 9
const factorial = function (num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
console.log(factorial(8));

// 10
const isEmpty = function (parameter) {
  if (!(parameter == undefined)) {
    if (!(parameter.length >= 1) && !(typeof parameter == 'number')) {
      return `It's empty.`;
    } else if (parameter.startsWith(' ')) {
      let counter = 0;
      for (let i = 0; i < parameter.length; i++) {
        if (parameter[i] == ' ') {
          counter++;
        }
      }
      if (counter == parameter.length) {
        return `It's empty.`;
      } else {
        return `It's not empty.`;
      }
    } else {
      return `It's not empty.`;
    }
  } else {
    return `It's empty.`;
  }
};
console.log(isEmpty('  batuhan  '));
console.log(isEmpty('    '));

// 11
const sum2 = function (...args) {
  const arr = [...args];
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return total;
};
console.log(sum2(1, 2, 3, 4, 5));

// 12
const sumOfArrayItems = function (arr) {
  let total = 0;
  let isNum = true;
  arr.forEach((number) => {
    if (typeof number != 'number') {
      isNum = false;
    }
  });
  if (!isNum) {
    return 'All array items should be a number.';
  } else {
    arr.forEach((num) => {
      total += num;
    });
    return total;
  }
};

console.log(sumOfArrayItems([3, 4, 1, 12, '1']));

// 13
const average = function (arr) {
  let total = 0;
  let isNum = true;
  arr.forEach((number) => {
    if (typeof number != 'number') {
      isNum = false;
    }
  });
  if (!isNum) {
    return 'All array items should be a number.';
  } else {
    arr.forEach((num) => {
      total += num;
    });
    return total / arr.length;
  }
};
console.log(average([1, 3, 5, 2, 6, 12, '2']));

// 14
const modifyArray = function (arr) {
  if (arr[4]) {
    arr[4] = arr[4].toUpperCase();
    return arr;
  } else {
    return 'Not found.';
  }
};
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));

// 15
const isPrime = function (number) {
  let counter = 0;
  if (number < 2 && number >= 0) {
    return `${number} is not a prime number.`;
  } else if (number < 0) {
    return 'Please enter a positive number.';
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        counter++;
      }
    }
    if (counter >= 1) {
      return `${number} is not a prime number.`;
    } else {
      return `${number} is a prime number.`;
    }
  }
};
console.log(isPrime(41));

// 16
const isUnique = function (arr) {
  let unique = true;
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        counter++;
      }
    }
    if (counter > 1) {
      unique = false;
    }
  }
  if (unique == false) {
    return 'Array is not unique.';
  } else {
    return 'Array is unique.';
  }
};
console.log(isUnique([1, 2, 3, 5, 5, 8, 2, 32]));

// 17
const isSameDataType = function (arr) {
  let dataTypeCounter = 0;
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[0] != typeof arr[i]) {
      dataTypeCounter++;
    }
  }
  if (dataTypeCounter >= 1) {
    return 'The array is not containing the same data type.';
  } else {
    return 'The array is containing the same data type.';
  }
};

console.log(isSameDataType(['Batuhan', 'Kendirli', 'Turkey', 'Istanbul', 22]));

// 18
const isValidVariable = function (string) {
  const numbs = '0123456789';
  const characters = '!@#%^&*()-+=,.<>?/|`~[]{}';
  let valid = true;
  for (let i = 0; i < characters.length; i++) {
    if (string.includes(characters[i])) {
      valid = false;
    }
  }
  for (let i = 0; i < numbs.length; i++) {
    if (string.startsWith(numbs[i])) {
      valid = false;
    }
  }
  if (valid == true) {
    return 'Valid.';
  } else {
    return 'Not valid.';
  }
};

console.log(isValidVariable('bAtuh@n'));
console.log(isValidVariable('ba2han'));

// 19
const sevenRandomNumbers = function () {
  const uniqueArr = [];
  while (uniqueArr.length < 7) {
    const random = Math.floor(Math.random() * 10);
    if (!uniqueArr.includes(random)) {
      uniqueArr.push(random);
    }
  }
  return uniqueArr;
};
console.log(sevenRandomNumbers());

// 20
import { countries } from './countries.js';
/* it does not mutate the original countries array */
const reverseCountries = function (arr) {
  const copiedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    copiedArr.push(arr[i]);
  }
  return [copiedArr, countries];
};
console.log(reverseCountries(countries));

// END OF THE EXERCISES
