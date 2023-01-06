// let finalResult;

let evenOddResult = document.getElementById("preview");

    // Add your code here
    //<div class="preview">
    let one = 46;
    let two = 2;
    let three = 3;
    let four = 4;
    let five = one + two;
    let six = four - three;
    finalResult = five * six;
    evenOddResult = (finalResult %= 2)
   // </div>
    // Don't edit the code below here!

    const section = document.querySelector('section');

    const para1 = document.createElement('p');
    const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
    para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
    const para2 = document.createElement('p');
    const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
    para2.textContent = evenOddResultCheck;

    section.appendChild(para1);
    section.appendChild(para2);