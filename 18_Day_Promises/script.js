// EXERCISES

// Level 1
// 1
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name;
      const capital = data[i].capital;
      const population = data[i].population;
      const area = data[i].area;
      const langs = [];
      for (let j = 0; j < data[i].languages.length; j++) {
        langs.push(data[i].languages[j].name);
      }

      console.log(
        `Country: ${name}\nCapital: ${capital}\nPopulation: ${population}\nArea: ${area}\nLanguage(s): ${langs.join(
          ', '
        )}`
      );
    }
  })
  .catch((err) => console.log(err));

// Level 2
// 1
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cat) => {
      console.log(cat.name);
    });
  })
  .catch((err) => console.log(err));

// Level 3
// 1
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const pattern = /\d/g;
    const length = data.length;
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      const weights = data[i].weight.metric.match(pattern);
      arr.push(weights[0]);
      arr.push(weights[1]);
    }
    const average = arr.reduce((acc, curr) => acc + curr, 0) / length;
    console.log(average);
  });

// 2
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const sortedCountries = data
      .sort((a, b) => b.population - a.population)
      .slice(0, 10);
    console.log(sortedCountries);
  });

// 3
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const allLangs = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].languages.length; j++) {
        if (!allLangs.includes(data[i].languages[j].name)) {
          allLangs.push(data[i].languages[j].name);
        }
      }
    }
    console.log(`Total number of languages: ${allLangs.length}`);
    const arr = [];
    for (let i = 0; i < allLangs.length; i++) {
      let count = 0;
      let obj = {};
      for (let j = 0; j < data.length; j++) {
        for (let k = 0; k < data[j].languages.length; k++) {
          if (allLangs[i] == data[j].languages[k].name) {
            count++;
          }
        }
      }
      obj[allLangs[i]] = count;
      arr.push(obj);
    }
    console.log(arr);
  });

// END OF THE EXERCISES
