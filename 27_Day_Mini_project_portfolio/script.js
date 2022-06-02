// EXERCISES

// Level 1
// 1
/* Exercise description: Create the following using HTML, CSS, and JavaScript, 
so I am going to apply most of the styling with css.  */

const titles = [
  ['🔥', 'Motivational Speaker'],
  ['💻', 'Programmer'],
  ['🔥', 'Motivator'],
  ['📁', 'Content Creator'],
  ['🌱', 'Educator'],
  ['📖', 'Instructor'],
];

const emoji = document.querySelector('.emoji');
const title = document.querySelector('.title');
let i = 1;

emoji.textContent = titles[0][0];
title.textContent = titles[0][1];

setInterval(() => {
  if (i == titles.length) {
    i = 0;
  }
  emoji.textContent = titles[i][0];
  title.textContent = titles[i][1];
  i++;
}, 2000);

const techs = [
  ['Numpy', '#4B73C9'],
  ['Python', '#3571A3'],
  ['JavaScript', '#EFD81D'],
  ['React', '#00C6F7'],
  ['Redux', '#7248B6'],
  ['Node', '#509941'],
  ['MongoDB', '#50A743'],
  ['Pandas', '#120751'],
  ['HTML', '#E96227'],
];

const tech = document.querySelector('.tech');
tech.textContent = techs[0][0];
tech.style.color = techs[0][1];
let j = 1;
setInterval(() => {
  if (j == techs.length) {
    j = 0;
  }
  tech.textContent = techs[j][0];
  tech.style.color = techs[j][1];
  j++;
}, 2000);

// END OF THE EXERCISES
