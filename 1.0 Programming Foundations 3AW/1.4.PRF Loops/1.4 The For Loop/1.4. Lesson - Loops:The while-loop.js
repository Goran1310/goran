const array = [];
for ( let i = 0; i < 20; i++) {
    array.push(i);
}

for (let i = 0; i < array.length; i++) {

    if (array[i] % 7 === 0) {
        console.log('first multiplicity of 7'+ array[i]);
        break;
    }
    else {
        console.log(array[i]);
    }
};

// Create an array containing some numbers. 

// Print all numbers from the array beginning until becoming a number which is a multiplicity of 7.

// Print information that the first multiplicity of 7 has been found and get out of the loop. 

// To check whether the number is a multiplicity of 7, we can use the remainder operator (%).