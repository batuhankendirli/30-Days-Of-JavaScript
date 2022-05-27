// EXERCISES

// Level 1
// 1
const exampleFunc = function () {
  let name = 'Batuhan';
  function nameChange() {
    name = 'Batu';
    return name;
  }
  return {
    nameChange: nameChange(),
  };
};
const x = exampleFunc();
console.log(x.nameChange);

// Level 2
// 1
const anotherFunc = function () {
  let age = 22;
  function plusOne() {
    age++;
    return age;
  }
  function minusOne() {
    age--;
    return age;
  }
  function makeItZero() {
    age = 0;
    return age;
  }
  return { minusOne: minusOne(), plusOne: plusOne(), makeItZero: makeItZero() };
};
const y = anotherFunc();
console.log(y.plusOne);
console.log(y.minusOne);
console.log(y.makeItZero);

// Level 3
// 1
const personAccount = function () {
  const firstName = 'Batuhan';
  const lastName = 'Kendirli';
  const incomes = [500, 275, 1210, 750, 450, 500];
  const expenses = [500, 200, 210, 350];
  function totalIncome() {
    return incomes.reduce((acc, curr) => acc + curr, 0);
  }
  function totalExpense() {
    return expenses.reduce((acc, curr) => acc + curr, 0);
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }
  return {
    addIncome(income) {
      return incomes.push(income);
    },
    addExpense(expense) {
      return expenses.push(expense);
    },
    accountInfo() {
      return `Full name: ${firstName} ${lastName}\nTotal income: $${totalIncome()}\nTotal expense: $${totalExpense()}\nAccount balance: $${accountBalance()}`;
    },
  };
};

const newUser = personAccount();
newUser.addExpense(1000);
newUser.addExpense(200);
newUser.addExpense(500);
newUser.addIncome(3000);
console.log(newUser.accountInfo());

// END OF THE EXERCISES
