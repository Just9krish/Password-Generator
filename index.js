const passwordForm = document.querySelector("form");
const inputRange = document.querySelector("input[type='range']");
const password = document.querySelector(".container__box_input");

const barOne = document.querySelector(".bar-one");
const barTwo = document.querySelector(".bar-two");
const barThree = document.querySelector(".bar-three");
const barFour = document.querySelector(".bar-four");

passwordForm.addEventListener("change", () => {
  const upperCase = document.querySelector("#uppercase");
  const lowerCase = document.querySelector("#lowercase");
  const numbers = document.querySelector("#numbers");
  const symbols = document.querySelector("#symbols");
  const passwordLength = document.querySelector("#length");

  const value = inputRange.value;
  passwordLength.textContent = value || 8;
  console.log(passwordLength.value);

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
});

function generatePassword(str, passLength) {
  let generatedPass = "";
  for (let i = 0; i < passLength; i++) {
    let randomNumber = Math.floor(Math.random() * str.length);
    generatedPass += str.substring(randomNumber, randomNumber + 1);
  }

  password.value = generatedPass;
  changeBarColor(generatedPass)
}

function changeBarColor(pass) {
  if (pass.length <= 6) {
    barOne.style.backgroundColor = "red"
  } else if (pass.length >= 6 || pass.length <= 9) {
    barOne.style.backgroundColor = "orange"
    barTwo.style.backgroundColor = "orange"
  }
}

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  passwordForm.reset();
  password.value = "";
});
