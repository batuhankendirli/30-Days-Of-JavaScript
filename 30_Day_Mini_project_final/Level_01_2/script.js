// EXERCISES

// Level 1
// 2
const firstNameError = document.querySelector('.first-name-error');
const firstName = document.querySelector('#first-name');
let firstNameResult;

const lastNameError = document.querySelector('.last-name-error');
const lastName = document.querySelector('#last-name');
let lastNameResult;

const emailError = document.querySelector('.email-error');
const email = document.querySelector('#email');
let emailResult;

const passwordError = document.querySelector('.password-error');
const password = document.querySelector('#password');
let passwordResult;

const telephoneError = document.querySelector('.telephone-error');
const telephone = document.querySelector('#telephone');
let phoneResult;

const bioError = document.querySelector('.bio-error');
const bio = document.querySelector('#bio');
let bioResult;

const successMsg = document.querySelector('.success-msg');

const isActive = function (element) {
  if (document.activeElement != element) {
    element.style.border = '1px solid #cccccc';
  }
};

firstName.addEventListener('keyup', (e) => {
  const query = e.target.value;
  var firstNameREGEX = /^[a-zA-Z]{4,16}$/;
  firstNameResult = firstNameREGEX.test(query);

  if (firstNameResult) {
    firstNameError.style.display = 'none';
    firstName.style.border = '1px solid #21BF73';
  } else {
    firstNameError.style.display = 'block';
    firstName.style.border = '1px solid #FD7B72';
  }
  isValid(lastNameResult, lastName);
  isValid(emailResult, email);
  isValid(passwordResult, password);
  isValid(phoneResult, telephone);
  isValid(bioResult, bio);
  areAllValid();
});

lastName.addEventListener('keyup', (e) => {
  const query = e.target.value;
  var lastNameREGEX = /^[a-zA-Z]{4,16}$/;
  lastNameResult = lastNameREGEX.test(query);

  if (lastNameResult) {
    lastNameError.style.display = 'none';
    lastName.style.border = '1px solid #21BF73';
  } else {
    lastNameError.style.display = 'block';
    lastName.style.border = '1px solid #FD7B72';
  }

  isValid(firstNameResult, firstName);
  isValid(emailResult, email);
  isValid(passwordResult, password);
  isValid(phoneResult, telephone);
  isValid(bioResult, bio);
  areAllValid();
});

email.addEventListener('keyup', (e) => {
  const query = e.target.value;
  const emailREGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailResult = emailREGEX.test(query);
  if (emailResult) {
    emailError.style.display = 'none';
    email.style.border = '1px solid #21BF73';
  } else {
    emailError.style.display = 'block';
    email.style.border = '1px solid #FD7B72';
  }

  isValid(lastNameResult, lastName);
  isValid(firstNameResult, firstName);
  isValid(passwordResult, password);
  isValid(phoneResult, telephone);
  isValid(bioResult, bio);
  areAllValid();
});

password.addEventListener('keyup', (e) => {
  const query = e.target.value;
  const passwordREGEX = /^[a-z0-9\-_@]{6,20}$/;
  passwordResult = passwordREGEX.test(query);

  if (passwordResult) {
    passwordError.style.display = 'none';
    password.style.border = '1px solid #21BF73';
  } else {
    passwordError.style.display = 'block';
    password.style.border = '1px solid #FD7B72';
  }

  isValid(lastNameResult, lastName);
  isValid(emailResult, email);
  isValid(firstNameResult, firstName);
  isValid(phoneResult, telephone);
  isValid(bioResult, bio);
  areAllValid();
});

telephone.addEventListener('keyup', (e) => {
  const query = e.target.value;

  const phoneRGEX =
    /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  phoneResult = phoneRGEX.test(query);
  if (phoneResult) {
    telephoneError.style.display = 'none';
    telephone.style.border = '1px solid #21BF73';
  } else {
    telephoneError.style.display = 'block';
    telephone.style.border = '1px solid #FD7B72';
  }

  isValid(firstNameResult, firstName);
  isValid(lastNameResult, lastName);
  isValid(emailResult, email);
  isValid(passwordResult, password);
  isValid(bioResult, bio);
  areAllValid();
});

bio.addEventListener('keyup', (e) => {
  const query = e.target.value;
  const bioREGEX = /^[a-z\-_ ]{8,50}$/;
  bioResult = bioREGEX.test(query);
  if (bioResult) {
    bioError.style.display = 'none';
    bio.style.border = '1px solid #21BF73';
  } else {
    bioError.style.display = 'block';
    bio.style.border = '1px solid #FD7B72';
  }

  isValid(firstNameResult, firstName);
  isValid(lastNameResult, lastName);
  isValid(emailResult, email);
  isValid(passwordResult, password);
  isValid(phoneResult, telephone);
  areAllValid();
});

const btnSubmit = document.querySelector('.btn-submit');

function areAllValid() {
  if (
    firstNameResult &&
    lastNameResult &&
    emailResult &&
    passwordResult &&
    phoneResult &&
    bioResult
  ) {
    btnSubmit.style.backgroundColor = '#21BF73';
    btnSubmit.onmouseenter = () => {
      btnSubmit.style.cursor = 'pointer';
    };

    btnSubmit.addEventListener('click', () => {
      if (
        firstNameResult &&
        lastNameResult &&
        emailResult &&
        passwordResult &&
        phoneResult &&
        bioResult
      ) {
        successMsg.style.display = 'block';
      }
    });
  } else {
    btnSubmit.style.backgroundColor = '#444444';
    btnSubmit.onmouseenter = () => {
      btnSubmit.style.cursor = 'default';
    };
    successMsg.style.display = 'none';
  }
}

function isValid(result, element) {
  if (result) {
    element.style.border = '1px solid #21BF73';
  } else {
    isActive(element);
  }
}

// END OF THE EXERCISES
