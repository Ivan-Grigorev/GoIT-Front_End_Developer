console.log('module 01.2');

const a = 2;
const b = 3;
const c = a + b;

console.log('c:', c);

const totalSalary = 100000000;
console.log('totalSalary:', totalSalary, '$');

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(20, 3)); // 23
console.log(sum(120, 30)); // 150

// ======= scope ======
// global scope
const x = 5;

// scope A
{
  const y = 10;

  console.log('--- Scope A ---');
  console.log('x:', x);
  console.log('y:', y);

  // scope B
  {
    const x = 11;
    const y = 11;

    console.log('--- Scope B ---');
    console.log('x:', x);
    console.log('y:', y);
  }
}

console.log('--- Global Scope ---');
console.log('x:', x);

// ===== example =====
const text = 'kjfhdsfg spam sdgsgiuyiog ariguy';

console.log(text.includes('sale') || text.includes('spam'));

// =========================================== ===
// Example 1 - User input and branching
// Using the if..else and prompt constructs, write code that will ask, "What is the official JavaScript name?". If the user enters ECMAScript, then show an alert with the line "True!", Otherwise - "Don't know? ECMAScript!"

const userAnswer = prompt ('What is the official JavaScript name?');

if (userAnswer.toLowerCase () === 'ECMAScript'.toLowerCase ()) {
 console.log ('True!');
} else {
 console.log ('Not true!');
}

 console.log (
 userAnswer.toLowerCase () === 'ECMAScript'.toLowerCase ()
? 'True!'
: 'Not true!'
);

// =========================================== ===
// Example 2 - Time display (if ... else)
// Write a script to display hours and minutes in the browser console as a "14 hours 26 minutes" line. If the value of the variable minutes is 0, then print the line "14 hours", without minutes.

 const hours = 14;
 const minutes = 26;
// let timestring;

// if (minutes> 0) {
// timestring = `$ {hours} h. $ {minutes} min.`;
//} else {
// timestring = `$ {hours} h`;
//}

// console.log (timestring);
 console.log (minutes> 0? `$ {hours} h. $ {minutes} min.`:` $ {hours} h.`);

// =========================================== ===
// Example 3 - Branches
// Write a script that outputs a string to the console
// "This is a positive number" if the user entered a number greater than zero in the prompt.
// If zero has been entered, display the line "This is zero" in the console.
// If a negative number is passed, the console must have the string "This is a negative number".

const userInput = prompt ("Enter number");
const number = Number (userInput) || 0;
let answer;

if (number> 0) {
 answer = "This is a positive number";
} else if (number <0) {
 answer = "This is a negative number";
} else {
 answer = "This is zero";
}

console.log (answer);

// =========================================== ===
// Example 4 - Nested branches
// Write a script that compares numbers in variables a and b.
// If both values are greater than 100, display the maximum of them in the console.
// Otherwise, the console must have the sum of the value of b and the number 512.

const a = 120;
const b = 180;

if (a> 100 && b> 100) {
// const res = Math.max (a, b);
const res = a > b ? a: b;

// if (a > b) {
// res = a;
//} else {
// res = b;
//}

console.log (res);
} else {
 console.log (b + 512);
}

// =========================================== ===
// Example 5 - Formatting a link (endsWith)
// Write a script that checks if the value of the link variable ends with the symbol /. If not, add this symbol to the end of the link value. Use the if ... else construct.

let link = "https://my-site.com/about";
// Write the code below this line

if (! link.endsWith ("/")) link + = "/";

// link + =! link.endsWith ("/")? "/": "";

// Write the code above this line
console.log (link);

// =========================================== ===
// Example 6 - Link formatting (includes logical "AND")
// Write a script that checks if the value of the link variable ends with the symbol /. If not, add this character to the end of the link value, but only if the link has a "my-site" substring. Use the if ... else construct.

let link = "https://somesite.com/about";
let link = "https://my-site.com/about";
// Write the code below this line

if (! link.endsWith ("/") && link.includes ("my-site")) link + = "/";

// Write the code above this line
console.log (link);

// =========================================== ===
// Example 7 - Link formatting (ternary operator)
// Refactor the task code number 4 using the ternary operator.

let link = "https://somesite.com/about";

// if (link.includes ('my-site') &&! link.endsWith ('/')) {
// link + = '/';
//}

link + = link.includes ("my-site") &&! link.endsWith ("/")? "/": "";

console.log (link);

// =========================================== ===
// Example 8 - if ... else and logical operators
// Write a script that will output a string to the browser console depending on the value of the hours variable.

// If the value of the variable hours:

// less than 17, print the line "Pending"
// greater than or equal to 17 and less than or equal to 24, print the line "Expires"
// more than 24, print the string "Overdue"

const hours = 29;
let text;

if (hours <17) {
 text = "Pending";
} else if (hours> = 17 && hours <= 24) {
 text = "Expires";
} else {
 text = "Overdue";
}

console.log (text);

// =========================================== ===
// Example 9 - Deadline for project submission (if ... else)
// Write a script to display the deadline for submitting the project. Use the if ... else construct.

// If 0 days before the deadline - print the line "Today"
// If 1 day before the deadline - print the line "Tomorrow"
// If 2 days before the deadline - print the line "The day after tomorrow"
// If before the deadline 3+ days - print the line "Date in the future"

const daysUntilDeadline = 2;
// // Write the code below this line
let text;

switch (daysUntilDeadline) {
 case 0:
 text = "Today";
 break;
 case 1:
 text = "Tomorrow";
 break;
 case 2:
 text = "The day after tomorrow";
 break;
 default:
 text = "Date in the future";
 break;
}

console.log (text);

// =========================================== ===
// Example 11 - Cycle for
// Write a for loop that displays numbers in ascending order from min to max in the browser console, but only if the number is a multiple of 5.

const min = 20;
const max = 100;

for (let i = min; i <= max; i + = 1) {
 if (i% 5 === 0) console.log (i);
}

// =========================================== ===
// Example 12 - User input and branching
// Write a script that will prompt for a login and log the result into the browser console.

// If the visitor enters "Admin", the prompt asks for a password
// If nothing is entered or the Esc key is pressed - display the line "Canceled"
// Otherwise print the line "I don't know you"
// Check the password like this:

// If the password "I am an administrator" is entered, then display the line "Hello!"
// Otherwise display the line "Invalid password"

const login = prompt('Login');

if (login) {
 if (login === 'Admin') {
 const password = prompt ('password');

if (password === 'I'm admin') {
 console.log ('Hello!');
} else {
 console.log ('Invalid password');
}
} else {
 console.log ('I don't know you');
}
} else {
 console.log ('Canceled');
}

// ====== import / export =====
import {sum} from './utils.js';

console.log (sum (1, 1));
console.log (sum (10, 1));
console.log (sum (13, 1));
console.log (sum (16, 1));
