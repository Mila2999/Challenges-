'use strict';

const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,
  // new syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // old syntax
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta wiht ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngrediens) {
    console.log(mainIngredient);
    console.log(otherIngrediens);
  },
};

//118 maps iteration
// creating maps of array
const question = new Map([
  ['question', 'What is the best programing language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🥳'],
  [false, 'Tray again!'],
]);
console.log(question);
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Enter your answer'));
const answer = 3;
const message = question.get(question.get('correct') === answer);
console.log(message);

//Convert map to the array
console.log([...question]);
console.log([...question].length);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/*
////////////////////////
//117 Maps
//1 creating empty map
const rest = new Map();
rest.set('name', 'Classico Italiano');
//2 filld map
rest.set(1, 'Firenze, Itali');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);
// 3 chain next
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are  closed :(');
//4 read data from map: get()method
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
// example
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//4 Check if map contain sertain key has(key) metod
console.log(rest.has('categories'));
//5 Delete element from map delete(key) metod
console.log(rest.delete(2));
//rest.clear();
// 6
console.log(rest.size);
//7 array as the keys
//get data from array
const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arr));

/*
////////////////////////
//116 Set ()constructor
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(new Set('Jonas'));
//What we can do with set
//1 Size
console.log(orderSet.size);
//2 Check if sertain element in a set
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
//3 Add new element to the set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
//4 Delete element
orderSet.delete('Risotto');
//5 dellete all element
//orderSet.clear();
console.log(orderSet);
//6 iterabling set
for (const order of orderSet) console.log(order);

//Use case , remuve duplicate from array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
const staffUniqueArr = [...new Set(staff)];
console.log(staffUniqueArr);
console.log(staffUnique);
// how mani unique position
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// 114 Lopping property names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entries = property + value together in objekt return the key and the value
const entries = Object.entries(openingHours);
// console.log(entries);
for (const [day, { open, close }] of entries) {
  console.log(` On ${day} we are open at ${open} and we close at ${close}`);
}
// [key, value] if you not need destruckt objekt
/*
//113 Optional chaining(?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon.open); // error
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// WITH Optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// real app of optional chain exemple
const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'cloused';
  console.log(`On ${day}, we open at ${open}`);
}
// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Mila', email: 'mila.savonik@gmail.com' }];
// const users = [];
console.log(users[0]?.name ?? 'User array empty');

// old way
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/
/*
//111 ForOF loop JS 6
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  // console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log(menu.entries());
console.log([...menu.entries()]);

// destructuring array of entries metod, to get index and element itself
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
/*
///////////////////////////////////////
// Destructuring objects wiht function

restaurant.orderDelivery({
  time: '23:30',
  address: 'Geula 6,1',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Bugrashov 18,4',
  starterIndex: 1,
});
// Logical assaigment operator
const rest1 = {
  name: 'Milander',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'Claro',
  owner: 'Andrey Kishtov',
};
// OR assigment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
*/
/*
// Nullish assigment operator(null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assigment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

// Nullish conlessing operator (NOT 0 or '')
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/*
//Short circuling
// || or and && can use any data type , return any data type, short circut avaluation
console.log('----OR----');
console.log(3 || 'Mila');
console.log('' || 'Mila');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
restaurant.numGuests = 0; will give a defualt value
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----And----');
console.log(0 && 'Mila');
console.log(7 && 'Mila');
console.log('Mila' && 23 && null && 'Hello');

// Practical exemple
if (restaurant.orderPizza) {
  restaurant.orderPizza('mashrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mashrooms', 'spinach');
*/

/*
//1) Destracturing
// REST in Arrays
// SPRED,becose of RIGHT sida of =
const arr1 = [1, 2, ...[3, 4]];

// REST , becouse of LEFT side of =
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Rest in Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(4, 5, 6, 7, 8);
add(7, 8, 9, 3, 4, 5, 9, 8);

const x = [1, 3, 3];
add(...x);

restaurant.orderPizza('mashrooms', 'olives', 'onion', 'spinath');
restaurant.orderPizza('mashrooms');
*/

////////////////////////////
/*
//Spread operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
 const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays together
 const menuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
 console.log(menuCopy);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Mila';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log(`${...str} Savonik`);// NOT work

real world example
const ingrediens = [
 prompt("Let's make pasta! Ingrediant 1?"),
 prompt('Ingrediant 2?'),
 prompt('Ingrediant 3?'),
];
console.log(ingrediens);
call function
restaurant.orderPasta(ingrediens[0], ingrediens[1], ingrediens[2]); // old way, manually
restaurant.orderPasta(...ingrediens); // same result

// Objects spread operator
const newRestaurant = {
  foundingIn: 2021,
  ...restaurant,
  founders: 'Mila and Andrey Kishtov',
};
console.log(newRestaurant);

// Copy objeckts spread operator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Milander';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Objekt destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const { fri } = openingHours;
console.log(fri);
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
Assain differen value
const { sat } = openingHours;
console.log(sat);
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
///////////////////
/*
//Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// mutating variable in array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swiching varibels
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Defoult values
const [p, q, r] = [8, 9]; // we dont know the array
console.log(p, q, r);
*/
