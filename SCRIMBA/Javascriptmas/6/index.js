// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
    /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */
    
    return new Array(Math.floor(Math.random()*10+1)).fill("🌮") // replace this empty tray array

}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
// Math random will not give number 10 like this "Math.random() * (10 - 1) + 1"
for (let i=0; i <1000; i++){
    let randomNumber = Math.random() * (10 - 1) + 1
    if (randomNumber === 10){
        console.log("the number is 10")
    } else {
        console.log("somen other number")
    }
}