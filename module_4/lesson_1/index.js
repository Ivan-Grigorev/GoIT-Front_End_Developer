console.log('module 04.1');

function fn() {
console log('hello');
}

fn();

const fn = () => {
console log('hello');
};

fn();

const numbers = [5, 10, 15, 20, 25];

for (const number of numbers) {
console log(number);
}

numbers.forEach(function (number) {
console log(number);
});

numbers.forEach((number) => {
console log(number);
});

const myFn = (number) => console.log(number);

numbers.forEach((number) => console.log(number));

// ------ map -------
const numbers = [5, 10, 15, 20, 25];
console log(numbers);

x2 -> [10, 20, 30, 40, 50]
const new Arr = [];

numbers.forEach((number) => {
newArr.push(number * 2);
});

console.log(newArr);

x + 5 -> [10, 15, 20, 25, 30]
const newArr2 = [];

numbers.forEach((number) => {
newArr2.push(number + 5);
});

console.log(newArr2);

x10 -> [...]
const newArr3 = [];

numbers.forEach((number) => {
newArr3.push(number * 10);
});

console.log(newArr3);

// ===== map =====
const numbers = [5, 10, 15, 20, 25];
console log(numbers);

const x2 = (number) => number * 2;
const xPlus5 = (number) => number + 5;

const map = (arr, callback) => {
const new Arr = [];

arr.forEach((item) => newArr.push(callback(item)));

return new Arr;
};

console.log(map(numbers, x2)); // x2 -> [10, 20, 30, 40, 50]
console.log(map(numbers, xPlus5)); // x + 5 -> [10, 15, 20, 25, 30]
console.log(map(numbers, (number) => number * 10)); // x10

console log(
map(
['www.google.com', 'www.facebook.com', 'www.amazon.com'],
(url) => `<a href='${url}'>${url}</a>`
)
);

<a href='www.google.com'>www.google.com</a>
<a href='www.facebook.com'>www.facebook.com</a>

// ===== find =====
const find = (arr, callback) => {
for (const item of arr) {
if (callback(item)) {
return item;
}
}
};
const users = [
{ name: 'Bobby', age: 15 },
{ name: 'Peter', age: 20 }, // <--
{ name: 'Chris', age: 25 },
];

console log(
find(users, function (item) {
return item.name === 'Bobby';
})
);

console.log(find(users, (item) => item.name === 'Bobby'));
console.log(find(users, (item) => item.name === 'Peter'));
console.log(find(users, (item) => item.age === 25));

console.log(find([1, 2, 3, 4, 5], (number) => number > 3));
console.log(find([1, 2, 3, 4, 5], (number) => number % 5 === 0));

// ==== filter ====
const filter = (arr, callback) => {
const new Arr = [];

arr.forEach((item) => {
if (callback(item)) {
newArr.push(item);
}
});

return new Arr;
};

const users = [
{ name: 'Bobby', age: 15 },
{ name: 'Peter', age: 20 },
{ name: 'Chris', age: 25 },
{ name: 'Brown', age: 55 },
];

console.log(filter(users, (user) => user.age < 25));
console.log(filter(users, (user) => user.age > 20));
console.log(filter(users, (user) => user.name[0] === 'B'));

// ===== closures =====
function fn(name) {
return function() {
console.log(name);
};
}

let x = 'Bobby';

const closuredName = fn(x);
closureName();

x = 'Peter';
closureName();

// ===== closure counter =====
function Counter(initialValue = 0) {
let x = initialValue;

return function() {
console.log((x += 1)); // 1, 2, 3, 4
};
}

const counter1 = Counter();
counter1(); // one
counter1(); // 2
counter1(); // 3

const counter2 = Counter(10);
counter2(); // eleven
counter2(); // 12
counter2(); // 13

// ===============================
// Example 4 - Arrow functions
// Refactor code using arrow functions.

const createProduct = (partialProduct, callback) =>
callback({ id: Date.now(), ...partialProduct });

const logProduct = (product) => console.log(product);

const logTotalPrice = (product) =>
console.log(product.price * product.quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// ==================================
// Example 6 - Inline Arrow Functions
// Refactor code using arrow functions.

const map = (array, callback) => {
const new Arr = [];
for (const el of array) {
newArr.push(callback(el));
}
return new Arr;
};

console.log(map([64, 49, 36, 25, 16], (value) => value * 2));
console.log(map([64, 49, 36, 25, 16], (value) => value - 10));
console.log(map([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// =================================
// Example 7 - The forEach method
// Refactor the code using the forEach method and arrow functions.

const logItems = (items) => {
console log(items);
items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ===================================
// Example 8 - forEach method
// Refactor the code using the forEach method and arrow functions.

function printContactsInfo({ names, phones }) {
const nameList = names.split(',');
const phoneList = phones.split(',');

// nameList.forEach((name, idx) => console.log(`${name}: ${phoneList[idx]}`));
nameList.forEach((_, idx) =>
console.log(`${nameList[idx]}: ${phoneList[idx]}`)
);
}

printContactsInfo({
names: 'Jacob,William,Solomon,Artemis',
phones: '89001234567,89001112233,890055566377,890055566300',
});

// ====================================
// Example 9 - forEach method
// Refactor the code using the forEach method and arrow functions.

function calculateAverage(...args) {
let total = 0;

args.forEach((item) => (total += item));

return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // eight
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// ===== example ======
const makeSheff = function (name) {
return function (dish) {
console. log(`${name} cooking ${dish}`);
};
};

const mango = makeSheff('Mango');
mango('pirozok');

const bobby = makeSheff('Bobby');
bobby('palianycia');
