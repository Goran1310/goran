// In this section, we’ll enable the attack of sneaky customers. 
// A sneaky customer sits at a random table without us noticing. 
// We’ll add two buttons: one to enable and one to disable the sneaky customer’s attack.

// If enabled, one random customer with a random name will sit at a random table every 30 seconds. 
// Every time a new sneaky customer is added, we should print “Shhhhhhhh” in the console.
//Intervals are a great tool to solve this problem. We can bind functions starting and clearing the interval to our buttons.
//We can execute everything responsible for a sneaky attack within the interval parameter function.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomName() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}
const tableCount = 15;
let tableSizes = Array.from(Array(tableCount).keys()).map( () => getRandomInt(2, 10)); //declares how many people can seat at table of certain index
customers = [];
let sneakyAttackId = 0;
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