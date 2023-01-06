// class Shape {

//     name;
//     sides;
//     sideLength;

//     constructor(name,shape,sideLength) {
//         this.name = name;
//         this.sides = this.sides;
//         this.sideLength = sideLength;
//     }
//     calcPerimeter() {
//         console.log(this.sides * this.sideLength)
//     }
//   }
// const square = new Shape('square',4,5);
// square.calcPerimeter();

// const triangle = new Shape('triangle',3,3,);
// triangle.calcPerimeter();

function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  
  
  Shape.prototype.calcPerimeter = function(){
  
      let perimeter = this.sides * this.sideLength;
  
      console.log(perimeter);
  }
  
  
  let square = new Shape('Square',4,5)
  let triangle = new Shape('Triangle',3,3);
  
  square.calcPerimeter();
  triangle.calcPerimeter();

  