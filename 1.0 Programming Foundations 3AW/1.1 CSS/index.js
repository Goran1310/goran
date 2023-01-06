// Declare three variables: a,b and c. 
// Variable a should be equal to 5, 
// variable b to 8 and variable c should be the sum of the other

// let a = 5;
// let b = 8;
// let c = a + b;
// console.log(c);
// let btnEl = document.getElementById("btn- el");

let a = (!(1+2 == 3));
console.log(a);
let b = !(2+3>4);
console.log(b);
let c = (!(1+2 ==3));
console.log(c);
let d  = !(2+3 > 4);
console.log(d);
let e = (a && b) === (c || d);
console.log(e);

const myInt = 5;
const myFloat = 6.667;
console.log(typeof myInt);
console.log(typeof myFloat);

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

function Bike(model,color) {
    this.model = model;
    this.color = color;
    this.getDetails = function () {
        return this.model + ' bike is ' + this.color;
    }
}


var bikeObj1 = new Bike('BMW', 'BLACK');
var bikeObj2 = new Bike('BMW', 'WHITE');
console.log(bikeObj1.getDetails());
console.log(bikeObj2.getDetails());