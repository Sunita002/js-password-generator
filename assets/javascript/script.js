// Assignment code here
var criteriaSelect = function() {

  //Password Criteria #1: Include lowercase characters
  var lowerCase = confirm('Would you like to include lowercase characters?');
  
  if (!lowerCase) {
    lowerCase = "";
  } else {
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
  }

  // Password Criteria #2: Include uppercase characters
  var upperCase = confirm('Would you like to include uppercase characters?');

  if (!upperCase) {
    upperCase = "";
  } else {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Password Criteria #3: Include numeric characters
  var charNum = confirm('Would you like to include numbers?');

  if (!charNum) {
    charNum = "";
  } else {
    charNum = "0123456789";
  }

  // Password Criteria #4: Include special characters
  var charSpec = confirm('Would you like to include special characters?');

  if (!charSpec) {
    charSpec = "";
  } else {
    charSpec = "!@#$%&*+";
  }

  //Password criteria types concatenated
  var charString = lowerCase + upperCase + charNum + charSpec
  
  // validates that at least one character type is selected
  if (charString.length > 0) {
    console.log("Character string is " + charString);
    return charString;
  } else {
    window.alert("Please choose at least one type of character.");
    return criteriaSelect();
  }
}

var generatePassword = function() {
  
  // setting character length
  var charLength = prompt('What is the desired length of your password?  Please enter a number between "9" and "100".');
  charLength = parseInt(charLength);
  console.log('Character length is ' + charLength);
  
  if (isNaN(charLength) || charLength < 9 || charLength > 100) {
    return generatePassword();
  }

  // generates password based on selected criteria
  var charSet = criteriaSelect();
  var retPassword = "";
  
  for (var i = 0, n = charSet.length; i < charLength; i++) {
    retPassword += charSet[Math.floor(Math.random() * n)];
  }
  console.log("Generated password is " + retPassword);
  
  return retPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

