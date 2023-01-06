let isCorrect = (num) => {
  if (num >= 0 && num <= 1) {
    return true;
  }
  return false;
};

const alertCorrect = (x) => {
  if (x > 0.5) {
    alert("Hello, it's nice to see you here.");
  } else {
    alert(x);
  }
};

const alertWrong = () => {
  alert("Your data is not correct!");
};

const checkPrompt = () => {
  return parseFloat(prompt("Please pass the number between 0 and 1", "0.5"));
};

let x = checkPrompt();

if (isCorrect(x)) {
  alertCorrect(x);
} else {
  let x2 = checkPrompt();
  if (isCorrect(x2)) {
    alertCorrect(x2);
  } else {
    alertWrong();
  }
}
