// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Begin to Gather Data from user 

function generatePassword() {

//Query user on how many characters they would like in their password
  var charCount = prompt("How many characters would you like your password to be? Please enter a value between 8 and 128.");
  var charCountInput = parseInt(charCount)

  if (charCountInput < 8 || charCountInput > 128 || isNaN(charCountInput)) {
    alert("Please enter a valid number of characters")
  } 

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

//Begin 13 combinations of possibilites for user options 
  if (lowerCaseInput && upperCaseInput && numCharInput && specialCharInput) {
    function genPass(){
      var length = charCountInput;
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass();
  }
  else if (upperCaseInput && numCharInput && specialCharInput) {
    function genPass2(){
      var length = charCountInput;
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass2();
  }
  else if (lowerCaseInput && numCharInput && specialCharInput) {
    function genPass3(){
      var length = charCountInput;
      charset = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass3();
  }
  else if (lowerCaseInput && upperCaseInput && specialCharInput) {
    function genPass4(){
      var length = charCountInput;
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass4();
  }
  else if (lowerCaseInput && upperCaseInput && numCharInput) {
    function genPass5(){
      var length = charCountInput;
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass5();
  }
  else if (numCharInput && specialCharInput) {
    function genPass6(){
      var length = charCountInput;
      charset = "1234567890!@#$%^&*"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass6();
  }
  else if (upperCaseInput && specialCharInput) {
    function genPass7(){
      var length = charCountInput;
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass7();
  }
  else if (upperCaseInput && numCharInput) {
    function genPass8(){
      var length = charCountInput;
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass8();
  }
  else if (lowerCaseInput && specialCharInput) {
    function genPass8(){
      var length = charCountInput;
      charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass8();
  }
  else if (lowerCaseInput && numCharInput) {
    function genPass9(){
      var length = charCountInput;
      charset = "abcdefghijklmnopqrstuvwxyz1234567890"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass9();
  }
  else if (lowerCaseInput && upperCaseInput) {
    function genPass10(){
      var length = charCountInput;
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass10();
  }
  else if (lowerCaseInput) {
    function genPass11(){
      var length = charCountInput;
      charset = "abcdefghijklmnopqrstuvwxyz"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass11();
  }
  else if (upperCaseInput) {
    function genPass12(){
      var length = charCountInput;
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass12();
  }
  else if (numCharInput) {
    function genPass13(){
      var length = charCountInput;
      charset = "1234567890"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass13();
  }
  else if (specialCharInput) {
    function genPass13(){
      var length = charCountInput;
      charset = "!@#$%^&*"
      retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return retVal;
    }
    return genPass13();
  }
  //Validation alert for not choosing at least one character type
  else {
    alert ("Please choose at least one character type to include")
  };
 }
}