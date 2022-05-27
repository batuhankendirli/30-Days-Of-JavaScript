// EXERCISES

// Level 1
// 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get animalInfo() {
    return `Name: ${this.name}\nAge: ${this.age}\nColor: ${this.color}\nLegs: ${this.legs}`;
  }
}

// 2
class Dog extends Animal {
  woof() {
    return 'Woof woof';
  }
}

class Cat extends Animal {
  meow() {
    return 'Meow';
  }
}

// Level 2
// 1
class overridedAnimal extends Animal {
  constructor(name, age, color, legs, canFly) {
    super(name, age, color, legs);
    this.canFly = canFly;
  }
  get animalInfo() {
    return `Name: ${this.name}\nAge: ${this.age}\nColor: ${this.color}\nLegs: ${
      this.legs
    }\nCan it fly: ${this.canFly ? 'yes' : 'no'}`;
  }
}

const birb = new overridedAnimal('Birbie', 1, 'yellow', 2, true);
console.log(birb.animalInfo);

// Level 3
// 1
class Statistics {
  constructor(array) {
    this.array = array;
  }
  count() {
    return this.array.length;
  }
  sum() {
    return this.array.reduce((acc, curr) => acc + curr, 0);
  }
  min() {
    return Math.min(...this.array);
  }
  max() {
    return Math.max(...this.array);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return Math.round(this.sum() / this.count());
  }
  median() {
    return this.array.sort((a, b) => a - b)[Math.floor(this.array.length / 2)];
  }
  mode() {
    const uniqueArr = this.array.filter(
      (number, index, self) => self.indexOf(number) == index
    );
    const finalArr = [];
    for (let i = 0; i < uniqueArr.length; i++) {
      let obj = {};
      let count = 0;
      for (let j = 0; j < this.array.length; j++) {
        if (uniqueArr[i] == this.array[j]) {
          count++;
        }
      }
      obj.mode = uniqueArr[i];
      obj.count = count;
      finalArr.push(obj);
    }
    const sortedArr = finalArr.sort((a, b) => b.count - a.count);
    return sortedArr[0];
  }
  var() {
    const mean = this.mean();
    let total = 0;
    for (let i = 0; i < this.array.length; i++) {
      total += (this.array[i] - mean) ** 2;
    }
    return total / this.count();
  }
  std() {
    return Math.sqrt(this.var()).toFixed(1);
  }
  freqDist() {
    const uniqueArr = this.array.filter(
      (number, index, self) => self.indexOf(number) == index
    );
    const finalArr = [];
    for (let i = uniqueArr.length - 1; i >= 0; i--) {
      let obj = {};
      let count = 0;
      for (let j = this.array.length - 1; j >= 0; j--) {
        if (uniqueArr[i] == this.array[j]) {
          count++;
        }
      }
      obj.mode = uniqueArr[i];
      obj.count = count;
      finalArr.push(obj);
    }
    const sortedArr = finalArr.sort((a, b) => b.count - a.count);
    const freqArr = [];
    for (let i = 0; i < sortedArr.length; i++) {
      const percentage = ((100 * sortedArr[i].count) / this.count()).toFixed(1);
      freqArr.push(`(${percentage}, ${sortedArr[i].mode})`);
    }
    return freqArr;
  }
  describe() {
    return `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax:${this.max()}\nRange: ${this.range()}\nMean: ${this.mean()}\nMedian: ${this.median()}\nMode: (${
      this.mode().mode
    }, ${
      this.mode().count
    })\nVariance: ${this.var()}\nStandard Deviation: ${this.std()}\nFrequency Distribution: ${this.freqDist()}`;
  }
}
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = new Statistics(ages);
console.log('Count:', statistics.count());
console.log('Sum:', statistics.sum());
console.log('Min:', statistics.min());
console.log('Max:', statistics.max());
console.log('Range:', statistics.range());
console.log('Mean:', statistics.mean());
console.log('Median:', statistics.median());
console.log('Mode:', statistics.mode());
console.log('Variance:', statistics.var());
console.log('Standard Deviation:', statistics.std());
console.log('Variance:', statistics.var());
console.log('Frequency Distribution:', statistics.freqDist());
console.log(statistics.describe());

// 2
class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  totalIncome() {
    let total = 0;
    this.incomes.forEach((income) => {
      total += income;
    });
    return total;
  }
  totalExpense() {
    let total = 0;
    this.expenses.forEach((expense) => {
      total += expense;
    });
    return total;
  }
  accountInfo() {
    return `Full name: ${this.firstName} ${
      this.lastName
    }\nTotal income: ${this.totalIncome()}\nTotal expense: ${this.totalExpense()}\nAccount balance: ${this.accountBalance()}`;
  }
  set addIncome(income) {
    this.incomes.add(income);
  }
  set addExpense(expense) {
    this.expenses.add(expense);
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}
/* I don't get the description part */
const setOfIncomes = new Set([200, 155, 325, 874, 220, 1000, 300]);
const setOfExpenses = new Set([500, 10, 35, 254, 663, 10]);
const newUser = new PersonAccount(
  'Batuhan',
  'Kendirli',
  setOfIncomes,
  setOfExpenses
);
newUser.addIncome = 1200;
newUser.addExpense = 600;
console.log(newUser.accountInfo());

// END OF THE EXERCISES
