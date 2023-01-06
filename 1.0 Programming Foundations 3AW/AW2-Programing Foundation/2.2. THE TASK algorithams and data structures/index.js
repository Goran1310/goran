// In this task, you’ll have to sort the numbers, but to make it more interesting, 
// you won’t sort them from smallest to greatest. 
// First, you need to get two numbers from the user. You can use prompts to do that. 
// Both need to be positive integers. 
// The bigger one defines the size of your array.

// 1. Get Numbers 
while(true) {
var arraySize = parseInt(prompt("Please provide Array size \n Positive integers only"));
if(isNaN(arraySize) || (arraySize < 1)) {
    alert("Only positive integers accepted!")
} else {
    break;
}
}
console.log("Array size:" + arraySize);
while(true) {
    var dividend = parseInt(prompt("Please provide dividend. \n Positive integers only"));
    if(isNaN(dividend) || (dividend < 1) || (arraySize < dividend)) {
        alert("Only positive integers less then Array size accepted!")
    } else {
        break;
    }
}
console.log("Dividend size: " + dividend);
// 2.Creat Array

const generatedArray = Array.from(Array(arraySize).keys()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbersArray = Array.from(generatedArray);
console.log("Unsorted Array: " + generatedArray);

//3. Sort all elements
function method1(numbersArray, dividend) {
    for (let i=0; i<numbersArray.length; i++) {
        for (let j=0; j<numbersArray.length; j++) {
            if(numbersArray[j-1]% dividend > numbersArray[j]%dividend){
                let temp = numbersArray[j-1];
                numbersArray[j-1] = numbersArray[j];
                numbersArray[j]=temp;
            }
        }
    }
    console.log("Bubble sorted: " + numbersArray);

}
function method2(generatedArray, dividend) {
    generatedArray.sort((a,b) => compare(a,b,dividend));
    console.log("JS Sort() Array: "+generatedArray);
}
method1(numbersArray,dividend);
method2(generatedArray,dividend);

function compare(a,b,mod) {
    if(a % mod > b % mod) {
        return 1;
    } else {
        if (a % mod === b % mod) {
            return 0;
        }
    }
    return -1;
}