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

function generatePassword() {}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
