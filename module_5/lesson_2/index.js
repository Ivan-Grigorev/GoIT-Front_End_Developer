console.log('module 05.2');

class Human {
  #age = 0;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    this.#age = newAge;
  }
}

const bobby = new Human('Bobby', 15);
bobby.age = 16;

console.log(bobby.#age);

// ----- account ------
class Account {
  #balance = 0;

  constructor(balance) {
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  set balance(newBalance) {
    if (newBalance < 0) return;

    this.#balance = newBalance;
  }
}

const deposit = new Account(1000);
console.log(deposit.balance);

deposit.balance = 500;
console.log(deposit.balance);

deposit.balance = -100;
console.log(deposit.balance);

// ------ private old -------
class Account {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    if (newBalance < 0) return;

    this._balance = newBalance;
  }
}

const deposit = new Account(1000);
console.log(deposit._balance); // this.balance
console.log(deposit.balance); // getter

// ---- prototype ----
class Human {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello my name is ${this.name}`);
  }
}

class Doctor extends Human {
  constructor(name, age, x) {
    super(name, age);

    this.x = x;
  }

  sayHello() {
    console.log(`Hello my name is ${this.name}, I can heal`);
  }
  heal() {
    console.log('I can heal');
  }
}

const bobby = new Human('Bobby', 15);
const house = new Doctor('dr.House', 50);

console.log(house);
house.sayHello(); // Doctor
house.__proto__.__proto__.sayHello();

// --- closure ---
function Counter(x) {
  return function () {
    console.log(x++);
  };
}

const counter1 = new Counter(10);

counter1();
counter1();
counter1();
counter1();

counter1.x = 50;
counter1();

console.log(counter1.x);
counter1();

// ---- currying ----
sum(1); // 1
sum(1)(2); // 3
sum(1)(2)(1)(1)(1); // 6

// ========================================
// Example 1 - Blogger
// Write a Blogger class to create a blogger object with the following properties:

// email - mail, string
// age - age, number
// numberOfPosts - number of posts, number
// topics - an array of topics the blogger specializes in
// The class expects one parameter - a settings object with properties of the same name.

// Add a getInfo() method that returns the string: User ${email} is ${age} years old and has ${number of posts} posts.
// Add the updatePostCount(value) method, which in the value parameter takes the number of posts that the user needs to add.

class User {

  constructor({ name, age, numberOfPosts, topics }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new User({
  name: 'mango@mail.com',
  age: 24
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});

console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new User({
  name: 'poly@mail.com',
  age: 19
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});

console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// =================================
// Example 2 - Storage
// Write a Storage class that creates objects to manage a warehouse of goods. When called, it will receive one argument - the initial array of goods, and write it to the items property.
// Add class methods:

// getItems() - returns an array of items.
// addItem(item) - gets a new item and adds it to the current ones.
// removeItem(item) - gets the item and, if it exists, removes it from the current items.

class Storage {
  
  constructor(items) {
  this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item !== name);
  }
}

const storage = new Storage(['apple', 'lemon', 'grape', 'peach']);

const items = storage.getItems();
console.table(items); // [ 'apple', 'lemon', 'grape', 'peach' ]

storage.addItem('banana');
console.table(storage.items); // [ 'apple', 'lemon', 'grape', 'peach', 'banana' ]

storage.removeItem('lemon');
console.table(storage.items); // [ 'apple', 'grape', 'peach', 'banana' ]

// =====================================
// Example 3 - User
// Write a User class that creates an object with login and email properties. Declare private properties #login and #email, which can be accessed via getter and setter login and email.

class User {
  #login;
  #email;

  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(value) {
    this.#login = value;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango -> getter
mango.login = 'Mangodoge'; // -> setter
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie

// ====================================
// Example 4 - Notes
// Write a Notes class that manages the collection of notes in the items property. A note is an object with text and priority properties. Add a static Priority property to the class, which will store the object with priorities.
// {
// LOW: 'low',
// NORMAL: 'normal',
// HIGH: 'high'
// }
// Add methods addNote(note), removeNote(text) and updatePriority(text, newPriority).

class notes {

  static Priority = {
    LOW: 'low', 
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(items = []) {
    this.items = items;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    this.items = this.items.filter((item) => item.text !== text);
  }

  updateNote(text, priority) {
    this.items = this.items.map((item) =>
      item.text === text
      ? {...item, priority,} : item);
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'My second note',
  priority: Notes.Priority.NORMAL,
});

console.log(myNotes.items);

myNotes.removeNote('My first note');
console.log(myNotes.items);

myNotes.updateNote('My second note', Notes.Priority.HIGH);
console.log(myNotes.items);

// ======================================
// Example 5 - Toggle
// Write a Toggle class that takes an {isOpen: boolean} settings object and declares one on property - the on/off state (true/false). By default, the value of the on property should be false.

class Toggle {
  
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

const firstToggle = new Toggle({ isOpen: true });
console group('firstToggle');
console.log(firstToggle.on);
firstToggle. toggle();
console.log(firstToggle.on);
firstToggle. toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle. toggle();
console.log(secondToggle.on);
secondToggle. toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
