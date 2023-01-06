class Pizza {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    info() {
        return 'I am basic pizza: ' + this.name + '.' + 'I cost ' + this.price + '$.';
    }
}
class ItalianPizza extends Pizza {
    constructor(name, price, region) {
        super(name,price);
        this.region = region;
    }
    info() {
        return 'I am Italian pizza: ' + this.name + '.' + ' I cost ' + this.price + '$. I come from: ' + this.region + '.';
        //return super.info() + 'special type of pizza from ' + this.region + '.';
    }
}
class AmericanPizza extends Pizza {
    constructor(name, price, sauce) {
        super(name, price);
        this.sauce = sauce;
    }
    info() {
        return 'I am American pizza: ' + this.name + ' I cost ' + this.price + '$. I have the ' + this.sauce + ' sauce.';
    }
}

let test = new ItalianPizza('TorroRoso',13,'Siciliana');
let test1 = new AmericanPizza('Oklahomida',12,'spicy');
let test2 = new Pizza('margarita',7)
console.log(test.info());
console.log(test1.info());
console.log(test2.info());