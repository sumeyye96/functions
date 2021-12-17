let butce = 750;
let fatura1 = 124;
let fatura2 = 48;
let fatura3 = 75;
let fatura4 = 268;
fatura4=500;
function calculateTips(bill) {
    if (bill<50) {
        return bill*0.2        
    }else if (bill>=200){
        return bill*0.15
    }else {
        return bill*0.10
    }    
}
​
function  getTotalBil() {    
    let harcama = fatura1+fatura2+fatura3+fatura4  
    return harcama   
    
}
function getTotalTips() {
    let bahsis =calculateTips(fatura1)+calculateTips(fatura2)+calculateTips(fatura3)+calculateTips(fatura4)
    return bahsis
}
​
function budgetDust() {
    if (getTotalTips()+getTotalBil()>butce*0.8) {
        return alert("Bütçeyi aştınız")
        
    }else{}
    
}
budgetDust()