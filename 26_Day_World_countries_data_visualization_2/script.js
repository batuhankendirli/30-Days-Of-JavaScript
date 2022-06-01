// EXERCISES

// Level 1
// 1
import { countries } from './countries.js';
document.body.style.fontFamily = 'Montserrat';
document.body.style.color = 'white';

const wrapper = document.createElement('div');
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'center';
wrapper.style.gap = '30px';
wrapper.style.padding = '130px 0';
wrapper.style.backgroundImage =
  "linear-gradient(rgba(0, 49, 98, 0.5), rgba(0, 49, 98, 0.5)), url('./images/globe-2.jpg')";
wrapper.style.backgroundSize = 'cover';
wrapper.style.backgroundPosition = 'center';

const head = document.createElement('div');
head.style.textAlign = 'center';
head.style.display = 'flex';
head.style.flexDirection = 'column';
head.style.gap = '10px';

const h1 = document.createElement('h1');
h1.textContent = 'World Countries List';
h1.style.textTransform = 'uppercase';
h1.style.fontWeight = '700';
h1.style.fontSize = '44px';
h1.style.letterSpacing = '15px';

const h3 = document.createElement('h3');
h3.textContent = 'Total number of countries: ';
h3.style.fontSize = '18px';

const totalCountry = document.createElement('span');
totalCountry.textContent = countries.length;

const h4 = document.createElement('h4');
h4.style.fontWeight = '400';
h4.style.fontSize = '16px';

const letter = document.createElement('span');
letter.style.color = 'orangered';
letter.style.fontWeight = '600';

const are = document.createElement('span');
are.textContent = ' are ';

const number = document.createElement('span');
number.style.color = 'lightgreen';

const buttons = document.createElement('div');
buttons.style.display = 'flex';
buttons.style.gap = '5px';

const startBtn = document.createElement('button');
startBtn.textContent = 'Starting word';
startBtn.style.border = 'none';
startBtn.style.fontFamily = 'inherit';
startBtn.style.color = 'inherit';
startBtn.style.backgroundColor = '#895be6';
startBtn.style.padding = '13.5px';
startBtn.style.textTransform = 'uppercase';
startBtn.style.borderRadius = '3px';

startBtn.onmouseenter = () => {
  startBtn.style.cursor = 'pointer';
};

const containsBtn = document.createElement('button');
containsBtn.textContent = 'Search with any word';
containsBtn.style.border = 'none';
containsBtn.style.fontFamily = 'inherit';
containsBtn.style.color = 'inherit';
containsBtn.style.backgroundColor = '#895be6';
containsBtn.style.padding = '13.5px';
containsBtn.style.textTransform = 'uppercase';
containsBtn.style.borderRadius = '3px';

containsBtn.onmouseenter = () => {
  containsBtn.style.cursor = 'pointer';
};

const sortBtn = document.createElement('span');
sortBtn.style.padding = '12px';
sortBtn.style.backgroundColor = '#895be6';
sortBtn.style.borderRadius = '3px';

sortBtn.onmouseenter = () => {
  sortBtn.style.cursor = 'pointer';
};

const sortIcon = document.createElement('i');
sortIcon.classList.add('fa-solid');
sortIcon.classList.add('fa-arrow-down-a-z');

const searchArea = document.createElement('div');
searchArea.style.display = 'flex';
searchArea.style.alignItems = 'center';
searchArea.style.justifyContent = 'center';
searchArea.style.gap = '10px';

const input = document.createElement('input');
input.style.border = 'none';
input.style.width = '500px';
input.style.borderRadius = '20px';
input.style.padding = '10px 15px';
input.style.fontSize = '18px';
input.style.fontFamily = 'inherit';
input.placeholder = 'Search country...';

const searchIcon = document.createElement('i');
searchIcon.classList.add('fa-solid');
searchIcon.classList.add('fa-magnifying-glass');
searchIcon.style.fontSize = ' 20px';

const countriesData = document.createElement('div');
countriesData.style.display = 'grid';
countriesData.style.gridTemplateColumns = 'repeat(6, 1fr)';
countriesData.style.columnGap = '50px';
countriesData.style.rowGap = '20px';
countriesData.style.width = '1150px';
countriesData.style.margin = '100px auto';

head.appendChild(h1);
h3.appendChild(totalCountry);
head.appendChild(h3);
head.appendChild(h4);
wrapper.appendChild(head);

buttons.appendChild(startBtn);
buttons.appendChild(containsBtn);
sortBtn.appendChild(sortIcon);
buttons.appendChild(sortBtn);
wrapper.appendChild(buttons);

searchArea.appendChild(input);
searchArea.appendChild(searchIcon);

wrapper.appendChild(searchArea);
document.body.appendChild(wrapper);
document.body.appendChild(countriesData);
// const startBtn = document.querySelector('.start-btn');
// const containsBtn = document.querySelector('.contains-btn');
// const sortBtn = document.querySelector('.sort-btn');
// const sortIcon = document.querySelector('.fa-arrow-down-a-z');

const startsWith = function (string) {
  countriesData.innerHTML = '';
  h4.innerHTML = '';

  const arr = [];
  countries.forEach((country) =>
    country.toLowerCase().startsWith(string) ? arr.push(country) : 0
  );
  arr.forEach((country) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = country.toUpperCase();
    p.style.fontWeight = '700';
    p.style.fontSize = '16px';
    p.style.textAlign = 'center';
    div.style.width = '150px';
    div.style.height = '150px';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.backgroundImage =
      "linear-gradient(rgba(0, 49, 98, 0.5), rgba(0, 49, 98, 0.5)), url('./images/map_image.jpg')";
    div.style.backgroundSize = 'cover';
    div.style.borderRadius = '3px';
    div.appendChild(p);
    countriesData.appendChild(div);
  });
  if (string.length < 1) {
    h4.innerHTML = '';
  } else {
    h4.textContent = 'Countries starts with ';
    letter.textContent = string;
    number.textContent = arr.length;
    h4.appendChild(letter);
    h4.appendChild(are);
    h4.appendChild(number);
  }
};

const contains = function (string) {
  h4.innerHTML = '';
  countriesData.innerHTML = '';

  const arr = [];
  countries.forEach((country) =>
    country.toLowerCase().includes(string) ? arr.push(country) : 0
  );
  arr.forEach((country) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = country.toUpperCase();
    p.style.fontWeight = '700';
    p.style.fontSize = '16px';
    p.style.textAlign = 'center';
    div.style.width = '150px';
    div.style.height = '150px';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.backgroundImage =
      "linear-gradient(rgba(0, 49, 98, 0.5), rgba(0, 49, 98, 0.5)), url('./images/map_image.jpg')";
    div.style.backgroundSize = 'cover';
    div.style.borderRadius = '3px';
    div.appendChild(p);
    countriesData.appendChild(div);
  });
  if (string.length < 1) {
    h4.innerHTML = '';
  } else {
    h4.textContent = 'Countries containing ';
    letter.textContent = string;
    number.textContent = arr.length;
    h4.appendChild(letter);
    h4.appendChild(are);
    h4.appendChild(number);
  }
};
const sort = function () {
  h4.innerHTML = '';
  countriesData.innerHTML = '';
  const reversed = countries.reverse();
  reversed.forEach((country) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = country.toUpperCase();
    p.style.fontWeight = '700';
    p.style.fontSize = '16px';
    p.style.textAlign = 'center';
    div.style.width = '150px';
    div.style.height = '150px';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.backgroundImage =
      "linear-gradient(rgba(0, 49, 98, 0.5), rgba(0, 49, 98, 0.5)), url('./images/map_image.jpg')";
    div.style.backgroundSize = 'cover';
    div.style.borderRadius = '3px';
    div.appendChild(p);
    countriesData.appendChild(div);
  });
};
let startClicked;
let containClicked;
let sortClicked;
startBtn.addEventListener('click', () => {
  startClicked = true;
  containClicked = false;
  sortClicked = false;

  containsBtn.style.backgroundColor = '#895be6';
  sortBtn.style.backgroundColor = '#895be6';
  startBtn.style.backgroundColor = '#581CB8';
});

containsBtn.addEventListener('click', () => {
  containClicked = true;
  startClicked = false;
  sortClicked = false;
  startBtn.style.backgroundColor = '#895be6';
  sortBtn.style.backgroundColor = '#895be6';
  containsBtn.style.backgroundColor = '#581CB8';
});
sortBtn.addEventListener('click', () => {
  containClicked = false;
  startClicked = false;
  sortClicked = true;
  sort();
  if (sortIcon.classList.contains('fa-arrow-down-a-z')) {
    sortIcon.classList.add('fa-arrow-up-a-z');
    sortIcon.classList.remove('fa-arrow-down-a-z');
  } else if (sortIcon.classList.contains('fa-arrow-up-a-z')) {
    sortIcon.classList.add('fa-arrow-down-a-z');
    sortIcon.classList.remove('fa-arrow-up-a-z');
  }
  startBtn.style.backgroundColor = '#895be6';
  containsBtn.style.backgroundColor = '#895be6';
  sortBtn.style.backgroundColor = '#581CB8';
});

let inputValue = '';
input.addEventListener('keyup', (e) => {
  if (startClicked) {
    inputValue = e.target.value.toLowerCase();
    startsWith(inputValue);
  }
  if (containClicked) {
    inputValue = e.target.value.toLowerCase();
    contains(inputValue);
  }
});

// END OF THE EXERCISES
