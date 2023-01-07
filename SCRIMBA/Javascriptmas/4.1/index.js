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


/* ************************************************************************ 
            SELF-IMPOSED CHALLENGE:   
                
                - Don't use any in-built methods or properties
                
                - I pretend as if "length," "toLowerCase", "endsWith", "slice", and all modern loops and iterativ methods don't exist. 
                
*************************************************************************** */

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lengthOfAlphabet = findLength(lowerCaseLetters)

function findLength(stringOrArray){
    let i = 0 
    while (stringOrArray[i] != undefined){
        i++
    }
    return i
}

function convertToLowerCase(character){
    for (let i=0; i < lengthOfAlphabet; i++){
        if (character === upperCaseLetters[i]){
            return lowerCaseLetters[i]
        }
    } 
    return character
}


function whisper(string){
    
    let whisperedString = "shh... "
    let stringArray = []
    const stringLength = findLength(string)
    const finalCharacter = stringLength-1
    
    for (let i=0; i < finalCharacter; i++){
        stringArray[i] = convertToLowerCase(string[i])
    }
    
    if (string[finalCharacter] != "!"){
     stringArray[finalCharacter] = convertToLowerCase(string[finalCharacter])
    } else {
        checkForMoreExPoints(finalCharacter-1)
    }
    
    function checkForMoreExPoints(character){
        if (stringArray[character] === "!"){
            stringArray[character] = ""
            checkForMoreExPoints(character-1)
        }    
    }
    
    const stringArrayLength = findLength(stringArray)
    
    for (let i=0; i < stringArrayLength; i++){
        whisperedString += stringArray[i]
    }
    
    return whisperedString
}


console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"))

/* End of main challenge — now I'm going to go back to using normal JS for doing the UI... */

document.getElementById("convert-button").addEventListener("click", renderWhisper)

function renderWhisper(){
    let userInput = document.getElementById("user-input").value 
    if (userInput && userInput.trim() != ""){
        userInput = userInput.trim()
        const paragraph = document.createElement("p")
        paragraph.textContent = whisper(userInput)
        document.getElementById("output-container").insertAdjacentElement("afterbegin", paragraph)
        document.getElementById("user-input").value = ""
    }
}
