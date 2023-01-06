const me = ['Georg', '36 år', 'blue'];
console.log(me)

const my_array = [1,2,3,4];
my_array.push(10); /// [1, 2, 3, 4, 10]
my_array.unshift(11); // [11, 1, 2, 3, 4, 10] unshift - push in start.
my_array.push(12); // [11, 1, 2, 3, 4, 10, 12] push - push in end.
console.log(my_array); // [11, 1, 2, 3, 4, 10, 12]

const shifted = my_array.shift(); // shift - removes first and return that
const pushed = my_array.pop(); // pop - removes last - returns it.
console.log('shifted', shifted); // 11
console.log('pushed', pushed); // 12
console.log(my_array); // [1, 2, 3, 4, 10]

const sliced = my_array.slice(1, 3); //[2,3] - slice(startIndex, endIndex - 1)
console.log('sliced', sliced);

const numbers = [1,2,3,4,5,6];
const newNumbers = numbers.slice(-3);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log('numbers, sliced -3', newNumbers); // [4, 5, 6]

numbers.splice(2,1,7,8); //splice(startIndex, how many to delete, add this, add this, ..etc)
console.log('numbers spliced - alters original array', numbers); // [1, 2, 7, 8, 4, 5, 6]

const my_array2 = ["Hey", "Hi", "Hello"];
console.log(my_array2.toString()); //Hey,Hi,Hello

console.log(my_array.join(" - ")); //Hey - Hi - Hello

const atext = "Hello, it's nice to see you here.";
const words = atext.split(" ");
console.log(words); //['Hello,', "it's", 'nice', 'to', 'see', 'you', 'here.']

const arr1 = [1, 2, 3, 4];
const arr2 = [11, 12, 13];
const arr3 = [5, 6, 7];
const final = arr1.concat(arr2, arr3);
console.log(final); //[1, 2, 3, 4, 11, 12, 13, 5, 6, 7]

const final2 = [...arr1, ...arr2, ...arr3];
console.log(final2);

//iterator methods:

const numbers2 = [1,2,3,4,5,6];

//map
const newNumbers2 = numbers2.map(myFunction);
console.log(numbers2); //[1, 2, 3, 4, 5, 6]
console.log('map - numbers * 2',newNumbers2); //[2, 4, 6, 8, 10, 12]
function myFunction(value) {
    return value * 2;
}

//foreach
numbers.forEach(callback);
function callback(value, index, array) {
    return console.log("value: ", value, "index: ", index);
}

//filter
const even = numbers2.filter(isEven);
console.log(numbers2); //[1, 2, 3, 4, 5, 6]
console.log('filtered value % 2 - even', even); //[2, 4, 6]
function isEven(value) {
    return value % 2 == 0;
}

//reduce
const sum = numbers2.reduce(add);
console.log(numbers2); //[1, 2, 3, 4, 5, 6]
console.log('reduced - total + value', sum); //21
function add(total, value) {
    return total + value;
}

//multideimentional arrays:

const numbers2d = [[0,1,2], [1,2,3], [1,2,4]];
const numbers3d = [[[0],[1],[2,3]], [[0, 1],[2,3]], [[1],[1],[2,3]], [[1, 5],[2,3]]];
console.log(numbers2d[0][1]); //1
console.log(numbers3d[0][0][0]); //0

console.log('2d',numbers2d);
const flattened = numbers2d.flatMap(arr=>arr); //combination of map()  and flat()

console.log('flattend 2d', flattened);

console.log('3d',numbers3d);
const flattened3d = (numbers3d.flat()).flat();
console.log('flattened3d', flattened3d)
