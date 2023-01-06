
const array = ['Corn','Green peas','String beans','Eggplant','Cucumber', 'Pumpkin','Tomato','Peppers'];
//var table = ['Corn','Green peas','String beans','Eggplant','Cucumber', 'Pumpkin','Tomato','Peppers'];

// -------
// const numbers = ['Corn','Green peas','Corn','String beans','Eggplant','Cucumber', 'Pumpkin','Tomato','Peppers'];
// let isDuplicate = false;

// // Outer for loop
// for (let i = 0; i < numbers.length; i++) {
//     // Inner for loop
//     for (let j = 0; j < numbers.length; j++) {
//         // Skip self comparison
//         if (i !== j) {
//             // Check for duplicate
//             if (numbers.length[i] === numbers.length[j]) {
//                 isDuplicate = true;
//                 console.log(numbers[j]);
//                 // Terminate inner loop
//                 break;
//             }
//         }
//         // Terminate outer loop
//         if (isDuplicate) {
//             break;
//         }
//     }
// }

// if (!isDuplicate) {
//     console.log(`Array doesn't contain duplicates.`);
// } else {
//     console.log(`Array contains duplicates.`);
//     alert(array)
// }
//https://bobbyhadz.com/blog/javascript-count-duplicates-in-array
//https://attacomsian.com/blog/javascript-array-find-duplicates

// Output: Array contains duplicates.
// ----------
// checkDuplicate();
//    function checkDuplicate(element, index) {
//         let arr = ["abc","xy","bb", "abc", "Corn", "Green peas","Eggplant","Cucumber", "Pumpkin","Tomato","Peppers"];
//         //let array = ['Corn','Green peas','String beans','Eggplant','Cucumber', 'Pumpkin','Tomato','Peppers'];

//       for(let i = 0; i < arr.length;i++) {
//          // nested loop
//          for(let j = 0; j < arr.length;j++) {
//             // do not compare same elements
//             if(i !== j) {
//               // check if elements match
//         if(arr[i] === arr[j]){
//                  // duplicate element found
//            result = true;
//            console.log(arr[i]);
//                  // terminate inner loop
//            break;
//         }
//             }
//          }
//          // terminate outer loop
//          if(result){
//             break;
//          }
//       }
//       if(result) {
//          console.log('Array contains duplicate elements');
//       } else {
//          console.log('Array does not contain duplicate elements');
//       }
//    }
// ----------
   let arr = ["abc","xy","bb", "abc", "Corn", "Green peas","Eggplant","Cucumber", "Pumpkin","Tomato","Peppers"];


const dataToDisplay = [];

array.forEach(singleElement =>{
    dataToDisplay.push(singleElement.length)
});
console.log(dataToDisplay);




//const emoji = ['🍅','🍆','🌽','🍄','🥑','🥔','🥕','🥒','🥑','🥬','🧄','🧅','🥦','🥜'];



// This is working :)
//array.forEach(element => console.log(element.length));



array.forEach((array, i) => {
    if (array.length !== array.length[i + 1]) {
        console.log(array.length[i])
    }
});



// create an array containing 10 names of vegetables
// At least one vegetable name should have an even length. 
// Using the iterator method, show the user an alert containing this name if the length of the vegetable name is even.

// const evenLength = array.length(isEven);
// console.log(evenLength);
// function isEven(value) {
//     return array[index];
//     alert (array[index]);
// }
// https://dev.to/ljnce/map-foreach-for-three-ways-for-create-an-array-and-push-it-4893
// https://www.freecodecamp.org/news/javascript-array-foreach-tutorial-how-to-iterate-through-elements-in-an-array-with-map/

