const guestList = ['Tom', 'Mary', 'Clare', 'John', 'Liz']

/*
Challenge
1. Refactor the code below to use .map() instead of 
   the for loop.
2. Don't worry about the commas for now.
*/

const guestsHtml = guestList.map(function(guest){
    return `<div class="box">${guest}</div>`
}) 

document.getElementById('list').innerHTML = guestsHtml


