function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomName() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
}

const tableCount = 15;
let tableSizes = Array.from(Array(tableCount).keys()).map(() =>
  getRandomInt(2, 10)
); //declares how many people can seat at table of certain index example [2, 4, 6, 2, 5, 8, 8, 5, 7, 7, 6, 7, 8, 8, 4]

let customers = [];

// ------------------------- helper functions -------------------------
const tableIsFree = (tableNumber) => {
  let occupied = customers.filter((customer) => customer[1] === tableNumber);
  if (occupied.length > 0) {
    return false;
  }
  return true;
};

const checkAvailibility = (size) => {
  let available = tableSizes
    .map((tableSize, tableIndex) => {
      if (tableSize >= size && tableIsFree(tableIndex)) { // if table is large enough and unoccupied.
        return { number: tableIndex, size: tableSize }; // return a table object
      }
      return false; //else return false
    })
    .filter((freeTable) => freeTable); //filter out the false values - leavin only available tables fo correct size or larger.

  if (available.length > 0) {
    let sorted = available.sort((a, b) => a.size - b.size); // sort by table size
    return sorted[0].number;
  }
  return false;
}; 

// -------------------------new customer -------------------------
function newCustomer() {
  const name = prompt("Hello, what is your name?");
  let size = 0;
  let askAboutTableSize = "";

  while (true) {
    if (size == 0) {
      askAboutTableSize = "Hello " + name + "! Table for how many people?";
    } else {
      askAboutTableSize =
        "Unfortunately we don't have a table for that many people. Please ask the smaller table size.";
    }

    size = parseInt(prompt(askAboutTableSize));
    maxSize = Math.max(...tableSizes);
    if (size != 0 && maxSize >= size) {
      break; //table(s) of that size exist
    }
  }

  let tableNumber = 0;
  let availableTable = checkAvailibility(size); //returns first free table of the correct size or above
  console.log();
  if (availableTable) {
    tableNumber = availableTable; // get first available table of this size // this table is now occupied by this person
    console.log(tableSizes);
  } else {
    alert(
      `I'm sorry, we have no tables available for ${size} or more people. Try again later!`
    );
    return false;
  }

  alert(
    "You got a table of number: " +
      tableNumber +
      ", which by default can fit " +
      tableSizes[tableNumber] +
      " people."
  );
  customers.push([name, tableNumber]);
  console.log(customers);
}

// -------------------------sneaky attack -------------------------
let sneakyAttackId = 0;

function sneakyAttack() {
  sneakyAttackId = setInterval(() => {
    let tableSneaked = getRandomInt(0, tableSizes.length);
    isOccupied[tableSneaked] = true;
    customers.push([randomName(), tableSneaked]);
    console.log("Shhhhhhhh");
    console.log(customers);
    console.log(isOccupied);
    return;
  }, 10000);
  console.log("attackId", sneakyAttackId);
}

function stopSneakyAttack() {
  if (sneakyAttackId != 0) {
    clearInterval(sneakyAttackId);
    console.log(`Sneaky attack of id ${sneakyAttackId} stopped.`);
  }
}

// -------------------------free table -------------------------
function freeTable() {
  let index = parseInt(
    prompt(
      "Provide an index to free its table. It should be greater or equal to 0, but less than " +
        tableCount +
        "."
    )
  );
  while (index < 0 || index >= tableCount) {
    index = parseInt(
      prompt(
        "Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " +
          tableCount +
          "."
      )
    );
  }
  console.log(customers);
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i][1] == index) customers.splice(i, 1);
  }
  console.log(customers);
}
