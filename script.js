//create variables
var passLength = window.prompt("Enter a password length between 8 and 128 characters")
var passLowerCase = window.confirm("Would you like to include lowercase characters in your password?")
var passUpperCase = window.confirm("Would you like to include uppercase characters in your password?")
var passNumeric = window.confirm("Would you like to include numeric characters in your password?")
var passSpecial = window.confirm("Would you like to include special characters in your password?")
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numerics = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specials = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

var usedCharacters = []

if (passLowerCase) {
    usedCharacters = usedCharacters.concat(lowerCase);
};
if (passUpperCase) {
    usedCharacters = usedCharacters.concat(upperCase);
};
if (passNumeric) {
    usedCharacters = usedCharacters.concat(numerics);
};
if (passSpecial) {
    usedCharacters = usedCharacters.concat(specials);
};

//create a function generatePassword
function generatePassword(){
    var index = Math.floor(Math.random()*usedCharacters.length);
    var newPassword = usedCharacters[index];
    for (var i = 0; i<passLength-1; i++){
        var index = Math.floor(Math.random()*usedCharacters.length);
        newPassword = newPassword + usedCharacters[index];
    };
    return newPassword;
};

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
