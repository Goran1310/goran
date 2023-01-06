//Maps: Challenge

//Below is a list of Oscar-winning Best Pictures from the last several years.
// 2020 - "Parasite"
// 2019 - "Green Book"
// 2018 - "The Shape of Water"
// 2017 - "Moonlight"
// 2016 - "Spotlight"
// 2015 - "Birdman"
// 2014 - "12 Years a Slave"
// 2013 - "Argo"

//1. Create a new Map with the Best Pictures list from above.
//Make sure your keys are the year, BUT they can be any format.
const oscar = new Map();

oscar.set(2020, "Parasite");
oscar.set(2019, "Green Book");
oscar.set(2018, "The Shape of Water");
oscar.set(2017, "Moonlight");
oscar.set(2016, "Spotlight");
oscar.set(2015, "Birdman");
oscar.set(2014, "12 Years a Slave");
oscar.set(2013, "Argo");
//2. What film won best picture in 2015?
const bestPicture2015 = oscar.get(2015);
console.log("What film won best picture in 2015?", bestPicture2015);
//3. Does this list contain Best Picture from 2010? 2018?
const bestPicture2010 = oscar.has(2010);
console.log("Does this list contain Best Picture from 2010?",bestPicture2010);
const bestPicture2018 = oscar.has(2018);
console.log("Does this list contain Best Picture from 2018?",bestPicture2018);
//4. How many films are included in this list?
const inList = oscar.size;
console.log(`How many films are included in this list? ${inList}`);
//5. What is the second key in this movies Map?
const oscarKey = oscar.keys();
const firistoscarKey = oscarKey.next().value;
const secondoscarKey = oscarKey.next().value;
console.log(`What is the second key in this movies Map? ${secondoscarKey}`);
//6. What is the third value in this movies Map?
const oscarValue = oscar.values();
oscarValue.next().value;
oscarValue.next().value;
const thirdoscarValue = oscarValue.next().value;
console.log(`What is the third value in this movies Map?${thirdoscarValue}`)
//7. What is the first set of entries in this movies Map?
const [Key1] = oscar.keys();
console.log(Key1); 
//8. Loop over the map, and if the movie won Best Picture before 2017,
//log it in the console. Include the year and the movie.
oscar.forEach((value, key) => {
    if (key < 2017) {
        console.log(`Best Picture before 2017 is this ${key}: ${value}`);
    } else {
    }
}
)
//9. Delete the Best Picture from 2013 from your movies Map.
console.log("Delete the Best Picture from 2013", oscar.delete(2013));
console.log("Confirm by the size entries", oscar.size);
//10. Clear your movies Map.
oscar.clear();
console.log("Confirm by the size entries", oscar.size);

