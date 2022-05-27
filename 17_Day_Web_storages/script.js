// EXERCISES

// Level 1
// 1
localStorage.setItem('firstName', 'Batuhan');
localStorage.setItem('lastName', 'Kendirli');
localStorage.setItem('age', '22');
localStorage.setItem('country', 'Turkey');
localStorage.setItem('city', 'Istanbul');

// Level 2
// 1
localStorage.clear();
const student = {
  firstName: 'Batuhan',
  lastName: 'Kendirli',
  age: 22,
  skills: ['HTML', 'CSS', 'SASS', 'JavaScript'],
  country: 'Turkey',
  city: 'Istanbul',
};
const studentJSON = JSON.stringify(student, undefined, 3);
localStorage.setItem('student', studentJSON);

// Level 3
// 1
const personAccount = {
  firstName: 'Batuhan',
  lastName: 'Kendirli',
  incomes: [1200, 399, 120, 400, 650, 750, 1000],
  expenses: [800, 100, 250, 300, 500],
  totalIncome() {
    return this.incomes.reduce((acc, curr) => acc + curr, 0);
  },
  totalExpense() {
    return this.expenses.reduce((acc, curr) => acc + curr, 0);
  },
  accountInfo() {
    return `Full name: ${this.firstName} ${
      this.lastName
    }\nTotal income: $${this.totalIncome()}\nTotal expense: $${this.totalExpense()}\nAccount balance: $${this.accountBalance()}`;
  },
  addIncome(income) {
    this.incomes.push(income);
  },
  addExpense(expense) {
    this.expenses.push(expense);
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};
console.log(personAccount.accountInfo());
localStorage.clear();

const personalAccountJSON = JSON.stringify(personAccount, undefined, 3);
localStorage.setItem('account', personalAccountJSON);

// END OF THE EXERCISES
