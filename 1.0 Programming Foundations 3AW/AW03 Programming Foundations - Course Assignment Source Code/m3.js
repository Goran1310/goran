//#1 Function storeValue() which takes the data from a prompt and stores it within the global variable. If data is provided, show it in an alert
let global;

function storeValue() {
    const result = prompt("Provide the new data if you want to change it. Otherwise click Cancel.");
    if(result == null) {
        global = result;
    } else {
        alert(result);
    }
    confirm(global);
}
//#2. The function addTwoNumbers() should get two numbers from the user and show their sum in an alert. 
function addTwoNumbers() {
    let num1 = parseInt(prompt("Provide the the first number \"A\""));
    let num2 = parseInt(prompt("Provide the the first number \"B\""));
    console.log(num1, typeof num1, isNaN(num1));
    console.log(num2, typeof num2, !isNaN(num2));
  if(isNaN(num1) || isNaN(num2)) {
    return alert (`You typed wrong input
    Both ${num1} and ${num2} inputs need to be a numbers. Please try again!`)
    //   alert(" The data is not in the correct format!!!");
      return false;
  } else {
      var total= num1 + num2;
      alert("The total sum of your numbers are: " + total);
      return true;
  }
}
function extractMiddleString() {
    const text = prompt("Provide string containing at least 5 characters.")
    if(text.length < 5) {
        alert("Wrong data");
        return;
    } else {
    const startIndex = text.length / 2;
    const length = Math.round(text.length / 4);
    let result = text.slice((startIndex - length), (startIndex + length) + (text.length % 2))
    alert(
        `You typed: ${text}.
        Middle part: ${result}`);
    }
}

function stringReplace() {
    let text = prompt("Provide string containing at least 5 characters.");
    if(text.length <= 5 || typeof text !== "string") {
        alert("Wrong data");
        return;
    } else {
        let newB = text !== "string";
        let newStr = text.replace(/a/ig, '@').replace(/e/ig, '3').replace(/o/ig, '0');
        alert(`${newStr} \n
        Control: typeof text !== "string"  ${newB} `);
    }
}    
//Hello to you and your BEST friend!

function ifExample() {
    const age = parseInt(prompt("How old are you?"));
    if(isNaN(age) || age > 1){
        if(confirm("Are you sure that your age is: " + age + "?")) {
            confirm("1Definitely?");
            alert("1Your age is " + age + "!");
            return;
        } else {
            alert("I still don't know your age :(");
        }
    }
}

function switchExample() {
    const number = parseInt(prompt("Please provide a number from 1 to 5"));
    if(isNaN(number) || number < 1 || number > 5) {
        alert("Wrong data");
        return;
    } else {
            switch(number) {
                case 1:
                    alert("Your favourite number is 1. It means you probably always want to win everything!")
                    break;
                case 2:
                    alert("Your favourite number is 2. It means you probably have really good relations with people!")
                    break;
                case 3:
                    alert("Your favourite number is 3. It means you probably don't like to take a risk!")
                    break;
                case 4:
                    alert("Your favourite number is 4. It means you probably are not afraid about anything!")
                    break;
                case 5:
                    alert("Your favourite number is 5. It means you probably are a perfect student!")
                    break;
                default:
                    alert("Something went wrong.")
                    break;
            }
        }    
    }


let spliceText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare mauris eget tortor accumsan posuere. Mauris pharetra pellentesque libero, ut cursus eros consectetur nec. Suspendisse id erat vitae tellus cursus rutrum ut sit amet nisi. Aliquam cursus ultrices nisl in vestibulum. Nunc lacinia metus a venenatis pretium. Nullam vitae tincidunt ante. Duis posuere, dolor ac accumsan consequat, ex mi congue sem, sit amet fringilla tellus velit at neque. Donec luctus mi eu ligula volutpat semper. Maecenas vulputate bibendum velit, at finibus velit consectetur sed. Maecenas commodo feugiat lorem, vitae eleifend velit iaculis ut. Duis ac suscipit nisl. Sed vel metus.";
let spliceText1 = spliceText.replaceAll(',', '');
let spliceText2 = spliceText1.replaceAll('.', '');
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
console.log(spliceText2);
console.log(spliceText2.split(' ').length);
function spliceExample() {
    //text from: https://www.lipsum.com/ - 100 words
    const array = spliceText2.split(" ");
    console.log(array);
    const length = parseInt(prompt("Specify the word's length:"));
    if(isNaN(length) || length <= 0) {
        alert("Wrong length");
        return;
    } else {
    const index = array.find(x => x.length == length);
    if(index.length > 0) {
        console.log(index.length);
        const element = array.indexOf(index);
        console.log(element)
        array.splice(element, 3, index, index);
        console.log(array);
        spliceText = array.join(" ");
        console.log(spliceText);
        }
    }
}

function iteratorMethods() {
    const toAdd = prompt("Specify the text to add to each element of the current string")
    let array = spliceText.split(" ");
    array = array.map( x => x + toAdd);
    console.log(array);
    spliceText = array.join(" ");
    console.log(spliceText);
}

function infiniteLoop() {
    while(true) {
        const res = prompt("Write STOP to exit");
        if(res === "STOP") {
            break;
        }
    }
}

function ultimateExample() {
    const n = parseInt(prompt("Please provide the length of the side of the square"))
    if (isNaN(n) || n < 0 && n > 50) {
        alert("Wrong data");
        return;
    }
    for(let i=0; i<n; i++) {
        let line = "";
        for (let j=0; j<n; j++) {
            const number = Math.round(Math.random() * 4);
            switch(number) {
                case 1:
                    line += ".";
                    break;
                case 2:
                    line += "X";
                    break;
                case 3:
                    line += "|";
                    break;
                case 4:
                    line += "_";
                    break;
                default:
                    line += " ";
                    break;
            }
        }
        console.log(line);
    }
}

