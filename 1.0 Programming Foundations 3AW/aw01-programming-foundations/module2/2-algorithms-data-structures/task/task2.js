const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultInput = document.getElementById('result');



// const num1 = parseInt( prompt('Insert a number'));
// const num2 = parseInt( prompt('Insert another number'));

const num1 = 10;
const num2 = 3;

console.log('num1',num1 , typeof num1);
num1Input.textContent = 'first number: ' + num1.toString();

console.log('num2',num2 , typeof num2);
num2Input.textContent = 'second number: ' + num2.toString();

let sizeOf = num1 > num2 ? num1 : num2;
let smallest = num1<num2 ? num1:num2;
console.log('size: ', sizeOf);
console.log('smallest:', smallest);

const numbers = Array.from(Array(sizeOf).keys()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbers2 = ([...numbers]).flat();

const reNumbers = numbers.map(num=>(num % smallest)) //[0, 1, 2, 0, 1, 2, 0, 1, 2, 0]

//sort based on the numbers remainder ----------------------
numbers.sort((a, b)=> a % smallest - b % smallest);
console.log('sorted remainders', numbers);

//same using bubblesort -------------------------
function swap(arr, a, b) {
  console.log(arr, " swapping numbers " + arr[a] + " and " + arr[b]);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr, smallest) {
  const remArray = arr.map(num=>(num % smallest))
  for (let i = 0; i < remArray.length; i++) {
    console.log("iteration ", i + 1);
    for (let j = 0; j < remArray.length - 1 - i; j++) {
      if (remArray[j] > remArray[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// display result: --------------
const bubbleResult = bubbleSort(numbers2, smallest);
console.log(bubbleResult);

const p = document.createElement('p');
p.textContent = ` Numbers: [${numbers2}] - Remainders: [${reNumbers}] `;
resultInput.before(p);

resultInput.textContent = ` Result ${bubbleResult}`;

