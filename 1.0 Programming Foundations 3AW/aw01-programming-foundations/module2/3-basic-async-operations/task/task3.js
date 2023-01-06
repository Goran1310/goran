const finished = document.querySelector("#finished");
const btnContainer = document.getElementById('button-container');
const correctNum = 4;



const insertButton = () => {
  const btn = document.createElement('button');
  btnContainer.appendChild(btn);
  btn.textContent = 'Try again!';
  btn.addEventListener('click', reloadPage);
}

const reloadPage = () => {
  location.reload();
}

const guessedNumber = () => {
  const number = parseInt(
    prompt("I'm thinking of a number between 1 and 10. \n Can you guess it?")
  );
  return number;
};

const guessedNum = guessedNumber();

console.log(guessedNum, correctNum, guessedNum === correctNum)

if (guessedNum > 10 || guessedNum < 0) {
  alert("I said between 1 and 10");
  location.reload();
}

if (guessedNum === correctNum) {
  alert('Congratulations! you guessed: ' + guessedNum);
  finished.textContent = 'Correct number: ' + correctNum.toString() + ' 🥇';
}

if (guessedNum !== correctNum) {
  finished.textContent = `Sorry, ${guessedNum.toString()} is not the correct number 👍 😠`;
  setTimeout(guessedNum, 10000);
}

insertButton();