// EXERCISES

// Level 1
// 1
const dog = {};

// 2
console.log(dog);

// 3
const dog2 = {
  legs: 4,
  color: 'black',
  age: 7,
  bark: function () {
    return 'Woof woof';
  },
};

// 4
console.log(dog2.legs);
console.log(dog2.color);
console.log(dog2.age);
console.log(dog2.bark());

// 5
dog2.breed = 'Dobermann';
dog2.getDogInfo = function () {
  return `Legs: ${this.legs}\nColor: ${this.color}\nAge: ${
    this.age
  }\nAnd it says: ${this.bark()}`;
};
console.log(dog2.getDogInfo());

// Level 2
// 1
import { users } from './users.js';
let maxSkill = 0;

for (let i = 0; i < Object.entries(users).length; i++) {
  if (Object.entries(users)[i][1].skills.length > maxSkill) {
    maxSkill = Object.entries(users)[i][1].skills.length;
  }
}
let maxSkilledUser;
for (let i = 0; i < Object.entries(users).length; i++) {
  if (maxSkill == Object.entries(users)[i][1].skills.length) {
    maxSkilledUser = Object.entries(users)[i][0];
  }
}
console.log(maxSkilledUser);

// 2
let loggedInCounter = 0;
let userPointsCounter = 0;
for (let i = 0; i < Object.entries(users).length; i++) {
  if (Object.entries(users)[i][1].isLoggedIn) {
    loggedInCounter++;
  }
  if (Object.entries(users)[i][1].points >= 50) {
    userPointsCounter++;
  }
}
console.log(loggedInCounter);
console.log(userPointsCounter);

// 3
for (let i = 0; i < Object.entries(users).length; i++) {
  let userMern = Object.entries(users)[i][1].skills;
  if (
    userMern.includes('MongoDB') &&
    userMern.includes('Express') &&
    userMern.includes('React') &&
    userMern.includes('Node')
  ) {
    console.log(`${Object.entries(users)[i][0]} is a MERN stack developer.`);
  }
}

// 4
const usersWithMe = Object.assign({}, users);
usersWithMe.Batuhan = {
  email: 'batuhankndrl@gmail.com',
  skills: ['HTML', 'CSS', 'SASS', 'JavaScript'],
  age: 22,
};
console.log(usersWithMe);
console.log(users);

// 5
const usersKeys = Object.keys(users);
console.log(usersKeys);

// 6
const usersValues = Object.values(users);
console.log(usersValues);

// 7
import { countries } from './countries.js';
for (let i = 0; i < countries.length; i++) {
  console.log(
    `Country: ${countries[i].name}\nCapital: ${
      countries[i].capital
    }\nPopulation: ${countries[i].population}\nLanguage(s): ${countries[
      i
    ].languages.join(', ')}`
  );
}

// Level 3
// 1
const personAccount = {
  firstName: 'Batuhan',
  lastName: 'Kendirli',
  incomes: [100, 550, 1200, 700, 650, 400],
  expenses: [250, 50, 600, 350],
  totalIncome: function () {
    let total = 0;
    this.incomes.forEach((income) => {
      total += income;
    });
    return total;
  },
  totalExpense: function () {
    let total = 0;
    this.expenses.forEach((expense) => {
      total += expense;
    });
    return total;
  },
  accountInfo: function () {
    return `First name: ${this.firstName}\nLast name: ${
      this.lastName
    }\nTotal income: $${this.totalIncome()}\nTotal expense: $${this.totalExpense()}\nAccount balance: $${this.accountBalance()}`;
  },
  addIncome: function (income) {
    this.incomes.push(income);
  },
  addExpense: function (expense) {
    this.expenses.push(expense);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};
personAccount.addIncome(500);
personAccount.addExpense(375);
console.log(personAccount.accountInfo());

// 2-a
import { users1, products } from './usersAndProducts.js';

const signUp = function (email, userName, password) {
  const createdAt = function () {
    const now = new Date();
    let year = String(now.getFullYear());
    let month = String(now.getMonth());
    let date = String(now.getDate());
    let hour = String(now.getHours());
    let minute = String(now.getMinutes());

    const addZero = function (value) {
      if (value.length == 1) {
        value = '0'.concat(value);
      }
      return value;
    };
    return `${addZero(date)}/${addZero(month)}/${year} ${addZero(
      hour
    )}:${addZero(minute)}`;
  };
  const randomId = function () {
    const characters =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const id = [];
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * characters.length);
      id.push(characters[random]);
    }
    return id.join('');
  };
  let hasAnAccount = false;
  for (let i = 0; i < users1.length; i++) {
    if (email == users1[i].email) {
      hasAnAccount = true;
    }
  }
  if (hasAnAccount) {
    return 'You have already an account. Want to sign in instead?';
  } else {
    let newUser = {
      _id: randomId(),
      userName: userName,
      email: email,
      password: password,
      createdAt: createdAt(),
      isLoggedIn: true,
    };
    users1.push(newUser);
  }
};

console.log(users1);
signUp('batuhankndrl@gmail.com', 'Batuhan', 123);
console.log(users1);
console.log(signUp('asab@asab.com', 'Asab', 123));

// 2-b
const signIn = function (email, password) {
  let hasAnAccount = false;
  let loggedIn = false;
  let acc;
  for (let i = 0; i < users1.length; i++) {
    if (email == users1[i].email) {
      hasAnAccount = true;
      acc = users1[i];
    }
  }
  if (hasAnAccount) {
    if (password == acc.password) {
      loggedIn = true;
    }
  }
  if (loggedIn) {
    acc.isLoggedIn = true;
    return 'You have successfully logged in!';
  } else {
    return 'Incorrect email or password.';
  }
};

console.log(signIn('alex@alex.com', 123123));
console.log(signIn('batuhankndrl@gmail.com', 1234));
console.log(users1);

// 3-a
const rateProduct = function (productId, email, rate) {
  let acc;
  let product;
  for (let i = 0; i < users1.length; i++) {
    if (email == users1[i].email) {
      acc = users1[i];
    }
  }
  if (acc == undefined) {
    return 'Please sign in.';
  }

  for (let i = 0; i < products.length; i++) {
    if (products[i]._id == productId) {
      product = products[i];
    }
  }
  const newRate = {
    userId: acc._id,
    rate: rate,
  };
  product.ratings.push(newRate);
  return product;
};
console.log(rateProduct('hedfcg', 'batuhankndrl@gmail.com', 4));
console.log(rateProduct('eedfcf', 'batu@gmail.com'));

// 3-b
const averageRating = function (productId) {
  let product;
  let totalRating = 0;
  for (let i = 0; i < products.length; i++) {
    if (productId == products[i]._id) {
      product = products[i];
    }
  }
  if (product == undefined) {
    return 'Product does not exist.';
  } else {
    for (let i = 0; i < product.ratings.length; i++) {
      totalRating += product.ratings[i].rate;
    }
  }
  return totalRating / product.ratings.length;
};
console.log(averageRating('eedfcf'));

// 4
const likeProduct = function (productId, email) {
  let user;
  let product;
  for (let i = 0; i < users1.length; i++) {
    if (email == users1[i].email) {
      user = users1[i];
    }
  }
  if (user == undefined) {
    return 'Please sign in to like a product.';
  }
  for (let i = 0; i < products.length; i++) {
    if (productId == products[i]._id) {
      product = products[i];
    }
  }
  const userId = user._id;
  if (user) {
    if (product.likes.includes(userId)) {
      let index;
      for (let i = 0; i < product.likes.length; i++) {
        if (product.likes[i] == userId) {
          index = i;
        }
      }
      product.likes.splice(index, 1);
    } else {
      product.likes.push(userId);
    }
    return product;
  }
};
console.log(likeProduct('eedfcf', 'thomas@thomas.com'));
console.log(likeProduct('eedfcf', 'batuhankndrl@gmail.com'));
console.log(likeProduct('eedfcf', 'martha@martha.com'));
console.log(likeProduct('eedfcf', 'batuhankndrl@gmail.com'));
console.log(likeProduct('aegfal', 'batu@gmail.com'));

// END OF THE EXERCISES
