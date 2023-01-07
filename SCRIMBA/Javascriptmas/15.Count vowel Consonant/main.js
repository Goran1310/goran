//ALTERNATIV A 
//function countVowelConsonant(str) {
//   // write code here
// const vowels =['a','e','i','o','u'];
// let sum = 0;
// let newArray = str.split('');
//     for (let i = 0; i < newArray.length; i++ ) {
//         vowels.indexOf(newArray[i]) > -1 ? sum++ : sum +=2
//         }
//     return sum;
// }

//ALTERNATIV B
// function countVowelConsonant(str) {
//     const vowels =['a','e','i','o','u'];
//     let total = str.length;
//     for (letter of str) {
//         if(!vowels.includes(letter)) {
//             total++
//         }
//     }
//     return total;
// }
//ALTERNATIV C
function countVowelConsonant(str) {
    const vowels = new Set (['a','e','i','o','u']);
    return str.split('').reduce((sum, char)=> vowels.has(char)? sum + 1 : sum + 2, 0)
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});