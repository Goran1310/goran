function print(text) {
    document.getElementById('displayer').innerHTML = text;
}
function halve(value) {
    return value/ 2;
}
function calculator(a, b, callback1, callback2) {
    let result = a + b;
    // result = callback2(result);
    callback1(result);
}
calculator(3,2,print,halve);
//2.3. Lesson - Basic asynchronous operations/Callbacks 27/46
//Pass a second callback function to the calculator, 
//which divides the result by two and invokes it between result calculation and result printing.

