//Ice Cream Flavor Suggestions
//chocolate
//vanilla
//coffee
//coffee
//strawberry
//vanilla

const iceCream = new Set();
iceCream.add('chocolate')
.add('vanilla')
.add('coffee')
.add('coffee')
.add('strawberry')
.add('vanilla');

//What is the second value in our iceCream Set?
const iceCreamValues = iceCream.values();
iceCreamValues.next();
const secondValues = iceCreamValues.next();
console.log(`What is the second value in our iceCream Set?`, secondValues)
// What is first entry in ice cream set?

const iceCreamEntries = iceCream.entries();
const firstEntry = iceCreamEntries.next().value;
console.log(`What is first entry in ice cream set? ${firstEntry}`)


//Loop through our iceCream Set and if the value does NOT equal 'vanilla',
//log it in the console.

iceCream.forEach((value) => {
    if (value !== 'vanilla') {
        console.log("Flavor", value);
    }
})
