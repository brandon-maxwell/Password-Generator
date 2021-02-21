// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","_","`","{","}","|","~"];

// Write password to the #password input
function writePassword() {

  var passwordVars = [];
  var userInput = window.prompt ("How many characters would you like your password to contain?");
  if(userInput < 8 || userInput > 128) {
    window.alert("Please select a number between 8-128");
    return;
  }

  var special = window.confirm("Include Special Characters?");
  var number = window.confirm("Include Numberic Values?")
  var lower = window.confirm("Include Lowercase?")
  var upper = window.confirm("Include Uppercase?")

  if (!special && !number && !lower && !upper) {
    window.alert("Must select at least one option");
    return;
  }

  if (special) passwordVars = passwordVars.concat(specialCharacters)
  if (number) passwordVars = passwordVars.concat(numbers)
  if (lower) passwordVars = passwordVars.concat(lowerCase)
  if (upper) passwordVars = passwordVars.concat(upperCase)
  var generatePassword = [];

  for (var i=0; i<userInput; i++)
  generatePassword = generatePassword + passwordVars[Math.floor(Math.random() * passwordVars.length)]

  var password = generatePassword 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);