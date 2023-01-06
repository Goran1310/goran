// function print(text) {
//     document.getElementById("displayer").innerHTML = text;
// }
// function calculator(a, b, callback) {
//     let result =  a + b;
//     callback(result);
// }
// print("Waiting for the calculation to end...")
// setTimeout(() => calculator(1, 2, print), 5000);

// ---
// function timer(callback) {
//     counter ++;
//     callback(counter);
// }

// print("Loading and waiting....")
// var counter = 0;
// const id = setInterval(() => timer(print),2000);
// setTimeout(() => clearInterval(id),10000);
// ----
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("displayer").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}


