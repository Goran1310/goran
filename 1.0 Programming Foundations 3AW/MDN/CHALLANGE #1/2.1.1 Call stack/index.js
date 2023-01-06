// Call stack
// function greeting() {
//     // [1] Some code here
//     sayHi("123");
//     return "234"
//     // [2] Some code here
//   }
//   function sayHi() {
//     return "Hi!";
//   }
  
//   // Invoke the `greeting` function
//   console.log(greeting());
  
  // [3] Some code here

//   https://developer.mozilla.org/en-US/docs/Glossary/Call_stack


// // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a Callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// document.getElementById("demo").innerHTML = posNumbers;

// // Remove negative numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }
console.log('Hi');
setTimeout(function cb() {
    console.log('There');

}, 0);

console.log('JS ConfEU')