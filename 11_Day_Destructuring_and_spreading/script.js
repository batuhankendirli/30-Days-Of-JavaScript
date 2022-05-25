// EXERCISES

// Level 1
// 1
import { constants, countries, rectangle, users } from './arrays.js';
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e);
console.log(pi);
console.log(gravity);
console.log(humanBodyTemp);
console.log(waterBoilingTemp);

// 2
const [fin, est, sw, den, nor] = countries;
console.log(fin);
console.log(est);
console.log(sw);
console.log(den);
console.log(nor);

// 3
let { width, height, area, perimeter } = rectangle;
console.log(width);
console.log(height);
console.log(area);
console.log(perimeter);

// Level 2
// 1
users.forEach(({ name, scores, skills, age }) => {
  console.log(name, scores, skills, age);
});

// 2
users.forEach((person) => {
  const { name, scores, skills, age } = person;
  if (skills.length < 2) {
    console.log(person);
  }
});

// Level 3
// 1
import { countriesArr } from './countriesArr.js';
countriesArr.forEach((country) => {
  const { name, capital, population, languages } = country;
  console.log(name, capital, population, languages);
});

// 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

// 3
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];
const convertArrayToObject = function (arr) {
  const arrFinal = [];
  arr.forEach((item) => {
    const [name, skills, scores] = item;
    const obj = new Object({ name, skills, scores });
    arrFinal.push(obj);
  });
  return arrFinal;
};
console.log(convertArrayToObject(students));

// 4
import { studentObj } from './studentObj.js';

const frontEnd = [...studentObj.skills1.frontEnd];
frontEnd[studentObj.skills1.frontEnd.length] = {
  skill: 'Bootstrap',
  level: 8,
};

const backEnd = [...studentObj.skills1.backEnd];
backEnd[studentObj.skills1.backEnd.length] = {
  skill: 'Express',
  level: 9,
};

const dataBase = [...studentObj.skills1.dataBase];
dataBase[studentObj.skills1.dataBase.length] = {
  skill: 'MongoDB',
  level: 7.5,
};

const dataScience = [...studentObj.skills1.dataScience];
console.log(typeof dataScience);
dataScience[studentObj.skills1.dataScience.length] = 'SQL';

const { name1, age, skills1 } = studentObj;
const newStudent = {
  name1,
  age,
  skills1: { frontEnd, backEnd, dataBase, dataScience },
};

console.log(newStudent);
console.log(studentObj);
/* I don't know if this is the right way to solve this example, but that was the only way to add new values to newStudent's skills without mutating the original studentObj's skills */

// END OF THE EXERCISES
