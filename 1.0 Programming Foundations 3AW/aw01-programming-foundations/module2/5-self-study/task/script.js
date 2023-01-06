const min = (array) => {
  return Math.min(...array);
}
const max = (array) => {
  console.log(Math.min(...array), typeof Math.min(...array))
  return Math.max(...array);
}

const minMax = (array) => {
  return {min: min(array), max: max(array)}
}

console.log(minMax([1,2,3,4,5,6]))