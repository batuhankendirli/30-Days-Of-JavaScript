// EXERCISES

// Level 1
// 1
/* body style */
document.body.style.fontFamily = 'Montserrat';
document.body.style.backgroundImage = "url('./images/galaxy.gif')";
document.body.style.backgroundRepeat = 'repeat';

/* header style */
const header = document.querySelector('header');
header.style.width = '1200px';
header.style.margin = '30px auto';
header.style.textAlign = 'center';

/* h1 style */
const h1 = document.querySelector('h1');
h1.style.fontSize = '44px';
h1.style.marginBottom = '50px';
h1.style.textShadow = '2px 2px 2px #6c6c6d';
h1.style.letterSpacing = '1px';
h1.style.fontWeight = '600';
h1.style.color = '#f0eaea';

/* button style */
const button = document.querySelector('button');
button.style.border = 'none';
button.style.fontSize = '16px';
button.style.backgroundColor = '#6c6c6d';
button.style.padding = '12px 10px';
button.style.color = 'white';
button.style.borderRadius = '5px';
button.style.marginLeft = '10px';
button.style.transition = 'all .3s';

button.onmouseenter = () => {
  button.style.backgroundColor = '#585858';
  button.style.cursor = 'pointer';
};
button.onmouseleave = () => {
  button.style.backgroundColor = '#6c6c6d';
};

/* select style */
const select = document.querySelector('select');
select.style.padding = '12.5px';
select.style.border = 'none';
select.style.borderRadius = '5px';

/* input style */
const input = document.querySelector('input');
input.style.padding = '11.5px';
input.style.border = 'none';
input.style.width = '250px';
input.style.fontFamily = 'Montserrat';
input.style.fontSize = '16px';
input.style.fontWeight = '600';
input.style.marginRight = '5px';

/* flex-container style */
const flexContainer = document.querySelector('.flex-container');
flexContainer.style.display = 'flex';
flexContainer.style.margin = '20px auto';
flexContainer.style.alignItems = 'center';
flexContainer.style.justifyContent = 'center';
flexContainer.style.gap = '40px';
flexContainer.style.padding = '30px';
flexContainer.style.width = '1100px';
flexContainer.style.backgroundColor = 'rgba(125, 125, 125, 0.2)';

/* planet-image style */
const planetImage = document.querySelector('.planet-image');
planetImage.style.width = '400px';

const description = document.querySelector('.description');

const earthOption = document.createElement('option');
earthOption.textContent = 'EARTH';
earthOption.value = 'earth';
select.appendChild(earthOption);

const jupiterOption = document.createElement('option');
jupiterOption.textContent = 'JUPITER';
jupiterOption.value = 'jupiter';
select.appendChild(jupiterOption);

const marsOption = document.createElement('option');
marsOption.textContent = 'MARS';
marsOption.value = 'mars';
select.appendChild(marsOption);

const mercuryOption = document.createElement('option');
mercuryOption.textContent = 'MERCURY';
mercuryOption.value = 'mercury';
select.appendChild(mercuryOption);

const moonOption = document.createElement('option');
moonOption.textContent = 'MOON';
moonOption.value = 'moon';
select.appendChild(moonOption);

const neptuneOption = document.createElement('option');
neptuneOption.textContent = 'NEPTUNE';
neptuneOption.value = 'neptune';
select.appendChild(neptuneOption);

const plutoOption = document.createElement('option');
plutoOption.textContent = 'PLUTO';
plutoOption.value = 'pluto';
select.appendChild(plutoOption);

const saturnOption = document.createElement('option');
saturnOption.textContent = 'SATURN';
saturnOption.value = 'saturn';
select.appendChild(saturnOption);

const uranusOption = document.createElement('option');
uranusOption.textContent = 'URANUS';
uranusOption.value = 'uranus';
select.appendChild(uranusOption);

const venusOption = document.createElement('option');
venusOption.textContent = 'VENUS';
venusOption.value = 'venus';
select.appendChild(venusOption);

button.addEventListener('click', () => {
  planetImage.src = '';
  description.innerHTML = '';
  const selectedValue = select.value;
  const inputValue = input.value;
  const p = document.createElement('p');
  const mass = document.createElement('span');
  const planet = document.createElement('span');
  const calc = Number(inputValue) * 9.8;

  planet.textContent = selectedValue.toUpperCase();
  planet.style.fontWeight = '700';
  mass.style.fontSize = '20px';
  mass.style.display = 'flex';
  mass.style.alignItems = 'center';
  mass.style.justifyContent = 'center';
  mass.style.fontWeight = '700';
  mass.style.color = 'white';
  mass.style.height = '128px';
  mass.style.width = '128px';
  mass.style.backgroundColor = 'rgba(125, 125, 125, 0.4)';
  mass.style.borderRadius = '50%';

  p.style.color = 'white';
  p.style.fontSize = '20px';
  p.textContent = 'The weight of the object on ';

  description.style.textAlign = 'center';
  description.style.display = 'flex';
  description.style.flexDirection = 'column';
  description.style.alignItems = 'center';
  description.style.gap = '20px';
  description.style.padding = '20px';
  description.style.width = '550px';
  description.style.justifyContent = 'center';
  description.style.backgroundColor = 'rgba(125, 125, 125, 0.2)';

  if (inputValue.length != 0) {
    if ((inputValue - 1 || inputValue - 1 == 0) && !inputValue.includes(' ')) {
      if (selectedValue == 'none') {
        p.textContent = 'You did not choose a planet yet';
        description.appendChild(p);
      } else if (selectedValue == 'earth') {
        planetImage.src = './images/earth.png';
        mass.textContent = `${(Math.round(calc / 10) * 10).toFixed(2)} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      } else if (selectedValue == 'jupiter') {
        planetImage.src = './images/jupiter.png';
        mass.textContent = `${(Math.round((calc * 2.36) / 10) * 10).toFixed(
          2
        )} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      } else if (selectedValue == 'mars') {
        planetImage.src = './images/mars.png';
        mass.textContent = `${(Math.round((calc * 0.38) / 10) * 10).toFixed(
          2
        )} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      } else if (selectedValue == 'mercury') {
        planetImage.src = './images/mercury.png';
        mass.textContent = `${(Math.round((calc * 0.38) / 10) * 10).toFixed(
          2
        )} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      } else if (selectedValue == 'moon') {
        planetImage.src = './images/moon.png';
        mass.textContent = `${(Math.round((calc * 0.166) / 10) * 10).toFixed(
          2
        )} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      } else if (selectedValue == 'neptune') {
        planetImage.src = './images/neptune.png';
        mass.textContent = `${(Math.round((calc * 1.12) / 10) * 10).toFixed(
          2
        )} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      } else if (selectedValue == 'pluto') {
        planetImage.src = './images/pluto.png';
        mass.textContent = `${(Math.round((calc * 0.07) / 10) * 10).toFixed(
          2
        )} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      } else if (selectedValue == 'saturn') {
        planetImage.src = './images/saturn.png';
        mass.textContent = `${(Math.round((calc * 0.92) / 10) * 10).toFixed(
          2
        )} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      } else if (selectedValue == 'uranus') {
        planetImage.src = './images/uranus.png';
        mass.textContent = `${(Math.round((calc * 0.89) / 10) * 10).toFixed(
          2
        )} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      } else if (selectedValue == 'venus') {
        planetImage.src = './images/venus.png';
        mass.textContent = `${(Math.round((calc * 0.91) / 10) * 10).toFixed(
          2
        )} N`;
        p.appendChild(planet);
        description.appendChild(p);
        description.appendChild(mass);
      }
    } else {
      p.textContent = 'Input value must be a number';
      description.appendChild(p);
    }
  } else {
    p.textContent = 'Mass is required';
    description.style.width = '550px';
    description.appendChild(p);
  }
});

// END OF THE EXERCISES
