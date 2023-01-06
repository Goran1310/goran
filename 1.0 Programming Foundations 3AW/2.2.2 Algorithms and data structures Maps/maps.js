const menu = new Map([
    ["Margarita", 9],
    ["Pepperoni", 10],
    ["Salami", 10],
    ["Cheese Pizza", 8.5]
  ]);
  menu.set("Pepperoni", 9.5);
  menu.get("Pepperoni");
//   menu.get("Salami").push("New pizza in map", 13);

  menu.forEach (function(value, key) {
    console.log("Dish: " + key + ", price: " + value + ".");
  })

  // List all entries
let text = "";
for (const x of menu.entries()) {
  text += x;
  console.log(text);
}