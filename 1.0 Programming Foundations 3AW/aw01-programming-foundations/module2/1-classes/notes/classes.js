// class ClassName {
//   constructor() {}
//   method_1() {}
//   method_2() {}
//   method_3() {}
// }

// let newObject = new ClassName(args);

export class Recipe {
  constructor(recipeName, ingredients, cookingTime, howTo) {
    this.recipeName = recipeName;
    this.ingredients = ingredients;
    this.cookingTime = cookingTime;
    this.howTo = howTo;
  }

  get ingredients() {
    return this._ingredients;
  }
  set ingredients(ingredientArray = []) {
    if (!Array.isArray(ingredientArray)) {
      console.log(ingredientArray, " ingredientArray is not an array");
      throw new error();
    }
    this._ingredients = ingredientArray;
  }
}

export class Meat extends Recipe {
  constructor(recipeName, ingredients, cookingTime, howTo, typeOfMeat) {
    super(recipeName, ingredients, cookingTime, howTo);
    this.typeOfMeat = typeOfMeat;
  }
  set typeOfMeat(type) {
    switch (type) {
      case "red":
        this._typeOfMeat = type;
        break;
      case "white":
        this._typeOfMeat = type;
        break;
      default:
        this._typeOfMeat = null;
        break;
    }
  }
  get typeOfMeat() {
    return this._typeOfMeat;
  }
}
export class Fish extends Recipe {
  constructor(recipeName, ingredients, cookingTime, howTo, typeOfFish) {
    super(recipeName, ingredients, cookingTime, howTo);
    this.typeOfFish = typeOfFish;
  }
  set typeOfFish(type) {
    switch (type) {
      case "red":
        this._typeOfFish = type;
        break;
      case "white":
        this._typeOfFish = type;
        break;
      default:
        this._typeOfFish = null;
        break;
    }
  }
  get typeOfFish() {
    return this._typeOfFish;
  }
}
export class Veggie extends Recipe {
  constructor(recipeName, ingredients, cookingTime, howTo) {
    super(recipeName, ingredients, cookingTime, howTo);
  }
}

export class Ingredient {
  constructor(ingredientName, amount, unit) {
    this.ingredientName = ingredientName;
    this.amount = amount;
    this.unit = unit;
  }
  getName() {
    return this.ingredientName; //string
  }
  getAmount() {
    return this.amount; //number
  }
  getUnit() {
    return this.unit; //string
  }
  get all() {
    return [this.ingredientName, this.ingredientType, this.amount, this.unit];
  }
}
