// EXERCISES

// Level 1
// 1
/* Exercise description: Create the following using HTML, CSS, and JavaScript, 
so I am going to apply most of the styling with css.  */
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const country = document.querySelector('.player-country');
const score = document.querySelector('.player-score');
const wrapper = document.querySelector('.wrapper');
const playersWrapper = document.querySelector('.players-wrapper');
const warning = document.querySelector('.warning');

const date = function () {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = now.toLocaleDateString('default', { month: 'long' });
  const date = String(now.getDate());
  const hour = String(now.getHours());
  const minute = String(now.getMinutes());

  const addZero = function (value) {
    if (value.length == 1) {
      value = '0' + value;
    }
    return value;
  };
  return `${month} ${addZero(date)}, ${year} ${addZero(hour)}:${addZero(
    minute
  )}`;
};

const users = [
  {
    firstName: 'Maurizia',
    lastName: 'Endrizzi',
    country: 'Italy',
    score: 55,
    joinDate: date(),
  },
  {
    firstName: 'James C.',
    lastName: 'Knox',
    country: 'Norway',
    score: 96,
    joinDate: date(),
  },
  {
    firstName: 'Ines',
    lastName: 'Fried',
    country: 'Germany',
    score: 85,
    joinDate: date(),
  },
  {
    firstName: 'Batuhan',
    lastName: 'Kendirli',
    country: 'Turkey',
    score: 90,
    joinDate: date(),
  },
];
let sortedUsers = users.sort((a, b) => b.score - a.score);
const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
  if (
    firstName.value.length == 0 ||
    lastName.value.length == 0 ||
    country.value.length == 0 ||
    score.value.length == 0
  ) {
    warning.textContent = 'All fields are required.';
    warning.style.display = 'block';
    console.log('hey');
  } else if (
    firstName.value - 1 ||
    firstName.value - 1 == 0 ||
    lastName.value - 1 ||
    lastName.value - 1 == 0 ||
    country.value - 1 ||
    country.value - 1 == 0
  ) {
    warning.textContent =
      'First name, last name, and country should be a string.';
    warning.style.display = 'block';
  } else if (isNaN(Number(score.value))) {
    warning.style.display = 'block';
    warning.textContent = 'Player score should be a number.';
  } else if (Number(score.value) > 100) {
    warning.style.display = 'block';
    warning.textContent = 'Player score can not be more than 100.';
  } else if (score.value < 0) {
    warning.style.display = 'block';
    warning.textContent = 'Player score can not be less than 0.';
  } else {
    warning.style.display = 'none';
    playersWrapper.innerHTML = '';
    users.push({
      firstName: firstName.value,
      lastName: lastName.value,
      country: country.value,
      score: Number(score.value),
      joinDate: date(),
    });
    sortedUsers.forEach((user, index) =>
      addPlayer(
        user.firstName,
        user.lastName,
        user.country,
        user.score,
        user.joinDate,
        index
      )
    );
  }
});

const addPlayer = function (
  firstName,
  lastName,
  country,
  score,
  joinDate,
  index
) {
  const playerInfo = document.createElement('div');
  const fullNameDate = document.createElement('div');
  const fullName = document.createElement('h4');
  const currentDate = document.createElement('p');
  const playerCountry = document.createElement('h4');
  const playerScore = document.createElement('h4');
  const buttons = document.createElement('div');
  const deleteSpan = document.createElement('span');
  const deleteIcon = document.createElement('i');
  const plusFive = document.createElement('span');
  const minusFive = document.createElement('span');

  playerInfo.classList.add('player-info');
  fullNameDate.classList.add('full-name-date');
  fullName.classList.add('full-name');
  currentDate.classList.add('date');
  playerCountry.classList.add('country');
  playerScore.classList.add('score');
  buttons.classList.add('buttons');
  deleteSpan.classList.add('delete');
  deleteSpan.id = `delete--${index}`;
  deleteSpan.onclick = () => {
    playersWrapper.innerHTML = '';
    sortedUsers.splice(index, 1);
    sortedUsers.forEach((user, index) =>
      addPlayer(
        user.firstName,
        user.lastName,
        user.country,
        user.score,
        user.joinDate,
        index
      )
    );
  };
  deleteIcon.classList.add('fa-solid');
  deleteIcon.classList.add('fa-trash-can');

  plusFive.classList.add('plus-five');
  plusFive.onclick = () => {
    if (sortedUsers[index].score < 96) {
      warning.style.display = 'none';
      playersWrapper.innerHTML = '';
      sortedUsers[index].score += 5;
      sortedUsers
        .sort((a, b) => b.score - a.score)
        .forEach((user, index) =>
          addPlayer(
            user.firstName,
            user.lastName,
            user.country,
            user.score,
            user.joinDate,
            index
          )
        );
    } else {
      warning.textContent = 'Can not go above 100.';
      warning.style.display = 'block';
    }
  };

  minusFive.classList.add('minus-five');
  minusFive.onclick = () => {
    if (sortedUsers[index].score > 4) {
      warning.style.display = 'none';
      playersWrapper.innerHTML = '';
      sortedUsers[index].score -= 5;
      sortedUsers
        .sort((a, b) => b.score - a.score)
        .forEach((user, index) =>
          addPlayer(
            user.firstName,
            user.lastName,
            user.country,
            user.score,
            user.joinDate,
            index
          )
        );
    } else {
      warning.textContent = 'Can not go below 0.';
      warning.style.display = 'block';
    }
  };

  fullName.textContent = firstName + ' ' + lastName;
  currentDate.textContent = joinDate;
  playerCountry.textContent = country;
  playerScore.textContent = score;

  plusFive.textContent = '+5';
  minusFive.textContent = '-5';

  fullNameDate.appendChild(fullName);
  fullNameDate.appendChild(currentDate);

  deleteSpan.appendChild(deleteIcon);
  buttons.appendChild(deleteSpan);
  buttons.appendChild(plusFive);
  buttons.appendChild(minusFive);

  playerInfo.appendChild(fullNameDate);
  playerInfo.appendChild(playerCountry);
  playerInfo.appendChild(playerScore);
  playerInfo.appendChild(buttons);

  playersWrapper.appendChild(playerInfo);
};
sortedUsers.forEach((user, index) => {
  addPlayer(
    user.firstName,
    user.lastName,
    user.country,
    user.score,
    user.joinDate,
    index
  );
});

// END OF THE EXERCISES
