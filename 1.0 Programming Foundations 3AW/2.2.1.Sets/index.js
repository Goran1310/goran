// const { listenerCount } = require("npm");

// const letters = new Set(["a","b","c"]);
// for (const x of letters.values()) {
//   console.log(x);
// }

// const meals = new Map();

// meals.set('🍎','breakfast')
// meals.set('🥐','lunch')
// meals.set('🥑','dinner')
// meals.set('🥕','dessert')


// const menu = new Map([
//     ["Margarita", 9],
//     ["Pepperoni", 10],
//     ["Salami", 10]
//   ]);
// menu.forEach (function(value, key) {
//     console.log("Dish: " + key + ", Price: " + value);
// })

// // List all entries
// let text = "";
// for (const x of menu.entries()) {
//   text += x;
//   console.log(text);
// }

// Create a Set
const letters = new Set();
// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
letters.add("e");
// Let's access "c" via variable
const c = "c"
// Remove c from the Values
letters.delete(c);
// Check if our set contains "c"
console.log(letters.has("c"));
// Check the size of our set
console.log(letters.size);
// Print out what is in set
console.log(letters);
// Like with arrays, we can use iteration methods on sets! Let’s print all elements from our set in the console:
// const letters = new Set(["a","b","c"]);
letters.forEach (function(value) {
    console.log(value);
})

for (const x of letters.values()) {
    console.log(x);
}
// We can also access all values from the set with the set iterator. We can get it from the values() method. Let’s use the for-of loop and the set iterator to do the same thing as in the previous exercise:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
