// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-btn");
const decrementCount = document.getElementById("decrement-btn");
// Select total count
const totalCount = document.getElementById("total-count");
//Variable to track count
var count = 0;
//Display initial count value
totalCount.innerHTML = count; 
//Function to increment
const HandleIncrement = () => {
    count ++;
    totalCount.innerText = count;
}
const HandleDecrement = () => {
    count = count - 1;
    totalCount.innerText = count;
}
//Select increment and decrement buttons
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn")
//Add click event listeners to buttons
incrementBtn.addEventListener("click", HandleIncrement);
decrementBtn.addEventListener("click", HandleDecrement);