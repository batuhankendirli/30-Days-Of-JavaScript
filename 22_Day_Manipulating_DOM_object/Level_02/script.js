// EXERCISES

// Level 2
// 1
import { countries } from './countries.js';

document.body.style.fontFamily = 'Roboto';
document.body.style.textAlign = 'center';

const h2 = document.querySelector('h2');
h2.style.textTransform = 'uppercase';
h2.style.letterSpacing = '15px';
h2.style.fontSize = '48px';

const h3 = document.querySelectorAll('h3');
h3.forEach((el) => (el.style.fontWeight = '300'));

const header = document.querySelector('header');
header.style.marginBottom = '20px';
header.style.marginTop = '20px';

const countriesContainer = document.querySelector('.countries-container');
countriesContainer.style.width = '1100px';
countriesContainer.style.margin = '100px auto';

const totalCountries = document.getElementById('total-countries');
totalCountries.textContent = `Total Number of countries: ${countries.length}`;
totalCountries.style.fontSize = '22px';
totalCountries.style.fontWeight = '500';
const countriesWrapper = document.querySelector('.countries-wrapper');
countriesWrapper.style.display = 'grid';
countriesWrapper.style.gridTemplateColumns = 'repeat(6, 1fr)';
countriesWrapper.style.gap = '10px';

countries.forEach((country) => {
  const span = document.createElement('span');
  span.textContent = country.toUpperCase();
  span.style.display = 'flex';
  span.style.alignItems = 'center';
  span.style.justifyContent = 'center';
  span.style.padding = '30px 5px';
  span.style.border = '1px solid #F2F3F5';
  span.style.height = '160px';
  countriesWrapper.appendChild(span);
});

// END OF THE SECOND LEVEL
