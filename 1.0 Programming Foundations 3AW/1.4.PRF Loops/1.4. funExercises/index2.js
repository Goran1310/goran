const { resourceUsage } = require("process");
const { resourceLimits } = require("worker_threads");

let largerEl = document.getElementById("displayEl");
let largerLo = document.getElementById("displayLo")
num1=parseInt(prompt("Input first integer", "0"),10);
num2=parseInt(prompt("Input second integer", "0"),10);
num3=parseInt(prompt("Input third integer", "0"),10);


// Conditional statement to find the sign in front of three numbers
// if (num1>0 && num2>0 && num2>0) {
//     alert (displayEl.innerText="The sign is +");
// } else if 
//     (num1<0 && num2<0 && num3<0) {
//         console.log(displayEl.innerText="The sign is -");
//     } else if (num1>0 && num2<0 && num3<0) {
//         console.log(displayEl.innerText="The sign is +");
//     } else if (num1<0 && num2>0 && num3<0) {
//         console.log(displayEl.innerText="The sign is +");
//     } else {
//         console.log(displayEl.innerText="The sign is -");
//     }

let array = [];
array.push(largerEl.innerText=num1,num2,num3);
array.sort(function(a, b){return a-b});
console.log(largerLo.innerText=array)
let lowest = points[0];

// Write a JavaScript conditional statement to find the sign of product of 
// three numbers. Display an alert box with the specified sign
// Resources
// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-2.php
// https://www.w3schools.com/jsref/jsref_sort.asp