const countDownRev = (value) => {
  const newValue = value - 1;

  if (newValue > 0) {
    console.log("true");
    countDownRev(newValue);
  }
  console.log("gets called 10 times");
  console.log(value);
};

countDownRev(10);

const factorial = (number) => {
  let result = number;
  while (number > 1) {
    number--;
    result *= number;
  }
  return result;
};

console.log(factorial(5));

// ---- bubble-sort----:
console.log('bubblesort------->');

function swap(arr, a, b) {
  console.log(arr, " swapping numbers " + arr[a] + " and " + arr[b]);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("iteration ", i + 1);
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

let array1 = [2, 6, 3, 7, 1];
console.log(bubbleSort(array1));


// ---- insertionSort -----
console.log('insertionsort------->');


function insertionSort(arr) {
  let temp;

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    temp = arr[i];
    console.log(i, ': number=' + arr[i-1], 'next=' + arr[i])
    while (j > 0 && arr[j - 1] > temp) {
      console.log('is ' + arr[j - 1] +'>' + temp, arr[j - 1] > temp)
      console.log(arr[j-1] + " pushed back one spot");
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
    console.log(arr)
    console.log('is ' + arr[j - 1] +'>' + temp, arr[j - 1] > temp)
  }

  return arr;
}

let array2 = [2, 6, 3, 7, 1];
console.log(insertionSort(array2));

console.log('selectionsort------------')

function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }
    }
    return arr;
}

let arrayz = [2, 6, 3, 7, 1];
console.log(selectionSort(arrayz));