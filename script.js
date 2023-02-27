// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function getRandom (str){
return str[Math.floor(Math.random()*str.length)]

}

function  generatePassword( ) {
  var length = 0;
  var password = ""
  var passwordOptions = ""
  
  while (length < 8 || length > 128 || isNaN(length)){
    length = parseInt(prompt("How long would you like password to be?")) 
  }

  var includeLowerChar = confirm("Would you like lowercase?")
  console.log(includeLowerChar)

  var includeUpperChar = confirm("Would you like uppercase?")

  var includeSpecialChar = confirm("Would you like spercial character?")

  var includeNmber = confirm("Would you like numbers?")

  if (includeLowerChar) {
    password += getRandom(lowercaseChar)
    passwordOptions += lowercaseChar
  }

  if (includeUpperChar) {
    password += getRandom(uppercaseChar)
    passwordOptions += uppercaseChar
  }
  if (includeNmber) {
    password += getRandom(numericalChar)
    passwordOptions += numericalChar
  }
  if (includeSpecialChar) {
    password += getRandom(specialChar)
    passwordOptions += specialChar
  }

  for (let i = password.length; i < length; i++) {
    password += getRandom(passwordOptions)
  }



  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);