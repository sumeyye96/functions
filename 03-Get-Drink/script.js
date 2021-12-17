function calcBottle(totalMoney, bottlePrice) {
    let numberBottles = totalMoney/bottlePrice
    return Math.floor(numberBottles)
    
}
function calcChange(totalMoney, bottlePrice) {
    let paraUstu = totalMoney-calcBottle(totalMoney , bottlePrice)*bottlePrice
    return `${paraUstu} tl paraüstü`
}
​
function getDrink(totalMoney, bottlePrice) {
    let output = `Evden ayrıl \n sola dön \n markete git \n ${calcBottle(totalMoney, bottlePrice)} şişe içki al \n marketten ayrıl \n eve gel \n Merhaba iş te senin para üstün ${calcChange(totalMoney, bottlePrice)} `
    return output
    
}
console.log(getDrink(128,12))