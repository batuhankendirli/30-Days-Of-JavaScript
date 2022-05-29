// EXERCISES

// Level 1
// 1
document.body.style.fontFamily = 'Roboto';
document.body.style.textAlign = 'center';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.paddingTop = '20px';
document.body.style.paddingBottom = '20px';

const h1 = document.querySelector('h1');
h1.style.fontWeight = '500';
h1.style.letterSpacing = '1px';

const h3 = document.querySelector('h3');
h3.style.fontWeight = '400';
h3.style.textDecoration = 'underline';
h3.style.textDecorationThickness = '2px';

const p = document.querySelector('p');
p.style.textDecoration = 'underline';
p.style.marginBottom = '20px';

const container = document.querySelector('.container');
container.style.width = '900px';
container.style.display = 'grid';
container.style.justifyContent = 'center';
container.style.gridTemplateColumns = 'repeat(6, 1fr)';
container.style.gap = '5px';

for (let i = 0; i <= 101; i++) {
  const span = document.createElement('span');
  span.style.padding = '15px 25px';
  span.style.color = 'white';
  span.style.fontSize = '48px';
  let count = 0;
  if (i % 2 == 0) {
    span.style.backgroundColor = '#21bf73';
    span.textContent = i;
    container.appendChild(span);
  } else if (i % 2 != 0) {
    span.style.backgroundColor = '#FDDB3A';
    span.textContent = i;
    container.appendChild(span);
  }

  for (let j = 2; j < 101; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (!(count > 1) && i != 1) {
    span.style.backgroundColor = '#FD5E53';
    span.textContent = i;
    container.appendChild(span);
  }
}

// END OF THE FIRST LEVEL
