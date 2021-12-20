/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/
value = 1000;
function convertToUSD(value) {
  let result = value*1.4;
  return result;
}
console.log(convertToUSD(1000));
/*
CURRENCY FORMATTING
===================
The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions, which means you only convert 99% of the £ to BRL.
  */
 
 function convertToBRL(value) {
   let result = (value*5.7)*.99;
   return result;
  }
  console.log(convertToBRL(1000));

/* ======= TESTS  ===== 
*/


function convertToAll(currency, value) {
  if (currency === "USD") {
    return convertToUSD(value);
  } else if (currency === "BRL"){
    return convertToBRL(value);
  } else {
    return "enter correct currency"
  }
}
  console.log(convertToAll("USD", 1000));

  
// Test Function - first format
  function test(currency, value, expected) {
    let result = convertToAll(currency, value);
    if (result === expected) {
      console.log(`PASSED: Your function converts Pound to ${currency} succesfully`);;
    } else {
        console.log(`FAILED: expected: ${expected} ${currency} but your function returned: ${result}`);
    }
}
test("USD", 1000, 1400); // call function for test;
test("BRL", 1000, 5643); // call function for test;


// Second format
function tester(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
    }

    console.log(`${test_name}: ${status}`);
}

tester("convertToUSD function works", convertToUSD(32), 44.8);
tester("convertToBRL function works", convertToBRL(30), 169.29);
