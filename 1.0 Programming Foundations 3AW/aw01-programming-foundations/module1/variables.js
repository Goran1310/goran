var x = 55;
var X = "abc";
var _x = 1.2;
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

document.writeln(X);
document.writeln(_x);
var mod = 10 % 3;
document.write(mod);



const checkConfirm = () => {
  let result = confirm("are you sure you want to go this link??");
  if (result == false) {
    event.preventDefault(); //dont't go to the link.
  }
};

const checkPrompt = () => {
  let txt;
  let yourName = prompt("what is your name?");
  if (yourName == null || yourName == "") {
    txt = "No name provided";
  } else {
    txt = "Hello, " + yourName + "!";
  }
  alert(txt);
};
checkPrompt();
