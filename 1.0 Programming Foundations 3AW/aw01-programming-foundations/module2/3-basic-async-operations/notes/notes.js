//------------- callbacks, intervals -----------------
const displayer = document.getElementById("displayer");
const displayer2 = document.getElementById("displayer2");

const print = (text, element) => {
  element.innerHTML = text;
};

const calculator = (a, b, callback, disp) => {
  let result = a + b;
  callback(result, disp);
};

let counter = 0;
const timer = (callback, disp) => {
  counter++;
  callback(counter, disp);
};

print("waiting for data..", displayer);
print("Waiting...", displayer2);

//timeout
setTimeout(() => calculator(2, 2, print, displayer), 5000);

//interval
const id = setInterval(() => timer(print, displayer2), 1000);
setTimeout(() => clearInterval(id), 30000);

//clock - setInterval:
setInterval(clock, 1000);

function clock() {
  let d = new Date();
  document.getElementById("clock").innerHTML =
    (d.getHours() < 10 ? "0" : "") +
    d.getHours() +
    ":" +
    (d.getMinutes() < 10 ? "0" : "") +
    d.getMinutes() +
    ":" +
    d.getSeconds();
}

//reload page - SetInterval

const reloadPage = () => {
  console.log("reloading page");
  location.reload();
};

setTimeout(reloadPage, 15000);


// --------------PROMISES------------------------------------------------------
//-----------------------------------------------------------------------------

let promise = new Promise(function (resolve, reject) {
  let x = 0;
  if (x == 0) {
    resolve("OK");
  } else {
    reject("Error");
  }
});
promise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

//---------------------------------------
let p = new Promise((resolve, reject) => {
  let a = 1 + 0;
  if (a === 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  console.log("this is in the then: " + message); // do this when succed
}).catch((message) => {
  console.log("this is in the catch: " + message); // do this when failed
});

//---------------Promise all -------------- venter på alle:

const recordVideoOne = new Promise ((resolve, reject) => {
  resolve('video 1 recorded');
})
const recordVideoTwo = new Promise ((resolve, reject) => {
  resolve('video 2 recorded');
})
const recordVideoThree = new Promise ((resolve, reject) => {
  resolve('video 3 recorded');
})

Promise.all([
  recordVideoOne, recordVideoTwo, recordVideoThree
]).then((messages) => {
  console.log(messages) // ['video 1 recorded', 'video 2 recorded', 'video 3 recorded']
})


// -------------promise race ------------------- førstemann:

Promise.race([
  recordVideoOne, recordVideoTwo, recordVideoThree
]).then((messages) => {
  console.log(messages, typeof messages) // video 1 recorded string
})


// -------------- ASYNC AWAIT -----------------------------------------------------
//---------------------------------------------------------------------------------

// Async function will return a promise.
// it can be resolved with the await keyword.