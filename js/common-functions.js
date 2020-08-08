function pow(x, n) {

    if (!(parseInt(x) && parseInt(n))) {
        return NaN;
    }

    if (n < 0) {
        return NaN;
    } else {
        if (n === 0 && x === 0) {
            return NaN;
        }
        if (n === 0) {
            return 1;
        }
    }

    if (Math.trunc(n) - n !== 0) {
        return NaN;
    }

    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function deepObjectCopy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        const element = mainObj[key];
        if (typeof (element) === "object") {
            objCopy[key] = deepObjectCopy(element);
        } else {
            objCopy[key] = element;
        }
    }
    return objCopy;
}

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