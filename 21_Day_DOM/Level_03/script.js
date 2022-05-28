// EXERCISES

// Level 3
// 1
const h1 = document.querySelector('h1');
h1.style.fontSize = '36px';
h1.style.fontWeight = '500';
h1.style.marginBottom = '20px';

document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.fontFamily = 'Roboto';

const wrapper = document.querySelector('.wrapper');
wrapper.style.width = '1200px';
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'center';
wrapper.style.padding = '40px 0';

const h2 = document.querySelector('h2');
h2.style.fontSize = '24px';
h2.style.textDecoration = 'underline';
h2.style.fontWeight = '300';
h2.style.letterSpacing = '1px';
h2.style.marginBottom = '15px';

const ul = document.querySelector('ul');
ul.style.listStyle = 'none';
ul.style.display = 'flex';
ul.style.flexDirection = 'column';
ul.style.gap = '5px';
ul.style.width = '800px';

const li = document.querySelectorAll('li');
li.forEach((list) => {
  list.style.padding = '20px';
  if (list.textContent.includes('Done')) {
    list.style.backgroundColor = '#82c91e';
  } else if (list.textContent.includes('Ongoing')) {
    list.style.backgroundColor = '#ffe066';
  } else {
    list.style.backgroundColor = '#ff6b6b';
  }
});
const year = new Date().getFullYear();
const spanYear = document.querySelector('span');
spanYear.textContent = year;
spanYear.style.fontSize = '84px';

const randomColor = function (element) {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 256);
    arr.push(random);
  }
  element.style.color = `rgb(${arr.join(', ')})`;
};
setInterval(() => randomColor(spanYear), 1000);

const paragraph = document.querySelector('p');
paragraph.style.fontSize = '18px';
paragraph.style.padding = '12px 30px';
paragraph.style.marginBottom = '15px';

const getTime = function (paragraph) {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = now.toLocaleDateString('default', { month: 'long' });
  const date = String(now.getDate());
  const hour = String(now.getHours());
  const minute = String(now.getMinutes());
  const second = String(now.getSeconds());

  const addZero = function (time) {
    if (time.length == 1) {
      time = '0'.concat(time);
      return time;
    } else {
      return time;
    }
  };
  return (paragraph.textContent = `${month} ${addZero(date)}, ${year} ${addZero(
    hour
  )}:${addZero(minute)}:${addZero(second)}`);
};
setInterval(() => getTime(paragraph), 1000);
setInterval(() => {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 256);
    arr.push(random);
  }

  paragraph.style.backgroundColor = `rgb(${arr.join(', ')})`;
}, 1000);

// END OF THE EXERCISES
