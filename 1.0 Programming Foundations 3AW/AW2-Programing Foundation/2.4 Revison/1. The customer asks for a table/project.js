// We’ll create an application simulating customers entering a restaurant and sitting at a table.

//The table can’t have a smaller size than the number of customers visiting the restaurant.

// Customers can sometimes be added automatically, without our knowledge. We should also be able to ask the customers to leave specific tables.

//1.The customer gives their name and asks about a table of a specific size. 

//2.If we have a table of this size, we should tell them its identifier and add them to our customer’s array. Otherwise, we should ask them about providing a smaller size until we get the correct one.

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const tableCount = 15;
let tableSizes = Array.from(Array(tableCount).keys()).map( () => getRandomInt(2, 10)); //declares how many people can seat at table of certain index
customers = [];
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