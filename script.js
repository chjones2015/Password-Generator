// Assignment code here
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var lowercaseChars = [];
var uppercaseChars = [];
var numericChars = [];
var specialChars = [];

for (var i = 0; i < characters.length; i++) {
  var char = characters[i];
  if (char >= "a" && char <= "z") {
    lowercaseChars.push(char);
  } else if (char >= "A" && char <= "Z") {
    uppercaseChars.push(char);
  } else if (char >= "0" && char <= "9") {
    numericChars.push(char);
  } else {
    specialChars.push(char);
  }
}

function generatePassword() {
  var passwordLength = 0;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumeric = false;
  var includeSpecial = false;

  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    includeLowercase = confirm("Do you want to include lowercase letters?");
    includeUppercase = confirm("Do you want to include uppercase letters?");
    includeNumeric = confirm("Do you want to include numbers?");
    includeSpecial = confirm("Do you want to include special characters?");
  }

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
  }

  var password = "";

  while (password.length < passwordLength) {
    if (includeLowercase) {
      var randomNumber = (Math.random() * lowercaseChars.length) | 0; // removes decimal as well
      password += lowercaseChars[randomNumber];
    }
    if (includeUppercase) {
      var randomNumber = (Math.random() * uppercaseChars.length) | 0;
      password += uppercaseChars[randomNumber];
    }
    if (includeNumeric) {
      var randomNumber = (Math.random() * numericChars.length) | 0;
      password += numericChars[randomNumber];
    }
    if (includeSpecial) {
      var randomNumber = (Math.random() * specialChars.length) | 0;
      password += specialChars[randomNumber];
    }
  }

  return password;
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