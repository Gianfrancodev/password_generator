// Assignment Code
var generateBtn = document.querySelector("#generate");
var createPassword = [];
var userPasswordLength = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!?@#$%^&*"


// Write password to the #password input
function writePassword() {
  createPassword = [];
  generatePassword();
}

function generatePassword() {
  passwordLength();
  passwordLowercase();
  passwordUppercase();
  passwordNumeric();
  passwordSpecial();
  createUserPassword();
}

function passwordLength() {
  var userInputLength = window.prompt("Choose your password length. \n It must be a minumum of 8 and maximum of 128 characters. \n");
  if (userInputLength === null) {
    throw "User chose to not continue";
  }
  else if (userInputLength > 128) {
    alert("Please try again, your password was too long. \n Must not be greater than 128.");
    passwordLength();
  } else if (userInputLength < 8) {
    alert("Please try again, your password was too short. \n Must not be less than 8.");
    passwordLength();
  } else {
    userPasswordLength = userInputLength;
  }
}

function passwordLowercase() {
  if (window.confirm("Would you like LOWERCASE letters included in your password? \n 'YES' to include lowercase. \n 'NO' for no lowercase.")) {
    createPassword.push(lowercase);
  }
}

function passwordUppercase() {
  if (window.confirm("Would you like UPPERCASE letters included in your password? \n 'YES' to include uppercase. \n 'NO' for no uppercase.")) {
    createPassword.push(uppercase);
  }
}

function passwordNumeric() {
  if (window.confirm("Would you like NUMBERS included in your password? \n 'YES' to include numbers. \n 'NO' for no numbers.")) {
    createPassword.push(numeric);
  }
}

function passwordSpecial() {
  if (window.confirm("Would you like SPECIAL CHARACTERS included in your password? \n 'YES' to include special characters. \n 'NO' for no special characters.")) {
    createPassword.push(special);
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
