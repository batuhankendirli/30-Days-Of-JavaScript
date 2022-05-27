// EXERCISES

// Level 1
// 1
import { skills, age, isMarried, student, txt } from './arrays.js';
const skillsToJSON = JSON.stringify(skills);
console.log(skillsToJSON);

// 2
const ageToJSON = JSON.stringify(age);
console.log(ageToJSON);

// 3
const isMarriedToJSON = JSON.stringify(isMarried);
console.log(isMarriedToJSON);

// 4
const studentToJSON = JSON.stringify(student);
console.log(studentToJSON);

// Level 2
// 1
const studentWith3Props = JSON.stringify(
  student,
  ['firstName', 'lastName', 'skills'],
  4
);
console.log(studentWith3Props);

// Level 3
// 1
const parsedTxt = JSON.parse(txt);
console.log(parsedTxt);

// 2
const parsedTxt2 = JSON.parse(txt);
let number = 0;
for (const key in parsedTxt2) {
  if (parsedTxt2.hasOwnProperty(key)) {
    if (parsedTxt2[key].skills.length > number) {
      number = parsedTxt2[key].skills.length;
    }
  }
}
for (const key in parsedTxt2) {
  if (number == parsedTxt[key].skills.length) {
    console.log(parsedTxt[key]);
  }
}

// END OF THE EXERCISES
