
let largerEl =document.getElementById("largerEl");
let num1, num2;
num1=parseInt(prompt("Input first integer", "0"),10);
num2=parseInt(prompt("Input second integer", "0"),10);


if (num1>num2) {
    console.log(largerEl.innerText ="The larger number from " + num1+ " and " + num2 + " is " + num1+".");
    //largerEl.innerText = num1;
    } else if (num2 > num1) {
    console.log(largerEl.innerText ="The larger of "+ num1+ " and "+ num2+ " is "+ num2+ ".");
    }  else {
    console.log(largerEl.innerText = "The "+ num1+ " and "+ num2+ " are same.");
}

// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
