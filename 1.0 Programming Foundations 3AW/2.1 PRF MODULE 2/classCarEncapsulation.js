class Car {
    #_year
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    set year(newYear) {
        let date = new Date();
        if (newYear > date.getFullYear()) {
            this.#_year = date.getFullYear();
        }
        else {
            this.#_year = newYear;
        }
    }
    get year() {
        return this.#_year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.#_year;
    }
}
let newCar = new Car("Nissan", 2023);
let newCar1 = new Car("Toyota", 2033);
let newCar2 = new Car("Man", 2033);
console.log(newCar.year); // 2022
console.log(newCar._year); // 2022
console.log(newCar1.year)
console.log(newCar2.age());