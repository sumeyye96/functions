function convertToUSD (euro) {
   let dollar ;
  
    let convertToUSD = euro/1.4
    return convertToUSD;
} 
console.log(convertToUSD(1));

function convertToBRL (euro) {
    let brl ;
    let fee = euro*99/100;
    let convertToBRL = fee/5.7;

    return convertToBRL;
}
console.log(convertToBRL(1));


function convertToCurrency(currency,euro) {
     if (currency= "brl") {
        return convertToBRL(euro);
    } else if (currency= "dollar") {
        return convertToUSD(euro);
     }else {
        return euro;
    }

}
console.log(convertToCurrency("dollar",1))
console.log(convertToCurrency("brl",1))
