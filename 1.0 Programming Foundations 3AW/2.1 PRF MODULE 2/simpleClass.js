// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         let date = new Date();
//       return date.getFullYear() - this.year;
//     }
// }
// let newCar = new Car("NIssan", 2020);

// console.log(newCar.name); // Nissan
// console.log(newCar.age()); // 2
// console.log(newCar.year); // 2020


class Student {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    greetings() {
        return 'Hello my name is ' + this.name + ' ' + this.surname + '.';
    }
    
    birthYear() {
        let date = new Date();
        return date.getFullYear() - this.age();
    }
}
const student1 = new Student('John','Henriksen', 24);
const student2 = new Student('Johanes','Iksen', 27);
const student3 = new Student('Tim','Hen', 23);

console.log(student1.greetings());
console.log(student2)



