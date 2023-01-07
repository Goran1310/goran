/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// function whisper(message) {
//     if(message.endsWith('!')) {
//         return `shh... ${message.slice(0 ,message.length-1).toLowerCase()}`
//     } else {
//         return `shh... ${message.toLowerCase()}`
//     }       
// }

const whisper1 = (str) => {
    if(str.endsWith("!")) {
        str.slice(0,-1);
    } return `shh...${str.toLowerCase()}`
}

function whisper2(input) {
    if(typeof input === 'string') {
        return `shh...${input.replace(/!$/g,'').toLowerCase()}`
    }
}

const whisper = (txt) => 'shh... ' + txt.toLowerCase().replace(/!+$/, '');

// console.log(whisper("PLEASE STOP SHOUTING."));
// console.log(whisper("MA'AM, this is a Wendy's!"));
// console.log(whisper('The KITTENS are SLEEPING!'));

console.log(whisper1("PLEASE STOP SHOUTING."));
console.log(whisper1("MA'AM, this is a Wendy's!"));
console.log(whisper1('The KITTENS are SLEEPING!'));

console.log(whisper2("PLEASE STOP SHOUTING."));
console.log(whisper2("MA'AM, this is a Wendy's!"));
console.log(whisper2('The KITTENS are SLEEPING!'));