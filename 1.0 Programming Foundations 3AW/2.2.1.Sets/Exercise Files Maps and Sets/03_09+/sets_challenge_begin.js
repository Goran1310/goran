let displeyJs = ""

//Letters Guessed
//You are playing a game of snowman with a friend and keep track of
//letters that have been guessed using Set().
//Follow the tasks below to test your knowledge.

//1. So far, your friend has gussed the following letters: r, s, t, l, n, e.
//Create a Set using the letters guessed thus far.
const guessed = new Set();
guessed.add("r").add("s").add("t").add("l").add("n").add("e");
console.log(guessed);
//2. Your friend takes another guess: p. Before you add it to the set check
//to see if the Set has 'p'. If not, add it to the Set.
const hasP = guessed.has("p");
if(!hasP) {
    guessed.add("p");
}
//3. At this point, we will assume your friend hasn't tried to guess the same letter twice.
//The size of the Set will indicate how many guesses he's made. How many guesses
//has your friend made?
const numberOfGueses = guessed.size;
console.log("Number of guesses", numberOfGueses);
//4. Delete the letter 'l' from your Set.

guessed.delete("l");
console.log("Confirm that l is not longer in set", guessed )
//5. What is the second value in your Set?
const guesVa = guessed.values();
guesVa.next();
const secondValue = guesVa.next().value;
console.log("What is the second value in your Set? It is " + secondValue);

//6. What is the first entry in your Set?
const guessEntries = guessed.entries();
// guessEntries.next();
const firstEntry = guessEntries.next().value;
console.log("What is the first entry in your Set?" + firstEntry)
//7. For each entry in your Set, log out whether the guess was a consonant or a vowel.
//This one is a little challenging!
const vowels = ["a", "e", "i", "o", "u"];
guessed.forEach((value) => {
    let letter = vowels.includes(value) ? "vowel" : "consonante";
    console.log(`The letter ${value} is a ${letter}.`);
})
//8. Clear your Set!
guessed.clear();
console.log("Was my set clear?", guessed.size);
