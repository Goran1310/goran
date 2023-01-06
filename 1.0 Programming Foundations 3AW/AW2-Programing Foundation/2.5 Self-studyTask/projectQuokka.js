//1. Create a ‘Hello’ function, that returns ‘Hello world’.
function hello () {
    return "Hello World";
}
console.log(hello());
//2.Define two functions. The first function a should return ‘Hello a!’ and the second function should return ‘Hello b!’
function first () {
    return "Hello a!";
}
console.log(first());
function second () {
    return "Hello b!";
}
console.log(first() + " " + second());
//3. Write a function ‘Greet’ that takes one parameter and returns the 'Hello <parameter>!'
function greet(name){
    return ("Hello "+ name);
}
console.log(greet("Johanes"));
//4.Write a function ‘Log’ that takes a parameter and logs it.
function log (name) {
    console.log(`Hi ${name},`);
}
log();
// 5 Write a function ‘MyStringFunction’ that takes a string and returns the number of characters in that string. (Make use of string.length).
function MyStringFunction () {
    let string = "function that takes a string and returns the number of characters in that string.";
console.log(string.length);
} 
MyStringFunction();
// 6. Write a function ‘Upper’ that takes a string and returns the uppercase of the string.
function MyStringFunction1 () {
    let string = "function that takes a string and returns the number of characters in that string.";
console.log(string.toLocaleUpperCase());
}
MyStringFunction1();
// 7 Write a function ‘Add’ that takes two numbers and returns their sum.
let add = function() {
    var sum = 0;
    for (let i = arguments.length - 1; i >= 0; i--) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(2,5));
// 8 Write a function ‘Modulo’ that takes a natural number and a dividend and returns the remainder of the modulo (%) of the two numbers.
function modulo(num, dividend) {
    let result = num % dividend;
    return result;
}
console.log(modulo(9,2));
// 9 Write a function ‘MinMax’ that finds the min and max numbers of an array of numbers.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const tableCount = 7;
let tableSizes = Array.from(Array(tableCount).keys()).map( () => getRandomInt(2, 10)); //declares how many people can seat at table of certain index
console.log(tableSizes);
console.log(Math.min(...tableSizes));
console.log(Math.max(...tableSizes));

// 10 Write a function ‘Parse’ that takes a string (‘20’) and a number (5) 
//and returns the multiplication of the string and the number (use the parseInt function to read the string as a number).
function parse() {
    let one = '20';
    let oneN = parseInt(one);
    let two = 5;
    console.log(oneN);
    console.log(one * two);
}
parse();
// 11. Write a function that accepts two numbers and checks if the numbers are equal. 
//After the condition is checked, log an appropriate message to the console.
function equal() {
    let eleven = prompt("Please input first number from 0-10!");
    let elevenSecond = prompt("Please input second number from 0-10!");
    console.log(eleven);
    console.log(elevenSecond);
    if (eleven == elevenSecond) {
        console.log("numbers are equal")
    } else {
        console.log("numbers are NOT equal")
    }
};
// equal();
// 12. Write a function ‘toArray’ that accepts four values and returns an array of these values.
function toArray() {
    let eleven1 = prompt("Please input first number from 0-10!");
    let eleven2 = prompt("Please input first number from 0-10!");
    let eleven3 = prompt("Please input first number from 0-10!");
    let eleven4 = prompt("Please input first number from 0-10!");
    let eleven5 = [...eleven1, ...eleven2, ...eleven3, ...eleven4];
    console.log(eleven5);
}
//toArray()
// 13 🧰 Write a function ‘ArrayLength’ that takes an array of values and returns the array’s length.
function ArrayLength() {
    let abc = [];
    let randomNumber = Math.floor(Math.random() * 10);
    abc = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, randomNumber);
    console.log(abc);
    console.log(randomNumber);
    const abcArray = [...abc, ...'😋'];
    console.log(abcArray);
    console.log("#13:       " + abcArray.length);
}
ArrayLength();
// https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/

// 14 Write a function ‘ArraySort’ that takes an array of values and returns a sorted array. 
//(Make use of the sort() function).
function ArraySort () {
let arraySo = [3, 2, 7, 3, 5, 3, 5];
console.log(arraySo.sort());
}
ArraySort ()
// 15 Create a js file containing a line comment and a multiline comment/block comment.

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

/*Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
like Aldus PageMaker including versions of Lorem Ipksum.*/

/* 16 Write a function ‘MyForLoop’ that loops until a variable equals 10. 
The variable should be incremented by ‘1’ in each iteration. (Make use of the for-loop).*/
const array16 = [4, 6, 6, 9, 6, 7, 3, 3, 1, 3, 5, 5, 7];
for (let i = 0; i < 10; i++) {
    console.log(array16[i]);
}
/* 17 Write a function ‘MyWhileLoop’ that declares a variable set to ‘10’ and loops until that variable is equal to ‘0’. 
The variable should be decremented by ‘1’ in each iteration. (Make use of the while-loop).*/
let i = 10;
while (i) {
    console.log(i--);
}
// https://javascript.info/while-for
// 18 Write a function that checks if a given value is a number. (Make use of the isNan() funtion). 
//Return a Boolean of the result.
let number18 = 13;
if (typeof number18 == "number") {
    console.log(number18 + " is a number <br/>")
} else {
    console.log(number18 + " is NOT a number <br/>")
}
let number19 = "15";
if(isNaN (number19)) {
    console.log(number19 + " is a number <br/>")
} else {
    console.log(number19 + " is NOT a number <br/>")
}
let value = 3;
const isFasey = (value) => !value;
console.log(isFasey);
// make it with loop on array
/*19 Write a function ‘SplitFunction’ that accepts the string ‘7+12+100’ and splits it into individual values,
 then summing these values. (Make use of the split() and parseInt() functions). Return the summed result.*/
let string20 = "7+12+100";
 function SplitFunction() {
    const myArray20 = string20.split("+");
    const myString19 = parseInt(myArray20[i],10);
    console.log(myString19)    
    console.log(myArray20);
    let result = myArray20.map(i=>Number(i));
    console.log(result);
    const sum1 = result.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum1); 

    console.log('😋' + myArray20);
    const sum = myArray20.reduce((total, value) => total + value);
    console.log(sum);
}
SplitFunction();
// #19 Alternativ B---
let mystring = "7+12+100";
function splitFunctions() {
    let arr = mystring.split("+");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }    
    console.log(sum);
}
splitFunctions()
// https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
// 20 Write a function ‘Factorial’ that accepts a positive integer and calculates the factorial of that integer.
//   Return the result.
let num = 5;
function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    console.log(num);
  }
  factorialize(5);
  //21 Write a JavaScript function to validate whether a given value type is Boolean or not.

let twentyoneA = true;
let twentyoneB = false;
function is_boolean(value) {
    return value === true || value === false || toString.call(value) === '[object Boolean]';
}
console.log(is_boolean(true));

console.log(is_boolean('bar'));






