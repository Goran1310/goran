
// We created a more complex application in this lesson using our knowledge from numerous previous lessons. 
// Before starting this task, ensure you understand the application well.

// Right now, our application works well, but it isn’t perfect. 
// Many customers can sit at the same table. Your task is to fix this. 
// Before adding a new customer, you must ensure nobody is sitting at that table. 
// You shouldn’t add a new customer if there are no correct tables.

// What is the best way to do this? 
// Is the customer array enough, or should you create a new one storing the state of every table? The decision is up to you.

function randomName() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const tableCount = 15;
let tableSizes = Array.from(Array(tableCount).keys()).map( () => getRandomInt(2, 10)); //declares how many people can seat at table of certain index
customers = [];
let sneakyAttackId = 0;
function freeTable() {
    let index = parseInt(prompt("Provide an index to free its table. It should be greater or equal to 0, but less than " + tableCount + "."));
    while (index < 0 || index >= tableCount) {
         index = parseInt(prompt("Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " + tableCount + "."));
    }
    console.log(customers);
    for(let i=customers.length-1; i>=0; i--) {
        if(customers[i][1] == index)
            customers.splice(i,1);
    }
    console.log(customers);
}
function sneakyAttack() {
    sneakyAttackId = setInterval(() => {
        customers.push([randomName(), getRandomInt(0, tableSizes.length)]);
        console.log("Shhhhhhhh");
        return;
    }, 30000);
    console.log()
}
function stopSneakyAttack() {
    if(sneakyAttackId != 0) {
        clearInterval(sneakyAttackId);
        console.log("Sneaky attack stopped.")
    }
}
function newCustomer() {
    const name = prompt("Hello, what is your name?");
    let size = 0;
    let askAboutTableSize = "";
    while(true) {
        if (size == 0) {
            askAboutTableSize = "Hello " + name + "! Table for how many people?"
        }
        else {
            askAboutTableSize = "Unfortunately we don't have a table for that many people. Please ask the smaller table size."
        }
        size = parseInt(prompt(askAboutTableSize));
        if(size != 0 && Math.max(...tableSizes) >= size) {
            break;
        }
    }
    let tableNumber = 0;
    if (tableSizes.indexOf(size) >= 0) {
        tableNumber = tableSizes.indexOf(size);
    }
    else {
        tableNumber = tableSizes.indexOf(Math.max(...tableSizes));
    }
    alert("You got a table of number: " + tableNumber + ", which by default can fit " + tableSizes[tableNumber] + " people.")
    customers.push([name, tableNumber]);
    console.log(customers);
}
function freeTable() {
    let index = parseInt(prompt("Provide an index to free its table. It should be greater or equal to 0, but less than " + tableCount + "."));
    while (index < 0 || index >= tableCount) {
         index = parseInt(prompt("Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " + tableCount + "."));
    }
    console.log(customers);
    for(let i=customers.length-1; i>=0; i--) {
        if(customers[i][1] == index)
            customers.splice(i,1);
    }
    console.log(customers);
}