/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/
// function panic(text) {    
//     s
//     return text.replaceAll(' ', ' 😱 ').toUpperCase() + '!';
// }

// const panic = (str) => str.toUpperCase().replaceAll(" ", " 😱 ").concat("!")

function panic (x) {
    if (x !== " ") {
        return x.toUpperCase().replaceAll(" ", " 😱 ").concat("!");
        
    }
}
// function panic(input) {
//     return `${input.split(" ").join(" 😱 ").toUpperCase()}!`
// }
// const panic = (message) => {
//     if(!message.includes(' ')) {
//         return `${message.toUpperCase()}!`
//     } else {
//         return `${message.replaceAll(' ', ' 😱 ').toUpperCase()}!`
//     }
// }
// function panic(sentence) {
//     const wordOrPhrase = sentence.split(" ");
//     if (wordOrPhrase.length > 1) sentence = wordOrPhrase.join(" 😱 ");
//     return sentence.toUpperCase() + "!";
// }

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"));
// console.log(panic("Hello"));

