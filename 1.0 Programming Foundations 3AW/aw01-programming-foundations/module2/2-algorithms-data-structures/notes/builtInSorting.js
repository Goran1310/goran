// Sort -alphabetical

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange'] //smallest first
fruits.reverse();
console.log(fruits); // ['Orange', 'Mango', 'Banana', 'Apple'] //biggest first

const numbers = [0, 1, 11, 12, 2, 55, 4];

console.log(numbers); // [0, 1, 11, 12, 2, 4, 55] // alphabetical fucks up.

// > 0	sort a after b
// < 0	sort a before b
// === 0	keep original order of a and b

numbers.sort((a, b) => a - b);

console.log(numbers); //  [0, 1, 2, 4, 11, 12, 55]
