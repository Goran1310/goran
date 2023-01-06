





const multiply = function () {
    let res = 1;
    if (arguments.length == 0) {
    return 0;
    }
    for (let i = 0; i < arguments.length; i++) {
        res *= arguments[i];

    }
    return res;
}
 
const x = multiply(1,23,45);
console.log(x);
// Write a function expression that multiplies all 
// arguments (we assume all are numbers) and returns 
// the result. 
// We should be able to pass as many arguments as we want.

