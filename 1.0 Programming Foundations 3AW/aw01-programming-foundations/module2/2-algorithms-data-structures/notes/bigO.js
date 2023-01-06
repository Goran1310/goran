const data = ["A", "B", "C"];
const data2 = [1, 2, 3, 4, 5];

//-------------------------  O(n) ---------------------------
console.log("O(n)");
//scales 1:1 - increasing length of input n - increasing linear.
//scale from 3 to 300 - scale linear with n. --> O(n)
// n = data1.length

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// A
// B
// C

//  -------------- O(n + a) -----------------------
console.log("O(n + a)");
// scaling of:
// n = data1.length
// a = data2.length
for (let j = 0; j < data2.length; j++) {
  console.log(data2[j]);
}

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// A
// B
// C
// 1
// 2
// 3
// 4
// 5

//  -------------- O(n * a) -----------------------
console.log("O(n * a)");
// scaling of:
// for each element in data2 wi will loop over entire data1 array.
//nested loops.

for (let j = 0; j < data2.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data2[j]);
  }
}

// A1
// B1
// C1
// A2
// B2
// C2
// A3
// B3
// C3
// A4
// B4
// C4
// A5
// B5
// C5

//  -------------- O(n ^2) -----------------------
console.log("O(n ^ 2)");
// scaling of:
// for each element in an array, loop throug array again.

for (let j = 0; j < data.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data[j]);
  }
}

// AA
// BA
// CA
// AB
// BB
// CB
// AC
// BC
// CC

//  -------------- O(n^2 + n) = O(n ^2) -----------------------
console.log("O(n^2 + n) = O(n ^2)");
// scaling of:
// for each element in an array, loop throug array again.
//this is also n^2, we cut out the + n bacause it does not scale like n^2

for (let j = 0; j < data.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log("1: ", data[i] + data[j]);
  }
}

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// ----------- space complexity: ------------------------

// ------------------------ O(1) ---------------------------
console.log('space', 'O(1)');
//constant - not creating anytning in memory

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// ------------------------ O(n) ---------------------------
console.log('space', 'O(2)');
//creating another array from the original. scale linear n.
const out = [];

for (let i = 0; i < data.length; i++) {
  out[i] = data[i]
}

// ------------------------ O(n^2) ---------------------------
console.log('space', 'O(n^2)');
//three times the size of the input.  three new arrays with 3 in each.
// if input was four , sixteen new data. 4 + 4 +4 +4 - 4 new arrays with 4 in each.


for (let j = 0; j < data.length; j++) {
  out[j] = [];
  for (let i = 0; i < data.length; i++) {
    out[i][j] = data[i];
  }
}