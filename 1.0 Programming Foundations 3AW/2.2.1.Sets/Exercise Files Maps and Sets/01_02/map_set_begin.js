//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

//Create a new Map() and add each to-do as a key-value pair.

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

const noon = saturday.get(12);
console.log("what I do at 12 in Saturday");
const nine = saturday.get(8);
console.log("What I am doing in 9 Sat?");
