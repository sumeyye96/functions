// give instruntions to the robot whatever you want
function getDrink(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("turn left");
  console.log("go to the market");
  
  console.log("buy " + calcBottles(money, costPerBottle ) + " bottles of drink");
  
  console.log("pay for drink");
  console.log("leave market");
  console.log("come back to the House");

  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle){
  var numberOfBottles = Math.floor(startingMoney/costPerBottle)
  return numberOfBottles;
}

// *** this is first option ***
// function calcChange(startingAmount, costPerBottle){
//   var change = startingAmount % costPerBottle;
//   return change;
// }

// *** this is second option ***

function calcChange(startingAmount, costPerBottle){
  var change = startingAmount - (costPerBottle * calcBottles(startingAmount, costPerBottle));
  return console.log("Hello master, here is your $" + change + " change");;
}

getDrink(10, 3);
