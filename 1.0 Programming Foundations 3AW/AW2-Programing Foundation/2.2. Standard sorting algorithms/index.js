function swap(arr, a, b) {
    let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
  }

  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

// function insertionSort(arr) {
//     let temp;
//     for (let i = 1; i < arr.length; i++) {
//         let j = i;
//         temp = arr[i];
//         while (j > 0 && arr[j - 1] > temp) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = temp;
//     }
//     return arr;
// }
