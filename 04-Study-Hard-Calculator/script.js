function getStudyHours(day) {
    switch (day) {
        case "pazartesi":
            
            return 5;
        case "salı":
            
            return 8;
            case "çarsamba":
            
            return 7;
            case "persembe":
            
            return 12;
            case "cuma":
            
            return 4;
            case "cumartesi":
            
            return 6;
            case "pazar":
            
            return 4;
    
        default: console.log( "Yanlış değer girdiniz")
            break ;
    }
    
    
}
console.log(getStudyHours("pazartesi"))
function getActualStudyHours(params) {
    
}