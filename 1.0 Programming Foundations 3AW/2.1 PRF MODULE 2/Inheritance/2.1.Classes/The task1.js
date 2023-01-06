class MenuItem {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    info() {
        return 'This is menu item. Its name is ' + this.name + 'and its price is ' + this.price + '.';
    }
}

class Pizza extends MenuItem {
    constructor(name,price,ingredients) {
        super(name,price);
        this.ingredients = ingredients;
    }
    info() {
        let pizzaString = 'This is pizza. Its name is ' + this.name + 'and its price is ' + this.price + '.' + 'Its ingredients are: ';
        for (let i = 0; i<this.ingredients.length;i++) {
            pizzaString += this.ingredients[i];
            if (i == this.ingredients.length - 1) {
                pizzaString += '.';
            } else {
                pizzaString += ',';
            }
        }
        return pizzaString;
    }
}
class Pancakes extends MenuItem {
    constructor(name,price,sweet) {
        super(name,price);
        this.sweet = sweet;
    }
    info() {
        return 'This is pancake. Its name is ' + this.name + 'and its price is ' + this.price + '.' + 'Iis it sweet? ' + this.sweet + '!';
    }
}
class Pasta extends MenuItem {
    constructor(name,price,isVegetarian) {
        super(name,price);
        this.isVegetarian = isVegetarian;
    }
    info() {
        return 'This is bowl of pasta. Its name is ' + this.name + 'and its price is ' + this.price + '.' + 'Iis it vegeterian? ' + this.isVegetarian + '!';
    }
}
let pizza = new Pizza('Siciliana',23,['origano','olives tommato','chees']);
let panca = new Pancakes('ChocoDream',45,true);
let pastaSpaggeti = new Pasta('Spagetti', 75, false);
console.log(pizza.info());
console.log(panca.info());
console.log(pastaSpaggeti.info());


// pizza has an array of ingredients
// pancakes have the Boolean sweet
// Pasta has the Boolean isVegetarian
// In this lesson, we learned some crucial concepts of Object-oriented Programming. We learned about classes, encapsulation and inheritance.

// In this task, you have to create a menu for a restaurant. 
//Every dish has a name and price. 

//Our restaurant serves pizza, pancakes and pasta. 

//In addition, pizza has an array of ingredients, and pancakes have the Boolean sweet property, which defines whether pancakes should be served sweet. 

//Pasta has the Boolean property isVegetarian, which defines whether it contains meat.

// Create a model in Object-oriented Programming simulating the menu. Think about which properties should be private and which not.