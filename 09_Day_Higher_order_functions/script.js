// EXERCISES

// Level 1
// 1
/*
forEach(): Iterate an array elements.
map(): Iterate an array elements and modify the array elements. 
filter(): Filters out items which full fill filtering conditions and returns a new array.
reduce(): Callback function takes accumulator, current, and optional initial value as a parameter and returns a single value.
*/

// 2
/* The function passed as a parameter in a higher order function. */

// 3
import { countriesArr, namesArr, numbersArr, productsArr } from './arrays.js';

countriesArr.forEach((country) => {
  console.log(country);
});

// 4
namesArr.forEach((name) => {
  console.log(name);
});

// 5
numbersArr.forEach((numbers) => {
  console.log(numbers);
});

// 6
const countriesUpperCase = countriesArr.map((country) => {
  return country.toUpperCase();
});
console.log(countriesUpperCase);

// 7
const countriesLength = countriesArr.map((country) => {
  return country.length;
});
console.log(countriesLength);

// 8
const numsSquare = numbersArr.map((num) => num * num);
console.log(numsSquare);

// 9
const namesUpperCase = namesArr.map((name) => name.toUpperCase());
console.log(namesUpperCase);

// 10
const productPrices = productsArr.map((product, index, arr) => {
  if (!(typeof product.price == 'number')) {
    return 0;
  } else {
    return product.price;
  }
});
console.log(productPrices);

// 11
const countriesContainingLand = countriesArr.filter((country) =>
  country.toLowerCase().includes('land')
);
console.log(countriesContainingLand);

// 12
const countriesSixCharacters = countriesArr.filter(
  (country) => country.length == 6
);
console.log(countriesSixCharacters);

// 13
const countriesSixOrMore = countriesArr.filter(
  (country) => country.length >= 6
);
console.log(countriesSixOrMore);

// 14
const countriesStartsWithE = countriesArr.filter((country) =>
  country.startsWith('E')
);
console.log(countriesStartsWithE);

// 15
const pricesWithValues = productsArr.filter(
  (product) => typeof product.price == 'number'
);
console.log(pricesWithValues);

// 16
const getStringList = function (arr) {
  const onlyStrings = arr.filter((item) => {
    return typeof item == 'string';
  });
  return onlyStrings;
};
console.log(
  getStringList(['Hey', 'I', 'am', 'Batuhan', 'I', 'am', 22, 'years', 'old'])
);

// 17
const sumOfNums = numbersArr.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(sumOfNums);

// 18
const sentence = countriesArr.reduce((accumulator, current) => {
  if (current == 'IceLand') {
    return accumulator + `, and ` + current + ' are north European countries.';
  } else {
    return accumulator + ', ' + current;
  }
});
console.log(sentence);

// 19
/*
some(): Checks if some of the elements are similar in one aspect.
every(): Checks if all the elements are similar in one aspect.
*/

// 20
const isSomeNamesGreaterThanSeven = namesArr.some((name) => name.length > 7);
console.log(isSomeNamesGreaterThanSeven);

// 21
const areAllCountriesContainLand = countriesArr.every((country) =>
  country.includes('land')
);
console.log(areAllCountriesContainLand);

// 22
/*
find(): Returns the first element which satisfies the condition.
findIndex(): Returns the position of the first element which satisfies condition.
*/

// 23
const firstCountrySixLetters = countriesArr.find(
  (country) => country.length == 6
);
console.log(firstCountrySixLetters);

// 24
const firstCountrySixLettersIndex = countriesArr.findIndex(
  (country) => country.length == 6
);
console.log(firstCountrySixLettersIndex);

// 25
const findNorway = countriesArr.findIndex((country) =>
  country.toLowerCase().includes('norway')
);
console.log(findNorway);

// 26
const findRussia = countriesArr.findIndex((country) =>
  country.toLowerCase().includes('russia')
);
console.log(findRussia);

// Level 2
// 1
const totalPriceOfProducts = productsArr
  .filter((product) => typeof product.price == 'number')
  .reduce((accumulator, current) => {
    return accumulator + current.price;
  }, 0);
console.log(totalPriceOfProducts);

// 2
const totalPriceWithReduce = productsArr.reduce((accumulator, current) => {
  if (!(typeof current.price == 'number')) {
    return accumulator;
  } else {
    return accumulator + current.price;
  }
}, 0);
console.log(totalPriceWithReduce);

// 3
import { countries } from './countries.js';
const categorizeCountries = function (arr, pattern) {
  const categorized = arr.filter((item) =>
    item.name.toLowerCase().includes(pattern)
  );
  return categorized;
};
console.log(categorizeCountries(countries, 'stan'));

// 4
const countriesStartsWith = function (arr) {
  const alphabet = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(
    ' '
  );
  const objArr = [];
  for (let i = 0; i < alphabet.length; i++) {
    let obj = {};
    const startsWith = arr.filter((item) => {
      return item.name.toLowerCase().startsWith(alphabet[i]);
    });
    obj.letter = alphabet[i];
    obj.count = startsWith.length;
    objArr.push(obj);
  }
  return objArr;
};
console.log(countriesStartsWith(countries));

// 5
const getFirstTenCountries = function (arr) {
  const countries = arr
    .map((item, index) => {
      while (index < 10) {
        return item;
      }
    })
    .filter((item) => {
      return typeof item != 'undefined';
    });
  return countries;
};
console.log(getFirstTenCountries(countries));

// 6
const getLastTenCountries = function (arr) {
  const countries = arr.filter((item, index) => {
    if (index >= arr.length - 10) {
      return item;
    }
  });
  return countries;
};
console.log(getLastTenCountries(countries));

// 7
/* I bet there is an easier way to solve this */
const letters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(
  ' '
);
const objectArr = [];
for (let i = 0; i < letters.length; i++) {
  const obj = {};
  const count = countries.filter((country) => {
    return country.name.toLowerCase().startsWith(letters[i]);
  });
  obj.letter = letters[i].toUpperCase();
  obj.count = count.length;
  objectArr.push(obj);
}
console.log(objectArr);
let maxCount = 0;
for (let i = 0; i < objectArr.length; i++) {
  if (objectArr[i].count > maxCount) {
    maxCount = objectArr[i].count;
  }
}
const maxLetterUsed = objectArr.find((obj) => {
  return obj.count == maxCount;
});
console.log(maxLetterUsed);

// Level 3
// 1
const sortBy = function (sortingMethod, arr) {
  if (sortingMethod == 'population') {
    const byPopulation = arr.sort((a, b) => {
      return b.population - a.population;
    });
    return byPopulation;
  } else if (sortingMethod == 'capital') {
    const byCapital = arr.sort((a, b) => {
      return a.capital.localeCompare(b.capital);
    });
    return byCapital;
  } else if (sortingMethod == 'country') {
    return arr.sort();
  }
};
console.log(sortBy('capital', countries));

// 2
const mostSpokenLanguages = function (arr, number) {
  const languageObjArr = [];
  const allLanguages = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].languages.length; j++) {
      if (!allLanguages.includes(arr[i].languages[j])) {
        allLanguages.push(arr[i].languages[j]);
      }
    }
  }
  for (let i = 0; i < allLanguages.length; i++) {
    const objArr = {};
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr[j].languages.length; k++) {
        if (allLanguages[i] == arr[j].languages[k]) {
          counter++;
        }
      }
    }
    objArr.language = allLanguages[i];
    objArr.count = counter;
    languageObjArr.push(objArr);
  }
  return languageObjArr.sort((a, b) => b.count - a.count).slice(0, number);
};
console.log(mostSpokenLanguages(countries, 7));

// 3
const mostPopulatedCountries = function (arr, number) {
  const sortedByPopulation = arr.sort((a, b) => {
    return b.population - a.population;
  });
  const finalArr = [];
  for (let i = 0; i < number; i++) {
    const obj = {};
    obj.country = sortedByPopulation[i].name;
    obj.population = sortedByPopulation[i].population;
    finalArr.push(obj);
  }
  return finalArr;
};
console.log(mostPopulatedCountries(countries, 8));

// 4
const statistics = {
  ages: [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
  ],
  count: function () {
    return this.ages.length;
  },
  sum: function () {
    return this.ages.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
  },
  min: function () {
    return Math.min(...this.ages);
  },
  max: function () {
    return Math.max(...this.ages);
  },
  range: function () {
    return this.max() - this.min();
  },
  mean: function () {
    return Math.round(this.sum() / this.count());
  },
  median: function () {
    return this.ages.sort((a, b) => {
      return a - b;
    })[Math.floor(this.ages.length / 2)];
  },
  mode: function () {
    let currentMode = 0;
    let temp = 0;
    for (let i = 0; i < this.ages.length; i++) {
      let count = 0;
      for (let j = 0; j < this.ages.length; j++) {
        if (this.ages[i] == this.ages[j]) {
          count++;
        }
      }
      if (count > temp) {
        temp = count;
        currentMode = this.ages[i];
      }
    }
    return `(${currentMode}, ${temp})`;
  },
  var: function () {
    const mean = this.mean();
    let total = 0;
    for (let i = 0; i < this.ages.length; i++) {
      total += (this.ages[i] - mean) ** 2;
    }
    return total / this.ages.length;
  },
  std: function () {
    return Math.fround(Math.sqrt(this.var())).toFixed(1);
  },
  freqDist: function () {
    const uniqueAges = [];
    for (let i = 0; i < this.ages.length; i++) {
      if (!uniqueAges.includes(this.ages[i])) {
        uniqueAges.push(this.ages[i]);
      }
    }
    const arr = [];

    for (let i = 0; i < uniqueAges.length; i++) {
      const obj = {};
      let counter = 0;
      for (let j = 0; j < this.ages.length; j++) {
        if (uniqueAges[i] == this.ages[j]) {
          counter++;
        }
      }
      obj.age = uniqueAges[i];
      obj.count = counter;
      arr.push(obj);
    }
    const lastArr = [];
    arr.sort((a, b) => {
      return b.count - a.count;
    });
    for (let i = 0; i < arr.length; i++) {
      let percentage = (arr[i].count * 100) / this.ages.length;
      lastArr.push(`(${percentage.toFixed(1)}, ${arr[i].age})`);
    }
    return lastArr;
  },
};

console.log(`Count: ${statistics.count()}`);
console.log(`Sum: ${statistics.sum()}`);
console.log(`Min: ${statistics.min()}`);
console.log(`Max: ${statistics.max()}`);
console.log(`Range: ${statistics.range()}`);
console.log(`Mean: ${statistics.mean()}`);
console.log(`Median: ${statistics.median()}`);
console.log(`Mode: ${statistics.mode()}`);
console.log(`Variance: ${statistics.var()}`);
console.log(`Standard Deviation: ${statistics.std()}`);
console.log(`Frequency Distribution: ${statistics.freqDist()}`);

// END OF THE EXERCISES
