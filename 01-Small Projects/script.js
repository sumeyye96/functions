let markHeight = 1.70
let markWeight = 80
let johnHeight = 1.90
let johnWeight = 85

function calculateBmi (mass,height) {
let bmi = Math.floor(mass/(height*height))

if (bmi<18.5) {
    return "zayıftır"
} else if (bmi<24.5) {
    return "normal kilolu"
} else if (bmi<30) {
    return "kilolu"
} else  {
    return "obez"
}
    
}

let markBmi = calculateBmi(markWeight, markHeight);
let johnBmi = calculateBmi(johnWeight, johnHeight);

console.log (`Mark'ın ${markBmi} vke`);
console.log (`John'ın ${johnBmi} vke`);