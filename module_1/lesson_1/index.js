const a = 10;
console.log ('index a:', a);

// Please confirm the hotel reservation and save the result of the work confirm in the variable
const isComing = confirm ("Please confirm hotel reservation");
console.log (isComing);

const userName = prompt ("What is your name?");
console.log (`Hello`, userName); // string
console.log (`Hello`, Number (userName)); // number

const x = 15;
console.log (x% 8);

const y = 27;
console.log (even number: ', y% 2 === 0); // even number
console.log ('not even', y% 2! == 0); // not an even number

let i = 1;
console.log (i);

// i = i + 1;
// console.log (i);
console.log (i = i + 1);

// i + = 1;
// console.log (i);
console.log (i += 1);

// i ++;
// console.log (i);
console.log (i ++); // post-increment
console.log (i); // 4

// ++ i;
// console.log (i);
console.log (++ i); // pre-increment

// =================
// Example 1 - Basic mathematical operators
// Display the total number of apples and grapes. The difference between apples and grapes.

const apples = 47;
const grapes = 135;
const total = apples + grapes;

console.log (total);

const diff = grapes - apples;

console.log (diff);

// =================
// Example 2 - Combined operators
// Replace the override expression with the combined operator + =.

let students = 100;
// students = students + 50;
students + = 50;
console.log (students);

// =================
// Example 3 - Operator priority
// Parse the priority of operators in the instruction for assigning a value to the variable result.

const result = 108 + 223 - 2 * 5;
console.log (result);

// =================
// Example 4 - Class Math
// Write a script that displays rounded up / down, etc. in the console. values ​​of the variable value. Use the Math.floor (), Math.ceil (), and Math.round () methods. Check what will be in the console at values ​​27.3 and 27.9.

const value = 27.5;

console.log (Math.floor (value)); // 27
console.log (Math.ceil (value)); // 28
console.log (Math.round (27.4)); // 27
console.log (Math.round (27.5)); // 28

const x = 3.1415
console.log (x.toFixed (3));

// =================
// Compose a phrase using template strings A has B bots in stock, where A, B are variables inserted into the string.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenseBots = 50;
const totalBots = repairBots + defenseBots;
const message = `$ {companyName} has $ {totalBots} bots in stock`;

console.log (message); // "Cyberdyne Systems has 200 bots in stock"

// =================
// Example 6 - String methods and chaining
// Write a script that calculates the human body mass index. To do this, divide the weight in kilograms by the square of the person's height in meters.
// Weight and height are stored in the variables weight and height, but not as numbers, but as strings (especially for the task). Non-integers can be specified as 24.7 or 24.7, ie a comma can be used as a delimiter.
// Body mass index must be rounded to one digit after the comma;

let weight = '88, 3 ';
let height = '1.75';

weight = weight.replace (',', '.');
height = height.replace (',', '.');

weight = Number.parseFloat (weight);
height = Number.parseFloat (height);

let bmi = weight / Math.pow (height, 2);
bmi = bmi.toFixed (1);
bmi = Number (bmi);

console.log (bmi); // 28.8

const weight = Number.parseFloat ('88, 3'.replace (',', '.'));
const height = Number.parseFloat ('1.75'.replace (', ','. '));
const bmi = Number (weight / Math.pow (height, 2)). toFixed (1));

console.log (bmi); // 28.8

// =========================================== ===
// Example 7 - Comparison operators and type reduction
// What will be the result of the expressions?

console.log (5> 4); // true
console.log (10> = '7'); // true
console.log ('2'> '12');
console.log ('2' <'12');

console.log ('4' == 4); // true
console.log ('6' === 6); // false
console.log ('false' === false); // false

console.log (1 == true);
console.log (1 === true);

console.log ('0' == false); // true
console.log ('0' === false);

console.log ('Papaya' <'papaya');
console.log ('Papaya' === 'papaya');

console.log (undefined == null);
console.log (undefined === null);

// =========================================== ===
// Example 8 - Logical operators
// What will be the result of the expressions?

console.log (true && 3);
console.log (false && 3);
console.log (true && 4 && 'kiwi');
console.log (true && 0 && 'kiwi');
console.log (true || 3);
console.log (true || 3 || 4);
console.log (true || false || 7);
console.log (null || 2 || undefined);
console.log (1 && null && 2)> 0);
console.log (null || (2 && 3) || 4);

// =========================================== ===
// Example 9 - Default value and zero merge operator
// Retractor the code so that the value of the variable incomingValue is assigned to the value variable if it is not undefined or null. Otherwise, the defaultValue value must be set. Check the script for the following values ​​of the incomingValue variable: null, undefined, 0, false. Use the operator ?? (nullish coalescing operator).

const incomingValue = 0;
const defaultValue = 10;
const value1 = incomingValue || defaultValue; // 10
const value2 = incomingValue ?? defaultValue; // 0

console.log (value1);
console.log (value2);

// =========================================== ===
// Example 10 - % operator and string methods
// Write a script that will translate the value of totalMinutes (number of minutes) into a string in the format of hours and minutes HH: MM.

// 70 will show 01:10
// 450 will show 07:30
// 1441 will show 24:01

const totalMinutes = 65;

const hours = Math.floor (totalMinutes / 60);
const minutes = totalMinutes% 60;

console.log (hours);
console.log (minutes);

const doubleDigitHours = String (hours) .padStart (2, 0);
const doubleDigitMinutes = String (minutes) .padStart (2, 0);

console.log (`$ {doubleDigitHours}: $ {doubleDigitMinutes}`);
