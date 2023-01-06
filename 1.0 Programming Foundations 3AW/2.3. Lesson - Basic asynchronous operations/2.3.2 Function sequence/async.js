// function print(text) {
//     document.getElementById("displayer").innerHTML = text;
// }
// function calculator(a, b, callback) {
//     let result =  a + b;
//     callback(result);
// }
// print("Waiting for the calculation to end...")
// setTimeout(() => calculator(1, 2, print), 10000);

function countDownFrom(number) {
    if(number === 0) {
        return;
    }
    console.log(number);

    debugger;

    countDownFrom(-1);
}
countDownFrom(5);