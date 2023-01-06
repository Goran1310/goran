
// you’ll create a number guessing game. 

// You have to get the number from the user (via prompt) and 


// check if the number is the same as the one you hardcoded in the JavaScript file.


// If the values differ, you should ask the user again after 10 seconds. 

// If the values are the same, you should end the game and congratulate the user with an alert.
let x = 13;
let displayer ="";
guessing();

function guessing() {
    let number = parseInt(prompt('Please input the number'));
    if (number === x) {
        alert(`You are correct hidden number is ${x}.`);
        document.getElementById("displayer").innerHTML = "Correct"
    } else {
        setTimeout(guessing, 5000);
        console.log(`You are wrong hidden number is not ${number}.`) 
        document.getElementById("displayer").innerHTML = "NOT Correct"

    }
}
