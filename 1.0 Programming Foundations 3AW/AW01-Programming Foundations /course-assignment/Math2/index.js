// Final result should be 10.42
// Add/update your code here

let result = (7 + 13) / (9 + 7);
let result2 = 100 / (2 * 6);
//Write a calculation that multiplies result and result2 together and assigns the result back to result
result = result *= result2;
//takes result and formats it to 2 decimal places, storing the result of this in a variable called finalResult
finalResult = result.toFixed(2);
// Check the data type of finalResult using typeof; you'll probably see that it is actually of string type! Write a line of code that converts it to a number type, storing the result in a variable called finalNumber.
finalNumber = Number(finalResult);

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
let para2 = document.createElement('p');
let finalNumberCheck = typeof finalNumber === 'number' ? 'The finalNumber is a number type. Well done!' : `Ooops! finalNumber is of type ${ typeof finalNumber }.`
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math
// https://discourse.mozilla.org/t/test-your-skills-math2-i-have-a-question/57386