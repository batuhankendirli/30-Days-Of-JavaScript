// EXERCISES

// Level 1
// 1
import { countries } from './countries_data_old.js';

document.body.style.fontFamily = 'Montserrat';
document.body.style.color = '#333';
document.body.style.backgroundColor = '#f0f0f0';

const graphTitle = document.querySelector('.graph-title');
const graphs = document.querySelector('.graphs');
const graphWrapper = document.querySelector('.graph-wrapper');
const header = document.querySelector('header');
header.style.backgroundColor = '#f0f0f0';
header.style.display = 'flex';
header.style.flexDirection = 'column';
header.style.padding = '25px';
header.style.gap = '2px';
header.style.textAlign = 'center';
header.style.color = '#555';

const h4 = document.querySelectorAll('h4')[1];
const h2 = document.querySelector('h2');
h2.style.color = '#ffa500';
h2.style.fontSize = '46px';
h2.style.fontWeight = '500';
h2.style.letterSpacing = '2px';

const wrapper = document.querySelector('.wrapper');

wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.gap = '5px';

const buttons = document.querySelectorAll('button');
// buttons[0].style.marginRight = '2px';
buttons[1].style.marginLeft = '10px';
buttons.forEach((button) => {
  button.textContent = button.textContent.toUpperCase();
  button.style.border = 'none';
  button.style.fontFamily = 'inherit';
  button.style.backgroundColor = '#ffa500';
  button.style.color = 'inherit';
  button.style.fontSize = '14px';
  button.style.fontWeight = '600';
  button.style.padding = '10px 25px';
  button.style.borderRadius = '3px';
  button.style.transition = 'all .3s';
  button.onmouseenter = () => {
    button.style.backgroundColor = '#e69500';
    button.style.cursor = 'pointer';
  };
  button.onmouseleave = () => {
    button.style.backgroundColor = '#ffa500';
  };
});

const subtitle = document.querySelector('.subtitle');
subtitle.textContent = `Currently, we have ${countries.length} countries`;
subtitle.style.fontSize = '18px';
subtitle.style.fontWeight = '500';

const graphButtons = document.querySelector('.graph-buttons');
graphButtons.style.marginBottom = '30px';
graphButtons.style.width = '100vw';
graphButtons.style.textAlign = 'center';
graphButtons.style.padding = '30px';
graphButtons.style.boxShadow = '1px 1px 8px rgb(172, 172, 172)';
graphButtons.style.backgroundColor = 'white';

const feedback = document.querySelector('.feedback');
feedback.style.fontWeight = '500';
const populationArr = [];
for (let i = 0; i < countries.length; i++) {
  const obj = {};
  if (countries[i].name == 'United States of America') {
    obj.country = 'USA';
  } else if (countries[i].name == 'Russian Federation') {
    obj.country = 'Russia';
  } else {
    obj.country = countries[i].name;
  }
  obj.population = Number(countries[i].population);
  populationArr.push(obj);
}

const mostPopulatedCountries = populationArr
  .sort((a, b) => b.population - a.population)
  .slice(0, 10);

const totalPopulation = populationArr.reduce(
  (acc, curr) => acc + curr.population,
  0
);

const internationalNumberFormat = new Intl.NumberFormat('en-US');

const btnPopulation = document.querySelector('.population');
btnPopulation.addEventListener('click', () => {
  wrapper.innerHTML = '';
  feedback.textContent = '10 Most populated countries in the world';
  feedback.style.margin = '10px 0 -15px 0';
  graphButtons.appendChild(feedback);
  wrapper.appendChild(graphButtons);
  const graph = document.createElement('div');
  const populationBar = 100;
  graphs.style.width = '70%';

  graph.style.width = '1000px';
  graph.style.margin = '0 auto';
  graph.style.display = 'flex';
  graph.style.gap = '5%';
  graph.style.alignItems = 'center';

  graphTitle.style.width = '10%';
  graphTitle.style.fontWeight = '500';
  graphTitle.textContent = 'World';
  graphWrapper.style.width = `${populationBar}%`;
  graphWrapper.style.backgroundColor = '#ffa500';
  graphWrapper.style.height = '40px';
  graphWrapper.style.borderRadius = '3px';
  h4.style.width = '10%';
  h4.style.fontWeight = '500';
  h4.textContent = internationalNumberFormat.format(totalPopulation);
  graph.appendChild(graphTitle);
  graph.appendChild(graphs);
  graph.appendChild(h4);
  wrapper.appendChild(graph);

  mostPopulatedCountries.forEach((country) => {
    const graph = document.createElement('div');

    const populationBar = (country.population * 100) / totalPopulation;

    graph.style.width = '1000px';
    graph.style.margin = '0 auto';
    graph.style.display = 'flex';
    graph.style.gap = '5%';
    graph.style.alignItems = 'center';

    const graphTitle = document.createElement('h4');
    graphTitle.style.width = '10%';
    graphTitle.style.fontWeight = '500';
    graphTitle.textContent = country.country;
    const graphWrapper = document.createElement('div');
    graphWrapper.style.backgroundColor = '#ffa500';
    graphWrapper.style.height = '40px';
    graphWrapper.style.borderRadius = '3px';

    graphWrapper.style.width = `${populationBar}%`;
    const h4 = document.createElement('h4');
    h4.style.width = '10%';
    h4.style.fontWeight = '500';
    h4.textContent = internationalNumberFormat.format(country.population);
    const graphs = document.createElement('div');
    graphs.style.width = '70%';
    graphs.appendChild(graphWrapper);
    graph.appendChild(graphTitle);
    graph.appendChild(graphs);
    graph.appendChild(h4);
    wrapper.appendChild(graph);
  });
});

const uniqueLangs = [];
for (let i = 0; i < countries.length; i++) {
  for (let j = 0; j < countries[i].languages.length; j++) {
    if (!uniqueLangs.includes(countries[i].languages[j])) {
      uniqueLangs.push(countries[i].languages[j]);
    }
  }
}

const langCounts = [];
for (let i = 0; i < uniqueLangs.length; i++) {
  const obj = {};
  let counter = 0;
  for (let j = 0; j < countries.length; j++) {
    for (let k = 0; k < countries[j].languages.length; k++) {
      if (uniqueLangs[i] == countries[j].languages[k]) {
        counter++;
      }
    }
  }
  obj.language = uniqueLangs[i];
  obj.count = counter;
  langCounts.push(obj);
}

const mostSpokenLangs = langCounts
  .sort((a, b) => b.count - a.count)
  .slice(0, 10);

const btnLang = document.querySelector('.languages');
btnLang.addEventListener('click', () => {
  wrapper.innerHTML = '';
  feedback.textContent = '10 Most Spoken languages in the world';
  feedback.style.margin = '10px 0 -15px 0';
  graphButtons.appendChild(feedback);
  wrapper.appendChild(graphButtons);

  mostSpokenLangs.forEach((language) => {
    const graph = document.createElement('div');

    const populationBar = (language.count * 100) / langCounts.length;

    graph.style.width = '1000px';
    graph.style.margin = '0 auto';
    graph.style.display = 'flex';
    graph.style.gap = '5%';
    graph.style.alignItems = 'center';

    const graphTitle = document.createElement('h4');
    graphTitle.style.width = '10%';
    graphTitle.style.fontWeight = '500';
    graphTitle.textContent = language.language;
    const graphWrapper = document.createElement('div');
    graphWrapper.style.backgroundColor = '#ffa500';
    graphWrapper.style.height = '40px';
    graphWrapper.style.borderRadius = '3px';

    graphWrapper.style.width = `${populationBar}%`;
    const h4 = document.createElement('h4');
    h4.style.width = '10%';
    h4.style.fontWeight = '500';
    h4.textContent = language.count;
    const graphs = document.createElement('div');
    graphs.style.width = '70%';
    graphs.appendChild(graphWrapper);
    graph.appendChild(graphTitle);
    graph.appendChild(graphs);
    graph.appendChild(h4);
    wrapper.appendChild(graph);
  });
});

// END OF THE EXERCISES
