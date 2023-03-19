// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
const passwordOptions = ["Lowercase", "Uppercase", "Numbers", "Special Characters"];
let userChoice = prompt("Please select an option: " + passwordOptions.join(", "));
alert("You chosen: " + userChoice);
return userChoice;
};

// Function for getting a random element from an array
const allCharacters = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters]

function getRandom() {
  let randomArray = Object.values(allCharacters)[Math.floor(Math.random() * Object.values(allCharacters).length)];
  let randomChar = randomArray[Math.floor(math.random() * randomArray.length)];
  return randomChar
};
// Function to generate password with user input
function generatePassword() {
  let passwordLength = parseInt(prompt("Enter length of password (must be 8 - 128 characters long):"));
  //Checks password length 
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("wrong input! password length must be 8 - 128 characters long.");
  return "";
  }
  let password = "";
  const selectedSets = [];
  // User's choices for character sets
  let userChoice = getPasswordOptions();
  switch(userChoice) {
    case "Lowercase":
      selectedSets.push(allCharacters.lowerCasedCharacters);
      break;
    case "Uppercase":
      selectedSets.push(allCharacters.upperCasedCharacters);
      break;
    case "Numbers":
      selectedSets.push(allCharacters.numericCharacters);
      break;
    case "Special characters":
      selectedSets.push(allCharacters.specialCharacters);
      break;
    default:
      alert("Invalid choice.");
      return "";  
  }
  for (let i = 0; i < passwordLength; i++) {
    const randomSetIndex = Math.floor(Math.random() * selectedSets.length);
    const selectedSet = selectedSets[randomSetIndex];
    const randomChar = getRandom(selectedSet);
    password += randomChar;
  };
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);