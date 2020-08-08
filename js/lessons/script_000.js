'use strict';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getDecimal(num) {
    
     if (!(!isNaN(parseFloat(num)) && isFinite(num)))
    {return NaN;} 
    
    let sep = '.';
    
    const strNum = num.toString(10);
    
    const floorLength = strNum.length-strNum.indexOf(sep,0)-1;
    const integerPart = num.toFixed(0),
        floorPart = (num-integerPart).toFixed(floorLength);

    
    return +floorPart;
}

let a=getDecimal(-12.01);
console.log(a, typeof(a));