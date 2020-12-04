// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password 
function  generatePassword () {
  gatherInput();
}

function gatherInput () {
  var charCountInput = prompt("How many characters would you like your password to be? Please enter a value between 8 and 128.");
  if (charCountInput < 8 || charCountInput > 128 ) {
    alert("Please enter a valid number of characters")}
    else {
      console.log(charCountInput);
      lowerCase();
      upperCase();
      numChar();
      specialChar()}
}


function lowerCase() {
  let lowerCaseInput = confirm("Would you like to include lowercase characters? Press OK to Confirm.");
  console.log(lowerCaseInput);

}

function upperCase() {
  let upperCaseInput = confirm("Would you like to include uppercase characters? Press OK to Confirm");
  console.log(upperCaseInput);
}

function numChar() {
  let numCharInput = confirm("Would you like to include numbers? Press OK to Confirm");
  console.log(numCharInput);
}

function specialChar() {
  let specialCharInput = confirm("Would you like to include special characters? Press OK to Confirm");
  console.log(specialCharInput)}
