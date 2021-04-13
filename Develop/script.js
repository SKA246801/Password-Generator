// Assignment code here

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

 var number = ['0', '1', '2', '3', '4', '5 ', '6', '7', '8', '9', '0']

 var special = ['`','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '-', '=',
  '_', '+', ';', '"', ':', '<', '>', '/', '?']
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePasswordLength() {
  const lengthInput = parseInt(prompt('Enter the number of characters you would like your password to contain'))
  if (lengthInput < 8 || lengthInput > 128) {
  alert('Password must be 8-128 characters long')
  generatePasswordLength()
} 
  return lengthInput
}
// Get user input for generating password
function generatePasswordOptions() {
  

 // Determine hasLowercase
  let hasLowercaseCharsInput = confirm('Click OK if you want your password to contain lowercase characters')
  //hasLowercase is the key
  
// Determine Uppercase
  let hasUppercaseCharsInput = confirm('Click OK if you want your password to contain uppercase characters');
  
  
  let hasNumberCharsInput = confirm('Click OK if you want your password to contain numbers');
  

  let hasSpecialCharsInput = confirm('Click OK if you want your password to contain special characters');
  

 if (hasLowercaseCharsInput === false &&
      hasUppercaseCharsInput === false &&
      hasNumberCharsInput === false &&
      hasSpecialCharsInput === false ) {
         
        alert("You must choose at least one option");
        generatePasswordOptions()
      }  
      // passwordOptions.hasLowercase = hasLowercaseCharsInput
      // passwordOptions.hasUppercase = hasUppercaseCharsInput;
      // passwordOptions.hasNumbers = hasNumberCharsInput;
      // passwordOptions.hasSpecial = hasSpecialCharsInput;
      let passwordOptions = {
        hasLowercase: hasLowercaseCharsInput,
        hasUppercase: hasUppercaseCharsInput,
        hasNumbers: hasNumberCharsInput,
        hasSpecial: hasSpecialCharsInput
      }
     return passwordOptions
}

// Generate password using input from passwordOptions
function generatePassword() {
  const passwordLength = generatePasswordLength()
  console.log(passwordLength);
  const passwordOptions = generatePasswordOptions()
  console.log(passwordOptions)

  let characterBasket = []

  if (passwordOptions.hasLowercase === true) {
    characterBasket = characterBasket.concat(lowercase)
  }

  if (passwordOptions.hasUppercase === true) {
    characterBasket = characterBasket.concat(uppercase)
  }

  if (passwordOptions.hasNumbers === true) {
    characterBasket = characterBasket.concat(number)
  }

  if (passwordOptions.hasSpecial === true) {
    characterBasket = characterBasket.concat(special)
  }

  console.log(characterBasket);
  var password = ''
  for (var i = 0; i < passwordLength; i++){
    password = password + characterBasket[Math.floor(Math.random()* characterBasket.length)]
  }
  // result = final password
  console.log(password);
  return password;
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
