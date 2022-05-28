// EXERCISES

// Level 1
// 1
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// 2
const first = document.querySelector('#first-paragraph');
const second = document.querySelector('#second-paragraph');
const third = document.querySelector('#third-paragraph');
const fourth = document.querySelector('#fourth-paragraph');

console.log(first, second, third, fourth);

// 3
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// 4
allParagraphs.forEach((p) => {
  console.log(p.textContent);
});

// 5
fourth.textContent = 'Fourth Paragraph';
console.log(fourth);

// 6
first.className = 'first-class';
first.id = 'first';

second.setAttribute('class', 'second');
second.setAttribute('id', 'second');

third.classList.add('third');
third.id = 'third';

fourth.setAttribute('class', 'fourth');
fourth.id = 'fourth';

// END OF THE FIRST LEVEL
