const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceRoll: 3,
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceRoll: 4,
    diceCount: 1
}

function renderCharacter(data) {
    const {elementId, name, avatar, health, diceRoll, diceCount } = data;
    
/*
CHALLENGE
1. declare a let called diceHtml and initialize it with an empty 
string. 
2. Use a for loop to update diceHtml so that it contains the 
HTML for our dice. The number of dice needed is specificed in 
the diceCount property of the objects.
3. Each dice should have the following HTML: <div class="dice">6</div>
4. For now, each dice will display 6
5. Swap out the diceRoll variable for diceHtml in the template
*/

let diceHtml = ''

for (let i = 0; i<diceCount; i++){
    diceHtml += `<div class="dice">6</div>`
}
    
    document.getElementById(elementId).innerHTML = 
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`   
}

renderCharacter(hero);
renderCharacter(monster);