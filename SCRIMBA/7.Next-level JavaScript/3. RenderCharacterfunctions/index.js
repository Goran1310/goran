/*
CHALLENGE
1. Strip out the hero and monster data (element id, name, avatar, 
health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables 
as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and 
once with the monster variables to that both are rendered
*/

const heroElementId = "hero"
const heroName = "Wizard"
const heroAvatar = "images/wizard.png"
const heroHealth = "60"
const heroDiceRoll = 6

const monsterElementId = "monster"
const monsterName = "Orc"
const monsterAvatar = "images/orc.png"
const monsterHealth = "10"
const monsterDiceRoll = 4

function renderCharacter(elementId, name, avatar, health, diceRoll){
  document.getElementById(elementId).innerHTML = 
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health}</b></p>
        <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
    </div>`;   
}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll)
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll)
    
