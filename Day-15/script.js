//? Count Characters in a String

// let username = "yogesh";
// console.log(username.length);

//? Check if a String Contains a Substring

// let a = prompt("Enter a word");
// let b = prompt("Enter another string")
// console.log(a.includes(b))

//? Count Vowels in a String

// let string = "I am a yogesh and my goal is to became full stack web developer"
// let trim = string.match(/[aeiou]/gi);
// console.log(trim);

//* make using loop also

//? Simple Calculator (Using Switch Case)

// let a = +prompt("Enter first number ");
// let b = prompt("operator");
// let c = +prompt("Enter Second number ");
// switch (b) {
//   case "+":
//     console.log(a + c);
//     break;
//   case "-":
//     console.log(a - c);
//     break;
//   case "/":
//     console.log(a / c);
//     break;
//   case "*":
//     console.log(a * c);
//     break;
//   default:
//     console.log("invalid input");
//     break;
// }

//? Find Maximum of Three Numbers (Using Conditional Operators)

// let a = +prompt("Enter first number ");
// let b = +prompt("Enter Second number ");
// let c = +prompt("Enter third number ");

// let maxNum = a > b ? (a > c ? a : c) : b > c ? b : c;
// console.log(maxNum);

//? Generate a Random Password (Functions)
//* from chat gpt answer

// function generatePassword() {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
//     let password = "";
//     for (let i = 0; i < 8; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         password += characters[randomIndex];
//     }
//     return password;
// }
// console.log("Generated Password:", generatePassword());

//? Find the First Non-Repeating Character (Strings & Loops)

//? Validate a Strong Password (Strings & Conditional Operators)
//* from chat gpt answer

// function validatePassword(password) {
//     const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return strongPasswordRegex.test(password);
// }

// function generatePassword() {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
//     let password = "";
//     for (let i = 0; i < 8; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         password += characters[randomIndex];
//     }
//     return password;
// }

// let password = generatePassword();
// console.log("Generated Password:", password);
// console.log("Is Strong Password?", validatePassword(password));

//? Implement a Function with Closure

function counter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const myCounter = counter();  //* from chat gpt it use to ignore the return of funtion itself as value


console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
