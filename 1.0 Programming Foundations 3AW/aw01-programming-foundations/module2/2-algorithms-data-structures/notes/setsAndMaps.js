//set and map. all elements within should be unique.
//can't add duplicates

//---------- Set --------------

//create a Set:
const letters = new Set(["a", "b", "c", "d"]); // must pass array as arguments

// add(value) method:
letters.add("t").add("k");

console.log(letters); // Set(6) {'a', 'b', 'c', 'd', 't', 'k'}

// has(value) method:
console.log(letters.has("b")); // true

// delete(value) method:
letters.delete("a");
console.log(letters); // Set(5) {'b', 'c', 'd', 't', 'k'}

// size property:
console.log(letters.size); // 5

//sets are iterable:
letters.forEach((item) => console.log(item));

// value() method:
console.log(letters.values()); // SetIterator {'b', 'c', 'd', 't', 'k'}

for (const letter of letters.values()) {
  console.log(letter);
}

//---------- Map --------------
//key points to a value, but they can be unordered in the Map.

//initiate new map:
const meals = new Map();

//set method - can chain together:
meals
  .set("🍎", "breakfast")
  .set("🍕", "lunch")
  .set("🍔", "dinner")
  .set("🍪", "dessert");
console.log(meals); // Map(4) {'🍎' => 'breakfast', '🍕' => 'lunch', '🍔' => 'dinner', '🍪' => 'dessert'}

//new example - always provide two entries: (key, value)
const myArray = [
  ["Margarita", 9],
  ["Pepperoni", 10],
  ["Salami", 10],
];

const menu = new Map(myArray);

console.log(menu); // Map(3) {'Margarita' => 9, 'Pepperoni' => 10, 'Salami' => 10}

//get(key) method:
menu.get("pepperoni"); // 10

//set(key, value) method:
menu.set("kiwi", 5);
console.log(menu); // Map(4) {'Margarita' => 9, 'Pepperoni' => 10, 'Salami' => 10, 'kiwi' => 5}

//has(key) method:
menu.has('kiwi') // true

//size property:
menu.size // 4

//forEach - value comes first for some reason:
menu.forEach((value, key) => {
  console.log("key", key, " value", value);
});
// key Margarita  value 9
// key Pepperoni  value 10
// key Salami  value 10
// key kiwi  value 5

//values() method - insertion order:
for (value of menu.values()) {
  console.log(value);
}
// 9
// 10
// 10
// 5

//keys() method - insertion order:
for (key of menu.keys()) {
  console.log(key, menu.get(key));
}
// Margarita 9
// Pepperoni 10
// Salami 10
// kiwi 5

//entries() method - array of [key, value] pairs in order of insertion:
for (const entry of menu.entries()) {
  console.log(entry, Array.isArray(entry));
}
// (2) ['Margarita', 9] true
// (2) ['Pepperoni', 10] true
// (2) ['Salami', 10] true
// (2) ['kiwi', 5] true



//the Map is iterable with forOf also without entries() method?? - not by order of insertion maybe??
for (const entry of menu) {
  console.log(entry, Array.isArray(entry));
}
// (2) ['Margarita', 9] true
// (2) ['Pepperoni', 10] true
// (2) ['Salami', 10] true
// (2) ['kiwi', 5] true

//clear() method
menu.clear()
console.log(menu) // Map(0) {size: 0}

// Maps can be merged:
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos'],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);