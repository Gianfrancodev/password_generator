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
  if (window.confirm("Would you like LOWERCASE letters included in your password? \n 'Ok' to include lowercase. \n 'Cancel' for no lowercase.")) {
    createPassword.push(lowercase);
  }
}

function passwordUppercase() {
  if (window.confirm("Would you like UPPERCASE letters included in your password? \n 'Ok' to include uppercase. \n 'Cancel' for no uppercase.")) {
    createPassword.push(uppercase);
  }
}

function passwordNumeric() {
  if (window.confirm("Would you like NUMBERS included in your password? \n 'Ok' to include numbers. \n 'Cancel' for no numbers.")) {
    createPassword.push(numeric);
  }
}

function passwordSpecial() {
  if (window.confirm("Would you like SPECIAL CHARACTERS included in your password? \n 'Ok' to include special characters. \n 'Cancel' for no special characters.")) {
    createPassword.push(special);
  }
}

function createUserPassword() {

  var passwordTogether = createPassword.join("");
  console.log(passwordTogether);
  function getRandomCharacters(length) {
    var newPassword = "";
    for (var i = 0; i < length; i++) {
      newPassword += passwordTogether.charAt(Math.floor(Math.random() * passwordTogether.length));
    }
    return newPassword;
  }
}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
