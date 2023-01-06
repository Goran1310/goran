// If we only add new customers, our restaurant will get too crowdy. 
// In this section, we’ll implement a tool to free a table. 
// We want to remove all customers from the table of a provided index. 
// We get the index via prompt as often as necessary until it’s in the correct format.

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