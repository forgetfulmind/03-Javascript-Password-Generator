// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Generate Password 

function generatePassword() {

  var charCountInput = prompt("How many characters would you like your password to be? Please enter a value between 8 and 128.");

  if (charCountInput < 8 || charCountInput > 128 ) {
    alert("Please enter a valid number of characters")}
  
  else {
      console.log(charCountInput);

//Query user if lowercase should be included
  let lowerCaseInput = confirm("Would you like to include lowercase characters? Press OK to Confirm.");

  console.log(lowerCaseInput);

  if (lowerCaseInput) {
    alert("Okay we will include lowercase characters")
  }
  else {
    alert("Okay we won't include lowercase characters")
  };
//Query user if uppercase should be included
  let upperCaseInput = confirm("Would you like to include uppercase characters? Press OK to Confirm");

  console.log(upperCaseInput);

  if (upperCaseInput) {
    alert("Okay we will include uppercase characters")
  }
  else {
    alert("Okay we won't include uppercase characters")
  };

//Query user if numbers should be included
  let numCharInput = confirm("Would you like to include numbers? Press OK to Confirm");

  console.log(numCharInput);

  if (numCharInput) {
    alert("Okay we will include numbers")
  }
  else {
    alert("Okay we won't include numbers")
  };

//Query user if special character should be included
  let specialCharInput = confirm("Would you like to include special characters? Press OK to Confirm");

  console.log(specialCharInput);

  if (specialCharInput) {
    alert("Okay we will include special characters")
  }
  else {
    alert("Okay we won't include special characters")
  };

//Write message or return through process
  if (lowerCaseInput && upperCaseInput && numCharInput && specialCharInput) {
    var fullCharset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z",1,2,3,4,5,6,7,8,9,0,"!","@","#","$","%","^","&","*"];
  
    return fullCharset[Math.floor(Math.random()*fullCharset.length)];
  }
  else {
    alert ("Please choose at least one character type to include")
  };
 }
}