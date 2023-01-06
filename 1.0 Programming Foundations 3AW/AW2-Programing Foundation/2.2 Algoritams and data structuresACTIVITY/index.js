// 1.1. Write a JavaScript program to calculate the factorial of a number. Go to the editor
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial (x) {
    if (x === 0) {
        return 1;
    } return x * factorial(x-1);
}
console.log(factorial(5))

// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. Go to the editor
// Click me to see the solution.

// 3. Write a JavaScript program to get the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
// Click me to see the solution.

// 4. Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
// Click me to see the solution.

// 5. Write a JavaScript program to compute the exponent of a number. Go to the editor
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
// Click me to see the solution.

// 6. Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
// Click me to see the solution.

// 7. Write a JavaScript program to check whether a number is even or not. Go to the editor
// Click me to see the solution.

// 8. Write a JavaScript program for binary search. Go to the editor
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'
// Click me to see the solution.

// 9. Write a merge sort program in JavaScript. Go to the editor
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]
// Click me to see the solution.

// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php