// EXERCISES

// Level 1
// 2

/* body style */
document.body.style.marginTop = '20px';
document.body.style.fontFamily = 'Roboto';
document.body.style.letterSpacing = '1px';

const container = document.createElement('div');
const keyContainer = document.createElement('h1');
const pressedKey = document.createElement('span');
const keyCode = document.createElement('h1');

/* container style */
container.style.display = 'flex';
container.style.gap = '50px';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.width = '900px';
container.style.height = '100vh';
container.style.margin = '0 auto';
container.style.color = '#424242';
container.style.textShadow = '2px 2px #D5D2D2';

/* keyContainer style */
keyContainer.style.width = 'inherit';
keyContainer.style.textAlign = 'center';
keyContainer.style.fontSize = '64px';
keyContainer.style.padding = '20px';
keyContainer.textContent = 'Press any keyboard key';
keyContainer.style.boxShadow = '1px 1px 8px 2px #888888';

/* pressedKey style */
pressedKey.style.textShadow = '2px 2px #000';
pressedKey.style.color = '#5BBC7A';

/* keyCode style */
keyCode.style.fontSize = '150px';
keyCode.style.fontWeight = '400';
keyCode.style.width = '270px';
keyCode.style.height = '300px';
keyCode.style.display = 'flex';
keyCode.style.alignItems = 'center';
keyCode.style.justifyContent = 'center';
keyCode.style.textAlign = 'center';
keyCode.style.display = 'none';
keyCode.style.textShadow = '2px 2px #000';
keyCode.style.color = '#5BBC7A';
keyCode.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
keyCode.style.borderRadius = '10px';

document.addEventListener('keydown', (key) => {
  keyCode.style.display = 'flex';
  if (key.key == ' ') {
    pressedKey.textContent = 'Space';
  } else {
    pressedKey.textContent = key.key;
  }
  keyContainer.textContent = `You pressed `;
  keyCode.textContent = key.keyCode;
  keyContainer.appendChild(pressedKey);
});

container.appendChild(keyContainer);
container.appendChild(keyCode);
document.body.appendChild(container);

// END OF THE EXERCISES
