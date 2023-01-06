const newYork = {city: "New York"};
const nola = {city: "New Orleans"};
const chicago = {city: "Chicago"};
const losAngeles = {city: "Los Angeles"};


const cities = new WeakMap();
cities.set(newYork, "Big Apple");
cities.set(nola, "New Orleans");
cities.set(chicago,"Chicago");
cities.set(losAngeles, "LA");

//Create a WeakMap using the provided variables as keys.
//Set the value to whatever term you think of when you hear
//those cities. The value can be anything. Hint: use set()

//Get the value associated with the key: nola.
const keyNola = cities.get(nola);
console.log("Get the value associated with the key:", keyNola);
//Get the value associated with the key: dallas.
const dallas = {city: "Dallas"};
const dalasValue = cities.get(dallas);
console.log("Get the value associated with the key:", dalasValue);

//Does this WeakMap have the key: newYork?
const hasNewYork = cities.has(newYork);
console.log("Does our Weak map has NewYork?", hasNewYork);
//Delete the following key from your WeakMap: chicago
cities.delete(chicago);