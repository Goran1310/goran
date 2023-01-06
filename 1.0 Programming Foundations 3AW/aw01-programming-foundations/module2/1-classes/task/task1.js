//each dish has name and price

class Dish {
  constructor(dishName, price) {
    this.dishName = dishName;
    this.price = price;
  }
  set dishName(newDishName) {
    this._dishName = newDishName;
  }
  get dishName() {
    return this._dishName;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  get price() {
    return this._price;
  }
}

class Pizza extends Dish {
  #_ingredients;
  constructor(dishName, price, ingredients) {
    super(dishName, price);
    this.ingredients = ingredients;
  }
  set ingredients(newIngredient) {
    let newNestedArray;
    if (this.ingredients) {
      newNestedArray = [this.ingredients, newIngredient];
    } else {
      newNestedArray = [newIngredient];
    }
    
    this.#_ingredients = newNestedArray.flat(1);
  }
  get ingredients() {
    return this.#_ingredients;
  }
}

class Pancakes extends Dish {
  #_sweet;
  constructor(dishName, price, sweet) {
    super(dishName, price);
    this.sweet = sweet;
  }
  set sweet(newSweet) {
    if (typeof newSweet !== "boolean") {
      throw new error();
    }
    this.#_sweet = newSweet;
  }
  get sweet() {
    return this.#_sweet;
  }
}

class Pasta extends Dish {
  #_isVegitarian;
  constructor(dishName, price, isVegitarian) {
    super(dishName, price);
    this.isVegitarian = isVegitarian;
  }
  set isVegitarian(newIsVegitarian) {
    if (typeof newIsVegitarian !== "boolean") {
      console.log("error.. isveggie not boolean");
    }
    this.#_isVegitarian = newIsVegitarian;
  }
  get isVegitarian() {
    let isVeggie = (this.#_isVegitarian === false) ? 'not veggie': 'veggie';
    return isVeggie;
  }
}

let newPasta = new Pasta("lasagne", "40 kr", false);
console.log(newPasta.dishName, newPasta.price, newPasta.isVegitarian)

let newPizza = new Pizza('Capricciosa', '109 kr', ['tomato']);
newPizza.ingredients = ['mushrooms', 'cheese'];
console.log(newPizza.dishName, newPizza.price, newPizza.ingredients);
