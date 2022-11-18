const passwordForm = document.querySelector("form");
const inputRange = document.querySelector("input[type='range']");
const password = document.querySelector(".container__box_input");

const barOne = document.querySelector(".bar-one");
const barTwo = document.querySelector(".bar-two");
const barThree = document.querySelector(".bar-three");
const barFour = document.querySelector(".bar-four");
const copy = document.querySelector(".container__box_icon");
const passStrength = document.querySelector(".strength__status");

const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const passwordLength = document.querySelector("#length");

const func = () => {
  const value = inputRange.value;
  passwordLength.textContent = value || 8;

  let char = "";

  if (upperCase.checked) {
    char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowerCase.checked) {
    char += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbers.checked) {
    char += "0123456789";
  }

  if (symbols.checked) {
    char += "!@#$%^&*()";
  }
  generatePassword(char, value);
};

function generatePassword(str, passLength) {
  let generatedPass = "";
  for (let i = 0; i < passLength; i++) {
    let randomNumber = Math.floor(Math.random() * str.length);
    generatedPass += str.substring(randomNumber, randomNumber + 1);
  }

  password.value = generatedPass;
  checkStrength(generatedPass);
}

function checkStrength(pass) {
  let strength = 0;
  if (pass.match(/[a-z]+/)) {
    strength += 1;
  }
  if (pass.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (pass.match(/[0-9]+/)) {
    strength += 1;
  }
  if (pass.match(/[!@#$%^&*()]+/)) {
    strength += 1;
  }

  switch (strength) {
    case 0:
      barOne.style.backgroundColor = "red";
      passStrength.textContent = "WEAK";
      break;

    case 1:
      barOne.style.backgroundColor = "red";
      barTwo.style.backgroundColor = "transparent";
      barThree.style.backgroundColor = "transparent";
      barFour.style.backgroundColor = "transparent";
      passStrength.textContent = "WEAK";
      break;

    case 2:
      barOne.style.backgroundColor = "orange";
      barTwo.style.backgroundColor = "orange";
      barThree.style.backgroundColor = "transparent";
      barFour.style.backgroundColor = "transparent";
      passStrength.textContent = "GOOD";
      break;

    case 3:
      barOne.style.backgroundColor = "orange";
      barTwo.style.backgroundColor = "orange";
      barThree.style.backgroundColor = "orange";
      barFour.style.backgroundColor = "transparent";
      passStrength.textContent = "MEDIUM";
      break;

    case 4:
      barOne.style.backgroundColor = "green";
      barTwo.style.backgroundColor = "green";
      barThree.style.backgroundColor = "green";
      barFour.style.backgroundColor = "green";
      passStrength.textContent = "STRONG";
      break;
  }
}

function copyToClipBoard() {
  if (password.value.length < 1) {
    alert("Nothing to copy");
    return;
  }
  password.select();
  navigator.clipboard.writeText(password.value);
  alert("Password Copied");
}

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  passwordForm.reset();
  password.value = "";
});

copy.addEventListener("click", copyToClipBoard);
passwordForm.addEventListener("change", func);

func();
