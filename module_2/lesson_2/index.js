console.log ('module 02.2');

// ======== IIFE =========
(function () {
 const a = 5;
 console.log ('a:', a);
}) ();

 (function () {
 const a = 15;
 console.log ('a:', a);
}) ();

// ======= arguments =======
function sum () {
 let res = 0;

 for (let i = 0; i <arguments.length; i + = 1) {
   res + = arguments [i];
}

 return res;
}

function multiple () {
 let res = 1;

 for (const number of arguments) {
   res * = number;
}

 return res;
}

function sum2 (... props) {
 let res = 0;

 for (const number of props) {
   res + = number;
}

 return res;
}

console.log ('----- sum ------');
console.log (sum (2)); // 2
console.log (sum (2, 2, 3, 2, 1)); // 10

console.log ('----- multiple ------');
console.log (multiple (2, 2)); // 4
console.log (multiple (2, 2, 10)); // 40

console.log ('----- sum2 ------');
console.log (sum2 (3)); // 3
console.log (sum2 (2, 2, 3, 2, 1, 10)); // 20

// ========= sum ===========
function sum (a, b) {
 const c = b + a;

 return c;
}

const text1 = 'Hello';
const text2 = 'world';
const result = text1 + '' + text2;

console.log (result);

function fn () {}

console.log (fn ());

// ======== hoisting =========
fn ();

function fn () {
 console.log ('hello');
}

console.log ('a:', a);
console.log ('b:', b);

var a = 5;
const b = 10;

// =================================
// Example 1 - Body mass index
// Write a calcBMI (weight, height) function that calculates and returns the human body mass index. To do this, divide the weight in kilograms by the square of the person's height in meters.
// Weight and height will be specially passed as strings. Non-integers can be specified as 24.7 or 24.7, ie a comma can be used as a delimiter.
// Body mass index must be rounded to one digit after the comma;

function calcBMI (weight, height) {
 const weightNum = parseFloat (weight.replace (',', '.'));
 const heightNum = parseFloat (height.replace (',', '.'));

 return parseFloat (weightNum / Math.pow (heightNum, 2)). toFixed (1));
}

const bmi = calcBMI ('88, 3 ',' 1.75 ');
console.log (bmi); // 28.8

// =================================
// Example 2 - The smallest of numbers
// Write a function min (a, b) that returns the smaller of the numbers a and b.

function min (a, b) {
 return a < b ? a: b;
}

function min (... props) {
 let res = props [0];

 for (const num of props) {
   if (num < res) {
     res = num;
    }
  }

 return res;
}

console.log (min (2, 5)); // 2
console.log (min (3, -1)); // -1
console.log (min (1, 1)); // 1
console.log (min (1, 5, -4, 5, 2, 0, 10)); // -4

// =================================
// Example 3 - The area of the rectangle
// Write the getRectArea (dimensions) function to calculate the area of a rectangle with sides whose values will be passed to the dimensions parameter as a string. Values are guaranteed to be separated by a space.

function getRectArea (dimensions) {
 const [x, y] = dimensions.split ('');
// const arr = dimensions.split ('');
// const x = arr [0];
// const y = arr [1];

 return parseFloat (x) * parseFloat (y);
}

console.log (getRectArea ('8 11')); // 88
console.log (getRectArea ('2 5')); // 10

// =================================
// Example 4 - Logging elements
// Write a logItems (items) function that gets an array and uses a for loop, which for each array element will output a message to the console in the format <element number> - <element value>. Element numbering must start with 1.

// For example, for the first element of the array ['Mango', 'Poly', 'Ajax'] with index 0, 1 - Mango will be output, and for index 2, 3 - Ajax will be output.

function logItems (items) {
 console.log ('-------------');
 for (let i = 0; i < items.length; i + = 1) {
  console.log (`$ {i + 1} - $ {items [i]}`);
  }
}

logItems ['Mango', 'Poly', 'Ajax']);
logItems ();

// =================================
// Example 5 - Logging contacts
// Write a printContactsInfo function (names, phones) that displays the user's name and phone number in the console. Names and phone numbers separated by commas will be passed to the names and phones parameters. The ordinal number of names and telephone numbers in the lines indicate compliance. The number of names and telephone numbers is guaranteed to be the same.

function printContactsInfo (names, phones) {
 const namesArr = names.split (',');
 const phonesArr = phones.split (',');

 for (let i = 0; i <namesArr.length; i + = 1) {
   console.log (`$ {namesArr [i]}: $ {phonesArr [i]}`);
  }
}

printContactsInfo (
 'Jacob, William, Solomon, Artemis',
 '89001234567,89001112233,890055566377,890055566300'
);

// =================================
// Example 6 - Search for the largest element
// Write the findLargestNumber (numbers) function that looks for the largest number in the array.

function findLargestNumber (numbers) {
 let res = numbers [0];

 for (const num of numbers) {
   if (num> res) {
     res = num;
    }
  }

 return res;
}

console.log (findLargestNumber ([2, 17, 94, 1, 23, 37])); // 94
console.log (findLargestNumber ([49, 4, 7, 83, 12])); // 83

// =================================
// Example 7 - Average value
// Write a calAverage () function that takes an arbitrary number of arguments and returns their average value. All arguments will be numbers only.

function calAverage () {
 let sum = 0;

 for (const number of arguments) {
   sum + = number;
  }

 return sum / arguments.length;
}

console.log (calAverage (1, 2, 3, 4)); // 2.5
console.log (calAverage (14, 8, 2)); // 8
console.log (calAverage (27, 43, 2, 8, 36)); // 23.2

// =================================
// Example 8 - Time formatting
// Write a function formatTime (minutes) which will translate the value of minutes (number of minutes) into a string in the format of hours and minutes HH: MM.

function formatTime (totalMinutes) {
 const hours = Math.floor (totalMinutes / 60);
 const minutes = totalMinutes% 60;

 const doubleDigitHours = String (hours) .padStart (2, 0);
 const doubleDigitMinutes = String (minutes) .padStart (2, 0);

 return `$ {doubleDigitHours}: $ {doubleDigitMinutes}`;
}

console.log (formatTime (70)); // "01:10"
console.log (formatTime (450)); // "07:30"
console.log (formatTime (1441)); // "24:01"

// =================================
// Example 9 - Collection of courses (includes, indexOf, push, etc.)
// Write functions for working with a collection of training courses:

// addCourse (name) - adds the course to the end of the collection
// removeCourse (name) - removes the course from the collection
// updateCourse (oldName, newName) - changes the name to the new one
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse (name) {
 if (courses.includes (name)) return;

 courses.push (name);
}

function removeCourse (name) {
  const idx = courses.indexOf (name);

  if (idx! = -1) {
    courses.splice (idx, 1);
  } else {
  console.log ('Course with this name not found');
  }
}

function updateCourse (oldName, newName) {
 const idx = courses.indexOf (oldName);

 if (idx! = -1) {
   courses.splice (idx, 1, newName);
  } else {
    console.log ('Course with this name not found');
  }
}

addCourse ('Express');
console.log (courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

addCourse ('CSS'); // 'You already have such a course'
console.log (courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express', 'CSS']

removeCourse ('React');
console.log (courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse ('Vue'); // 'Course with this name not found'
console.log (courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']

updateCourse ('Express', 'NestJS');
console.log (courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// ====== question =======
function findLongestWord (text) {
 let textArr = text.split ('');
 let result = textArr [0];

 for (const word of textArr) {
   if (word.length> result.length) {
    result = word;
    }

// result = word.length> result.length? word: result;
  }

  return result;
}

console.log (
 findLongestWord ("I done it. But I can't understand how it works.")
);

// ======= excercise ========
// How to find two identical numbers in two different arrays?

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [34, 54, 1, 456, 3, 675, 234, 87, 6];
const res = [];

for (const number of arr1) {
 if (arr2.includes (number)) {
   res.push (number);
  }
}

console.log (res);

// ===== excercise ======
find duplicates

const arr1 = [1, 2, 3, 2, 4, 5, 1, 6]; // [1, 2];
