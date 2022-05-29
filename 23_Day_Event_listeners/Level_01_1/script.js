// EXERCISES

// Level 1
// 1
const wrapper = document.querySelector('.wrapper');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const searchArea = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
const errParagraph = document.createElement('p');
const numbers = document.createElement('div');

/* body style */
document.body.style.marginTop = '20px';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.fontFamily = 'Roboto';
document.body.style.letterSpacing = '1px';

/* h1 style */
h1.style.color = '#5bbc7a';
h1.style.fontWeight = '500';

/* h2 style */
h2.style.fontWeight = '400';

/* h1 style */
h3.style.fontWeight = '400';
h3.style.marginBottom = '15px';

/* search area style */
searchArea.style.width = '900px';
searchArea.style.display = 'flex';
searchArea.style.gap = '20px';

/* button style */
button.textContent = 'Generate numbers';
button.style.backgroundColor = '#5bbc7a';
button.style.border = 'none';
button.style.padding = '10px 8px';
button.style.color = 'white';
button.style.fontSize = '20px';
button.style.letterSpacing = '1px';
button.style.transition = 'all .3s';

button.onmouseenter = () => {
  button.style.backgroundColor = '#51a56c';
  button.style.cursor = 'pointer';
};
button.onmouseleave = () => {
  button.style.backgroundColor = '#5bbc7a';
};

/* input style */
input.style.border = '2px solid #5bbc7a';
input.style.padding = '10px 20px';
input.style.flexGrow = '1';
input.style.fontSize = '20px';

input.placeholder = 'Generate more numbers...';
input.style.setProperty('placeholder', 'red');
input.style.letterSpacing = '1px';
input.style.fontWeight = '300';
input.onfocus = () => {
  input.style.outline = 'none';
};

/* errParagraph style */
errParagraph.style.color = '#FD5E53';

/* Numbers style */
numbers.style.padding = '20px 0';
numbers.style.display = 'grid';
numbers.style.gridTemplateColumns = 'repeat(9, 1fr)';
numbers.style.width = '900px';
numbers.style.textAlign = 'center';
numbers.style.gap = '5px';

searchArea.appendChild(input);
searchArea.appendChild(button);

wrapper.appendChild(errParagraph);
wrapper.appendChild(searchArea);

let inputValue = '';
input.addEventListener('input', (e) => {
  inputValue = e.target.value;
});

button.addEventListener('click', () => {
  if (inputValue.length == 0) {
    errParagraph.style.display = 'block';
    errParagraph.textContent =
      'Enter number value on the input field to generate numbers';
  } else {
    if ((inputValue - 1 || inputValue - 1 == 0) && !inputValue.includes(' ')) {
      errParagraph.style.display = 'none';
      numbers.innerHTML = '';
      for (let i = 0; i < inputValue; i++) {
        const span = document.createElement('span');
        span.style.color = 'white';
        span.style.fontSize = '40px';
        let counter = 0;
        if (i % 2 == 0) {
          span.style.backgroundColor = '#21bf73';
          span.textContent = i;
          numbers.appendChild(span);
        } else {
          span.style.backgroundColor = '#FDDB3A';
          span.textContent = i;
          numbers.appendChild(span);
        }
        for (let j = 2; j < inputValue; j++) {
          if (i % j == 0) {
            counter++;
          }
        }
        if (counter == 1) {
          span.style.backgroundColor = '#FD5E53';
          span.textContent = i;
          numbers.appendChild(span);
        }
      }
    } else {
      errParagraph.style.display = 'block';
      errParagraph.textContent = 'Input value must be a number';
    }
  }
});
for (let i = 0; i < 51; i++) {
  const span = document.createElement('span');
  span.style.color = 'white';
  span.style.fontSize = '40px';
  let counter = 0;
  if (i % 2 == 0) {
    span.style.backgroundColor = '#21bf73';
    span.textContent = i;
    numbers.appendChild(span);
  } else {
    span.style.backgroundColor = '#FDDB3A';
    span.textContent = i;
    numbers.appendChild(span);
  }
  for (let j = 2; j < 51; j++) {
    if (i % j == 0) {
      counter++;
    }
  }
  if (counter == 1) {
    span.style.backgroundColor = '#FD5E53';
    span.textContent = i;
    numbers.appendChild(span);
  }
}
document.body.appendChild(numbers);

// END OF THE LEVEL 1_1
