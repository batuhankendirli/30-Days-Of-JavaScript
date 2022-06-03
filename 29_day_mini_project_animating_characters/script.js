// EXERCISES

// Level 1
// 1
/* Exercise description: Create the following using HTML, CSS, and JavaScript, 
so I am going to apply most of the styling with css.  */
const firstDiv = document.querySelector('.first');
const secondDiv = document.querySelector('.second');
const wrapper = document.querySelector('.wrapper');

const text = '30 Days Of JavaScript Challenge 2020';
const author = 'Asabeneh Yetayeh';

const randomFontWeight = function () {
  const fontWeights = [300, 400, 500, 600, 700];
  const random = Math.floor(Math.random() * fontWeights.length);
  return fontWeights[random];
};

const randomLetterSpacing = function () {
  const letterSpacings = ['5px', '10px', '15px'];
  const random = Math.floor(Math.random() * letterSpacings.length);
  return letterSpacings[random];
};

document.body.style.lineHeight = 1.6;

const randomColor = function () {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 256);
    arr.push(random);
  }
  return `rgb(${arr.join(', ')})`;
};

wrapper.style.backgroundColor = randomColor();

for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.textContent = text[i].toUpperCase();
  span.style.color = randomColor();
  firstDiv.appendChild(span);
}

for (let i = 0; i < author.length; i++) {
  const span = document.createElement('span');
  span.textContent = author[i].toUpperCase();
  span.style.color = randomColor();
  secondDiv.appendChild(span);
  document.body.style.fontWeight = randomFontWeight();
  document.body.style.letterSpacing = randomLetterSpacing();
}

setInterval(() => {
  wrapper.style.backgroundColor = randomColor();
  firstDiv.innerHTML = '';
  secondDiv.innerHTML = '';

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i].toUpperCase();
    span.style.color = randomColor();
    firstDiv.appendChild(span);
  }

  for (let i = 0; i < author.length; i++) {
    const span = document.createElement('span');
    span.textContent = author[i].toUpperCase();
    span.style.color = randomColor();
    secondDiv.appendChild(span);
    document.body.style.fontWeight = randomFontWeight();
    document.body.style.letterSpacing = randomLetterSpacing();
  }
}, 2300);

// END OF THE EXERCISES
