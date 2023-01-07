const energyCostEuros = [140, 153, 164, 153, 128, 146]
const exchangeRate = 1.13

// const energyCostDollars = []

// for (let i = 0; i < energyCostEuros.length; i++){
//     energyCostDollars.push((energyCostEuros[i]*exchangeRate))
// } 

const energyCostDollars = energyCostEuros.map(function(euroCost){
    return euroCost * exchangeRate
})
console.log(energyCostDollars)


// const guestsHtml = guestList.map(function(name){
//     return name;
// })
// console.log(guestsHtml)
// document.getElementById('list').innerHTML = guestsHtml