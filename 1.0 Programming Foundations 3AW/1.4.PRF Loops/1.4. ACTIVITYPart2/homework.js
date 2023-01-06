


let count = parseFloat(prompt('Input value between 0 and 100'));
while(true) {
    if ((count>0) && (count<100)) {
        break;
    } 
};
input.innerText = count;
// document.getElementById("increment").textContent = input
// document.getElementById("decrement").textContent = input

console.log(input)
function increment() {
    count += 1
    input.innerText = count
}
function decrement(){
    count -= 1
    input.innerText = count
}



// In this lesson, we learnt about the functions, function expressions and arrow
// functions. We also finally used functions to improve our web application.
// In this task, we’ll continue the development of our web application:
// 1.
// In the beginning, get the input value from the user. The value should be between 0
// and 100. 
//2.
// Create two buttons and apply two functions to them on click: one will
// increase the stored value by 1, 

//while the second function will decrease it.
//
// After every button click, show the current variable value in the console. After
// reaching either 0 or 100, instead of increasing/decreasing the value, communicate
// “Game over” in the console.