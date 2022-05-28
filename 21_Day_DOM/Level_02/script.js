// EXERCISES

// Level 2
// 1
const allP = document.querySelectorAll('p');

allP.forEach((p) => {
  p.style.color = '#a245b4';
  p.style.backgroundColor = '#ac9b29';
  p.style.border = '2px solid #333';
  p.style.fontSize = '32px';
  p.style.fontFamily = 'Arial';
});

// 2
allP.forEach((p, index) => {
  if (index % 2 == 0) {
    p.style.color = 'green';
  } else {
    p.style.color = 'red';
  }
});

// 3
const firstP = document.querySelector('#first-paragraph');
const secondP = document.querySelector('#second-paragraph');
const thirdP = document.querySelector('#third-paragraph');
const fourthP = document.querySelector('#fourth-paragraph');

firstP.textContent = 'JavaScript';
secondP.textContent = 'is';
thirdP.textContent = 'so';
fourthP.textContent = 'fun';

allP.forEach((p, index) => {
  let name = '';
  if (index == 0) {
    name = 'first';
  } else if (index == 1) {
    name = 'second';
  } else if (index == 2) {
    name = 'third';
  } else if (index == 3) {
    name = 'fourth';
  }
  p.setAttribute('class', `${name}-paragraph`);
  p.setAttribute('id', `${name}`);
});

// END OF THE SECOND LEVEL
