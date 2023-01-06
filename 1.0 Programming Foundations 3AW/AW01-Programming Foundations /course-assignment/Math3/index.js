
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

// Add your code here
const section = document.querySelector('section');

// we want you to write some tests. 
// You've got three groups, each consisting of a statement and two variables. 
// For each one, write a test that proves or disproves the statement made. 
// Store the results of those tests in variables called weightComparison, 
// heightComparison, and pwdMatch, respectively.
let weightComparison = eleWeight > mouseWeight? true : false;
let heightComparison = ostrichHeight > duckHeight? true : false;
let pwdMatch = pwd1 === pwd2? true : false; 
// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

const weightTest = weightComparison ? 'True — elephants weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
    
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math
// https://discourse.mozilla.org/t/assessment-wanted-for-math-3-skill-test/67963
