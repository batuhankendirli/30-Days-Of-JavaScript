// EXERCISES

// Level 1
// 1
/* Exercise description: Create the following animation using (HTML, CSS, JS), 
so I am going to apply most of the styling with css.  */
import { countries } from './countries_data.js';
const internationalNumberFormat = new Intl.NumberFormat('en-US');
const countriesDisplay = document.querySelector('.countries-display');
const totalCountries = document.querySelector('.total-countries');
const searchInput = document.querySelector('.search-input');
const countriesGraph = document.querySelector('.countries-graph');
const languagesGraph = document.querySelector('.languages-graph');
languagesGraph.style.display = 'none';

const nameArrow = document.querySelector('.name-arrow');
const nameArrowIcon = document.createElement('i');

const feedback = document.querySelector('.feedback');
const graphDescription = document.querySelector('.graph-description');
const filteredNum = document.querySelector('.number');

nameArrowIcon.classList.add('fa-solid');
nameArrow.appendChild(nameArrowIcon);

const capitalArrow = document.querySelector('.capital-arrow');
const capitalArrowIcon = document.createElement('i');
capitalArrowIcon.classList.add('fa-solid');
capitalArrow.appendChild(capitalArrowIcon);

const populationBtn = document.querySelector('.population');
populationBtn.addEventListener('click', () => {
  if (filteredCountries.length < 200) {
    graphDescription.textContent = 'World Population';
  } else {
    graphDescription.textContent = '10 Most populated countries in the world';
  }
  countriesGraph.style.display = 'flex';
  languagesGraph.style.display = 'none';
  countriesGraph.innerHTML = '';
  languagesGraph.innerHTML = '';
  displayGraph(filteredCountries);
});

const languagesBtn = document.querySelector('.languages');
languagesBtn.addEventListener('click', () => {
  if (allLangs(filteredCountries).length == allLangs(countries).length) {
    graphDescription.textContent = '10 Most Spoken languages in the world';
  } else {
    graphDescription.textContent = 'Languages';
  }
  countriesGraph.innerHTML = '';
  countriesGraph.style.display = 'none';
  languagesGraph.style.display = 'flex';

  languagesGraph.innerHTML = '';
  displayLangGraph(allLangs(filteredCountries));
});

const populationArrow = document.querySelector('.population-arrow');
const populationArrowIcon = document.createElement('i');
populationArrowIcon.classList.add('fa-solid');
populationArrow.appendChild(populationArrowIcon);

totalCountries.textContent = countries.length;
let filteredCountries = [];
countries.forEach((country) => {
  if (typeof country.capital == 'undefined') {
    country.capital = 'No capital';
  }
  filteredCountries.push(country);
});

displayCountries(filteredCountries);
displayGraph(filteredCountries, 10);

const btnName = document.querySelector('.btn-name');
let sortedForName = false;
let sortedForCapital = false;
let sortedForPopulation = false;
btnName.addEventListener('click', () => {
  nameArrow.style.display = 'block';
  capitalArrow.style.display = 'none';
  populationArrow.style.display = 'none';

  if (sortedForName) {
    nameArrowIcon.classList.add('fa-arrow-down-long');
    nameArrowIcon.classList.remove('fa-arrow-up-long');

    capitalArrow.style.display = 'none';
    populationArrow.style.display = 'none';
    displayCountries(reverseName(filteredCountries));
    sortedForName = false;
  } else {
    nameArrowIcon.classList.add('fa-arrow-up-long');
    nameArrowIcon.classList.remove('fa-arrow-down-long');
    sortedForName = true;
    displayCountries(sortForName(filteredCountries));
    sortedForCapital = false;
    sortedForPopulation = false;
  }
});

const btnCapital = document.querySelector('.btn-capital');
btnCapital.addEventListener('click', () => {
  nameArrow.style.display = 'none';
  capitalArrow.style.display = 'block';
  populationArrow.style.display = 'none';

  if (sortedForCapital) {
    capitalArrowIcon.classList.add('fa-arrow-up-long');
    capitalArrowIcon.classList.remove('fa-arrow-down-long');
    displayCountries(sortForCapital(filteredCountries));
    sortedForCapital = false;
  } else {
    capitalArrowIcon.classList.add('fa-arrow-down-long');
    capitalArrowIcon.classList.remove('fa-arrow-up-long');
    sortedForCapital = true;
    displayCountries(reverseCapital(filteredCountries));
    sortedForName = false;
    sortedForPopulation = false;
  }
});

const btnPopulation = document.querySelector('.btn-population');
btnPopulation.addEventListener('click', () => {
  nameArrow.style.display = 'none';
  capitalArrow.style.display = 'none';
  populationArrow.style.display = 'block';

  if (sortedForPopulation) {
    populationArrowIcon.classList.add('fa-arrow-down-long');
    populationArrowIcon.classList.remove('fa-arrow-up-long');
    displayCountries(reversePopulation(filteredCountries));
    sortedForPopulation = false;
  } else {
    populationArrowIcon.classList.add('fa-arrow-up-long');
    populationArrowIcon.classList.remove('fa-arrow-down-long');
    sortedForPopulation = true;
    displayCountries(sortForPopulation(filteredCountries));
    sortedForName = false;
    sortedForCapital = false;
  }
});

const sortForName = function (arr) {
  return arr.sort((a, b) => b.name.localeCompare(a.name));
};

const reverseName = function (arr) {
  return arr.sort((a, b) => a.name.localeCompare(b.name));
};

const sortForCapital = function (arr) {
  return arr.sort((a, b) => b.capital.localeCompare(a.capital));
};

const reverseCapital = function (arr) {
  return arr.sort((a, b) => a.capital.localeCompare(b.capital));
};

const sortForPopulation = function (arr) {
  return arr.sort((a, b) => b.population - a.population);
};

const reversePopulation = function (arr) {
  return arr.sort((a, b) => a.population - b.population);
};

searchInput.addEventListener('keyup', (e) => {
  sortedForPopulation = false;
  sortedForName = false;
  sortedForCapital = false;

  nameArrow.style.display = 'none';
  capitalArrow.style.display = 'none';
  populationArrow.style.display = 'none';

  let searchQuery = e.target.value.toLowerCase();
  filteredCountries = countries.filter((country) => {
    if (country.capital == undefined) {
      if (country.name.toLowerCase().includes(searchQuery)) {
        return country;
      }
    } else {
      if (
        country.capital.toLowerCase().includes(searchQuery) ||
        country.name.toLowerCase().includes(searchQuery)
      ) {
        return country;
      }
    }
    for (let i = 0; i < country.languages.length; i++) {
      if (country.languages[i].toLowerCase().includes(searchQuery)) {
        return country;
      }
    }
  });

  if (filteredCountries.length < 200) {
    graphDescription.textContent = 'World Population';
  } else {
    graphDescription.textContent = '10 Most populated countries in the world';
  }

  if (searchQuery.length != 0) {
    feedback.style.display = 'block';
    filteredNum.textContent = `${filteredCountries.length} ${
      filteredCountries.length > 1 ? 'countries' : 'country'
    }`;
  } else {
    feedback.style.display = 'none';
  }
  countriesGraph.style.display = 'flex';
  languagesGraph.style.display = 'none';
  displayCountries(filteredCountries);
  displayGraph(filteredCountries);
});

function displayCountries(array) {
  countriesDisplay.innerHTML = '';
  array.forEach((country) => {
    const countryCard = document.createElement('div');
    countryCard.classList.add('country-card');

    const countryFlag = document.createElement('img');
    const countryName = document.createElement('h4');
    const countryInfo = document.createElement('div');
    const countryCapital = document.createElement('p');
    const countryLanguage = document.createElement('p');
    const countryPopulation = document.createElement('p');

    countryFlag.src = country.flag;
    countryFlag.classList.add('flag');

    countryName.textContent = country.name;
    countryName.classList.add('country-name');

    countryCapital.textContent = `Capital: ${country.capital}`;
    countryLanguage.textContent = `Language${
      country.languages.length > 1 ? 's' : ''
    }: ${country.languages.join(', ')}`;
    countryPopulation.textContent = `Population: ${internationalNumberFormat.format(
      country.population
    )}`;

    countryInfo.classList.add('country-info');

    countryInfo.appendChild(countryCapital);
    countryInfo.appendChild(countryLanguage);
    countryInfo.appendChild(countryPopulation);

    countryCard.appendChild(countryFlag);
    countryCard.appendChild(countryName);
    countryCard.appendChild(countryInfo);
    countriesDisplay.appendChild(countryCard);
  });
}

function displayGraph(array, sliceIndex) {
  languagesGraph.innerHTML = '';
  countriesGraph.innerHTML = '';

  const totalPopulation = countries.reduce(
    (acc, curr) => acc + curr.population,
    0
  );
  const arr = {
    name: 'World',
    population: totalPopulation,
  };
  if (array.length > 30) {
    sliceIndex = 10;
  }
  addWorld(arr, totalPopulation);
  array
    .sort((a, b) => b.population - a.population)
    .slice(0, sliceIndex)
    .forEach((item) => {
      const country = document.createElement('div');
      country.classList.add('country');

      const graphName = document.createElement('p');
      graphName.classList.add('graph-name');
      graphName.textContent = item.name;

      const graphPercentage = document.createElement('span');
      graphPercentage.classList.add('graph-percentage');

      const graphColor = document.createElement('span');
      graphColor.classList.add('color');
      graphColor.style.width = `${(item.population * 100) / totalPopulation}%`;

      const graphPopulation = document.createElement('p');
      graphPopulation.classList.add('graph-population');
      graphPopulation.textContent = internationalNumberFormat.format(
        item.population
      );

      graphPercentage.appendChild(graphColor);
      country.appendChild(graphName);
      country.appendChild(graphPercentage);
      country.appendChild(graphPopulation);
      countriesGraph.appendChild(country);
    });
}

function addWorld(item, totalPopulation) {
  const country = document.createElement('div');
  country.classList.add('country');

  const graphName = document.createElement('p');
  graphName.classList.add('graph-name');
  graphName.textContent = item.name;

  const graphPercentage = document.createElement('span');
  graphPercentage.classList.add('graph-percentage');

  const graphColor = document.createElement('span');
  graphColor.classList.add('color');
  graphColor.style.width = `${(item.population * 100) / totalPopulation}%`;

  const graphPopulation = document.createElement('p');
  graphPopulation.classList.add('graph-population');
  graphPopulation.textContent = internationalNumberFormat.format(
    item.population
  );

  graphPercentage.appendChild(graphColor);
  country.appendChild(graphName);
  country.appendChild(graphPercentage);
  country.appendChild(graphPopulation);
  countriesGraph.appendChild(country);
}

function allLangs(array) {
  const totalLangs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].languages.length; j++) {
      if (!totalLangs.includes(array[i].languages[j])) {
        totalLangs.push(array[i].languages[j]);
      }
    }
  }

  const finalArr = [];
  for (let i = 0; i < totalLangs.length; i++) {
    let obj = {};
    let count = 0;
    obj.language = totalLangs[i];
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array[j].languages.length; k++) {
        if (totalLangs[i] == array[j].languages[k]) {
          count++;
        }
      }
    }
    obj.count = count;
    finalArr.push(obj);
  }
  return finalArr;
}

function displayLangGraph(array, sliceIndex = 10) {
  countriesGraph.innerHTML = '';
  languagesGraph.innerHTML = '';
  const totalLanguages = allLangs(countries).length;

  array
    .sort((a, b) => b.count - a.count)
    .slice(0, sliceIndex)
    .forEach((item) => {
      const language = document.createElement('div');
      language.classList.add('country');

      const graphName = document.createElement('p');
      graphName.classList.add('graph-name');
      graphName.textContent = item.language;

      const graphPercentage = document.createElement('span');
      graphPercentage.classList.add('graph-percentage');

      const graphColor = document.createElement('span');
      graphColor.classList.add('color');
      graphColor.style.width = `${(item.count * 100) / totalLanguages}%`;

      const graphPopulation = document.createElement('p');
      graphPopulation.classList.add('graph-population');
      graphPopulation.textContent = internationalNumberFormat.format(
        Number(item.count)
      );

      graphPercentage.appendChild(graphColor);
      language.appendChild(graphName);
      language.appendChild(graphPercentage);
      language.appendChild(graphPopulation);
      languagesGraph.appendChild(language);
    });
}

const goTop = document.querySelector('.go-top');
goTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

const graphButtonsWrapper = document.querySelector('.graph-buttons-wrapper');

const btnChart = document.querySelector('.btn-chart');
btnChart.addEventListener('click', () => {
  graphButtonsWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// END OF THE EXERCISES
