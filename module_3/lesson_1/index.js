console.log ('module 03.1');

// ==== question ====
const book = {
 title: 'The Last Kingdom',
 author: 'Bernard Cornwell',
};

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'ru'];

// ==== hasOwnProperty ====
const animal = {
 legs: 4,
};

const dog = Object.create (animal);
dog.name = 'Mango';
dog.legs = 5;

console.log (dog.hasOwnProperty ('legs'));

// ==== example ====
const user = {
 name: 'Jacques Gluke',
 tag: 'jgluke',
 location: {
   country: 'Jamaica',
   city: 'Ocho Rios',
  },
 hobbies: ['swiming', 'music', 'sci-fi'],
};

const location = user.location;
console.log (location); // Object location

const country = user.location.country;
console.log (country); // 'Jamaica'

// ==== object =====
// 1. When it is after the =, for example:
const x = {}; // - literal of the object.

// 2. When you are passing arguments in the
function fn (obj) {
 console.log (obj);
}

// 3. Or When you are returning literal in the function:
const rtf = function () {
  const x = {};

  return x;
};

// ------------------------------------------------ -----
// Example 1 - Fundamentals of objects
// Write a script that, for the user object, sequentially:

// adds mood field with value 'happy'
// replaces hobby with 'skydiving'
// replaces the premium value with false
// outputs the contents of the user object in key: value using Object.keys () and for ... of
// Code

const user = {
 name: 'Mango',
 age: 20,
 hobby: 'html',
 premium: true,
};

// adds a mood field with the value 'happy'
user ['mood'] = 'happy';

// replaces hobby with 'skydiving'
user.hobby = 'skydiving';

// replaces the premium value with false
user.premium = false;

const keys = Object.keys (user);

for (const key of keys) {
 console.log (`${key}: ${user [key]}`);
}

for (const item of Object.entries (user)) {
 console.log (`$ {item [0]}: $ {item [1]}`);
}

for (const key in user) {
 console.log (`$ {key}: $ {user [key]}`);
}

console.log (user);

// ===== for ... in =====
const animal = {
 legs: 4,
};

const dog = Object.create (animal);
dog.name = 'Mango';

// all keys
for (const key in dog) {
 console.log (key);
}

// only own keys
for (const key of Object.keys (dog)) {
 console.log (key);
}

// ------------------------------------------------ -----
// Example 2 - method Object.values()
// We have an object where our team's salaries are stored. Write a code to sum all salaries and save the result in the sum variable. It should turn out 390. If the salaries object is empty, the result should be 0.
// Code;

function getSalariesSum (salaries = {}) {
 let sum = 0;

 for (const salary of Object.values(salaries)) {
    sum + = salary;
  }

 return sum;
}

console.log (
getSalariesSum ({
  John: 100,
  Ann: 160,
  Pete: 130,
  })
);

console.log (getSalariesSum ({}));

console.log (getSalariesSum ());

// ------------------------------------------------ -----
// Example 3 - Array of objects
// Write a calcTotalPrice (stones, stoneName) function that takes an array of objects and a string with the name of the stone. F-tion calculates and returns the total cost of stones with such name, price and quantity from the object
// Code

function calcTotalPrice (stones, stoneName) {
 for (const item of stones) {
   if (item.name === stoneName) {
      return item.price * item.quantity;
    }
  }

 return 0;
}

const stones = [
 {name: 'Emerald', price: 1300, quantity: 4}, // 5200
 {name: 'Diamond', price: 2700, quantity: 3},
 {name: 'Sapphire', price: 400, quantity: 7},
 {name: 'Щебень', price: 200, quantity: 2}, // 400
];

console.log (calcTotalPrice (stones, 'Emerald'));
console.log (calcTotalPrice (stones, 'Crushed'));
console.log (calcTotalPrice (stones, 'sdgsfg'));

// ------------------------------------------------ -----
// Example 4 - Complex problems
// Write a script for managing the personal account of the Internet bank. There is an account object in which it is necessary to implement methods for work with balance and history of transactions.

// *
// * There are only two transactional types.
// * You can put or withdraw money from the account.
// * 
const Transaction = {
 DEPOSIT: 'deposit',
 WITHDRAW: 'withdraw',
};

// *
// * Each transaction is an object with properties: id, type and amount
// * 

const account = {
 // Current account balance
 balance: 0,

 // Transaction history
transactions: [],

// *
// * The method creates and returns a transaction object.
// * Accepts the amount and type of transaction.
// * 
createTransaction (amount, type) {
 return {
   id: this.transactions.length,
   amount, // amount: amount,
   type, // type: type,
   date: Date.now (),
   };
},

// *
// * The method responsible for adding the amount to the balance.
// * Accepts the amount of the transaction.
// * Invokes createTransaction to create a transaction object
// * then adds it to the transaction history
// * 
deposit (amount) {
 this.balance + = amount;

 const newTranslation = this.createTransaction (amount, Transaction.DEPOSIT);

 this.transactions.push (newTranslation);
},

// *
// * The method responsible for withdrawing the amount from the balance.
// * Accepts the amount of the transaction.
// * Invokes createTransaction to create a transaction object
// * then adds it to the transaction history.
// *
// * If the amount is greater than the current balance, display a message
// * that withdrawal of such an amount is not possible, not enough funds.
// * 
withdraw (amount) {
 if (amount> this.balance) {
   console.log ('no money :(');
  } else {
  this.balance - = amount;

   const newTranslation = this.createTransaction (
    amount,
    Transaction.WITHDRAW
);

this.transactions.push (newTranslation);
  }
},

// *
// * The method returns the current balance
// * 
getBalance () {
  return this.balance;
},

// *
// * The method searches for and returns a transaction object by id
// * 
getTransactionDetails (id) {
 for (const item of this.transactions) {
   if (item.id === id) {
     return item;
    }
  }
},

// *
// * The method returns the amount of funds
// * a specific transaction type from the entire transaction history
// * 
getTransactionTotal (type) {
 let sum = 0;

 for (const item of this.transactions) {
   if (item.type === type) {
    sum + = item.amount;
    }
  }

  return sum;
  },
};

console.log (account.balance); // 0

account.deposit (100);
account.deposit (50);
console.log (account.balance); // 100

account.withdraw (140);
account.withdraw (50);
console.log (account.balance); // 10

console.log (account.transactions);

console.log (account.getTransactionDetails (2));
console.log (account.getTransactionDetails (20));

console.log (account.getTransactionTotal (Transaction.DEPOSIT));
console.log (account.getTransactionTotal (Transaction.WITHDRAW));

// ================= GAME =================
const COUNT_LIMIT = 5;
const x = Math.floor (Math.random () * 100) + 1;
let userInput;
let count = 0;
console.log (x);

do {
 userInput = Number (prompt ('Enter your number'));
 count + = 1;

 if (userInput > x) {
   console.log (`$ {userInput}> x`);
   }
 if (userInput < x) {
   console.log(`$ {userInput} < x`);
   }
  } while (userInput! == x && count! = COUNT_LIMIT);

 if (userInput === x) {
   console.log ('Hurray !!!');
  } else {
  console.log (count);
 }
