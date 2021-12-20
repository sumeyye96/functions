

var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 92;
var heightJohn = 1.95;
//var BMIMark = massMark / (heightMark * heightMark);
//var BMIJohn = massJohn / (heightJohn * heightJohn);

function calculateBMI (mass, height) {
    return Math.floor(mass / (height * height));
}

console.log("Mark's BMI is " + calculateBMI(massMark,heightMark) + " and John's BMI is " + calculateBMI(massJohn, heightJohn) + ".");
