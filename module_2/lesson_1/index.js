console.log ('module 02.1');

 {
 a = 10;
 console.log ('a:', a);

 a = 15;
 console.log ('a:', a);
}

 console.log ('a:', a);

// ===== example ======
name.length === 4
Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]
4 6 5 4
const users = ['Ryan', 'Kieran', 'Jason', 'Yous'];
const output = [];

for (const name of users) {
 if (name.length === 4) {
 output.push (name);
  }
}

console.log (output);

// ===== example ======
const numbers = [12, 3232, 6666, 3, 98789];
const output = [];

for (const number of numbers) {
 if (String (number) .length === 4) {
 output.push (number);
  }
}

console.log (output);

// ===== example =====
const numbers = [];

numbers.push (1);
console.log (numbers); // [1]

numbers.push (2);
console.log (numbers); // [1, 2]

numbers.push (3);
console.log (numbers); // [1, 2, 3]

const num2 = numbers;
console.log (num2); // [1, 2, 3]

numbers.push (4);
console.log (numbers); // [1, 2, 3, 4]

numbers.push (5);
console.log (numbers); // [1, 2, 3, 4, 5]

console.log (num2); // [1, 2, 3, 4, 5]

numbers = [];
console.log (numbers); // []

// =======================================
// Example 1 - Basic array operations
// Create an array of genres with "Jazz" and "Blues" elements.
// Add "Rock and Roll" to the end.
// Display the first element of the array in the console.
// Display the last element of the array in the console. The code must work for an array of arbitrary length.
// Delete the first item and display it in the console.
// Insert "Country" and "Reggy" at the beginning of the array.

const genres = ['Jazz', 'Blues']; // Create an array of genres with "Jazz" and "Blues" elements.

genres.push ('Rock & Roll'); // Add "Rock and Roll" to the end.
console.log (genres [0]); // Display the first element of the array in the console.
console.log (genres [genres.length - 1]); // Display the last element of the array in the console. The code must work for an array of arbitrary length.
console.log (genres.shift ()); // Delete the first item and display it in the console.

genres.unshift ('Country', 'Reggae'); // Insert "Country" and "Reggy" at the beginning of the array.
console.log (genres);

// =======================================
// Example 2 - Arrays and strings
// Write a script to calculate the area of ​​a rectangle with sides whose values ​​are stored in the values ​​variable as a string. Values ​​are guaranteed to be separated by a space.

function getSquare (page) {
 const [x, y] = p.split ('');
// const x = arr [0];
// const y = arr [1];

 return Number (x) * Number (y);
}

console.log (getSquare ('8 11'));
console.log (getSquare ('10 11 '));

// =======================================
// Example 3 - Array search
// Write a script to search the fruit array with a loop for. For each element of the array, print a string in the format in the console
// element_number: element_value
// Numbering of elements must start with 1.

const fruits = ['apple', 'grape', 'peach', 'banana', 'lemon'];

for (let i = 0; i < fruits.length; i + = 1) {
 console.log (`${i + 1}: ${fruits [i]}`);
}

// =======================================
// Example 4 - Arrays and loops
// Write a script that displays the user's name and phone number in the console. The variables names and phones store lines of names and phone numbers separated by commas. The ordinal number of names and telephone numbers in the lines indicate compliance. The number of names and telephone numbers is guaranteed to be the same.

const names = 'Jacob, William, Solomon, Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesArr = names.split (',');
const phonesArr = phones.split (',');

console.log (namesArr);
console.log (phonesArr);

for (let i = 0; i < namesArr.length; i + = 1) {
 const nameWithEnding = `${namesArr [i]}:`;
 console.log (`${nameWithEnding.padEnd (10, '')} ${phonesArr [i]}`);
}

// =======================================
// Example 5 - Arrays and strings
// Write a script that displays all the words in the console except the first and last. The resulting string must not begin or end with a space character. The script must work for any line.

const string = 'Welcome to the future';
const strArr = string.split ('');

strArr.shift ();
strArr.pop ();

console.log (`" $ {strArr.join ('')} "`);

// =======================================
// Example 6 - Arrays and strings
// Write a script that "expands" the string (reverse order of letters) and displays it in the console.
// "abc def" => "fed cba"

const string = 'Welcome to the future';
const letters = string.split ('');
const reversedStr = [];

for (let i = letters.length - 1; i> = 0; i - = 1) {
 reversedStr.push (letters [i]);
}

console.log (reversedStr.join (''));
console.log (string.split (''). reverse (). join (''));

// =======================================
// Example 7 - Sort an array with a loop
// Write a script to sort the array of rows in alphabetical order by the first letter of the element.

const langs = ['python', 'javascript', 'c ++', 'haskel', 'php', 'ruby'];

 for (let x = 0; x < langs.length; x + = 1) {
  for (let y = x + 1; y < langs.length; y + = 1) {
    const lang1 = langs [x];
    const lang2 = langs [y];

  if (lang1 [0] > lang2 [0]) {
    langs [y] = lang1;
    langs [x] = lang2;
    }
  }
}

console.log (langs);

// ===== swap =====
let a = 1;
let b = 2;

[b, a] = [a, b];

console.log ('a:', a);
console.log ('b:', b);

// =======================================
// Example 8 - Search for an item
// Write a script to find the smallest number in the array. The code must work for any number array. Use the loop to solve the problem.

const numbers = [2, 17, 94, 1, 23, 37];

let min = numbers [0];
let max = numbers [0];

for (const number of numbers) {
 if (number <min) {
  min = number;
}

 if (number> max) {
  max = number;
  }
}

console.log (min); // 1
console.log (max); // 94

// ====== spread ======
const numbers = [2, 17, 94, 1, 23, 37];

console.log (... numbers);
console.log (Math.min (... numbers));
console.log (Math.max (... numbers));

const arr1 = [1, 2, 3];
const arr2 = [... arr1];

arr1.push (4);
console.log (arr1);
console.log (arr2);

// ===== rest ======
function sum (a, b, ... rest) {
  console.log (rest);

  return a + b;
}

console.log (sum (1, 1, 3, 4, 5, 3, 3, 2, 4));

// ===== arguments =====
function sum (... rest) {
 console.log (arguments);
// return a + b;
}

console.log (sum (1, 1, 3, 4, 5, 3, 3, 2, 4));

// ========= example =========
// a please explain how to correctly sum a number function.
// For example, function number 7,
// add 1 + 2 + 3 + 4 + 5 + 5 + 7 = sum

function sumRange (num) {
  // 1 ... num
  let sum = 0;

  for (let i = 1; i <= num; i + = 1) {
    sum + = i;
  }

  return sum;
}

console.log (sumRange (2)); // 3
console.log (sumRange (3)); // 6
console.log (sumRange (7)); // 28
