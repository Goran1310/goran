const number1 = parseInt(prompt("What's the first number?"));
const number2 = parseInt(prompt("What's the second number?"));
const number3 = parseInt(prompt("What's the third number?"));
let array = [number1, number2, number3];
array.splice(1,1);
array.push(array[0],array[1]);
console.log(array);