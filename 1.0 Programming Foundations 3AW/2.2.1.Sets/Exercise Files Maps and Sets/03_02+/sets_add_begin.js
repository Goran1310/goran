//Ice Cream Flavor Suggestions
//chocolate
//vanilla
//coffee
//coffee
//strawberry
//vanilla

//Using the list of ice cream flavors above create a new Set.
const iceCream = new Set();

iceCream.add('chocolate').add('vanilla').add('coffe').add('coffe').add('coffe').add('strawberry').add('punch');
console.log(iceCream);
//Doea our set contains following flavours:
//Mint chocolate Chip?

const hasChocolate = iceCream.has("Mint chocolate Chip");
console.log("Does your set have choclate chip?", hasChocolate)

//coffe?
const hasCoffee = iceCream.has("coffee");
console.log("Does your set have coffee?", hasCoffee);
//What is the size of our ice Cream Set?
console.log(iceCream.size)
// Delete vanilla 
iceCream.delete("vanilla")
console.log("Does exist vanilla?", iceCream);
//Clear the iceCream Set
iceCream.clear();
console.log("Did you set clear?", iceCream.size)



