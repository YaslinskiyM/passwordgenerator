// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"; // creating the variable
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ"; //creating the variable
var numericalChar = "0123456789"; //creating the variable
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~"; //creating the variable

function getRandom (str){
return str[Math.floor(Math.random()*str.length)] //this function will return a string with a rounded, random number with certain length chosen

}

function  generatePassword( ) {
  var length = 0;
  var password = "" //these are left empty because we do not know what they will be 
  var passwordOptions = "" //left empty because we do not know yet what they will be. 
  
  while (length < 8 || length > 128 || isNaN(length)){ //this is to prompt a PW more than 8 but less than 128 or if this is not uner that category is will be NAN
    length = parseInt(prompt("How long would you like password to be? Must be more than 8 but less than 128 characters")) 
  }

  var includeLowerChar = confirm("Would you like lowercase?") //asking to incluide lowercase click ok to confirm, ifo so it will be added to the PW generating 
  console.log(includeLowerChar)

  var includeUpperChar = confirm("Would you like uppercase?")//asking to incluide uppercase click ok to confirm, ifo so it will be added to the PW generating 

  var includeSpecialChar = confirm("Would you like spercial character?")//asking to incluide special characters click ok to confirm, ifo so it will be added to the PW generating 

  var includeNmber = confirm("Would you like numbers?") //asking to incluide numbers click ok to confirm, ifo so it will be added to the PW generating 

  if (includeLowerChar) {
    password += getRandom(lowercaseChar) //if they chose to add lowercase this will be combined with the password being created
    passwordOptions += lowercaseChar
  }

  if (includeUpperChar) {
    password += getRandom(uppercaseChar) //if they chose to add uppercase this will be combined with the password being created
    passwordOptions += uppercaseChar
  }
  if (includeNmber) {
    password += getRandom(numericalChar) //if they chose to add numbers this will be combined with the password being created
    passwordOptions += numericalChar
  }
  if (includeSpecialChar) {
    password += getRandom(specialChar) //if they chose to add special characters this will be combined with the password being created
    passwordOptions += specialChar
  }

  for (let i = password.length; i < length; i++) { //this is looping through PW var string and adding a random character until its equals its length variable
    password += getRandom(passwordOptions)
  }



  return password//this will return the password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");//query selector will select an element in the page with the ID of password and sets the value of that element to the generated PW

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);//this adds the event listener upon clicking 