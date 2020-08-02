function pow(x, n) {

    if (!(parseInt(x) && parseInt(n))) {
        return NaN;
    }

    if (n < 0) {
        return NaN;
    }
    else{
        if (n===0 && x===0) {
            return NaN;
        }
        if(n===0){
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
        if (typeof(element) === "object") {
            objCopy[key] = deepObjectCopy(element);
        } else {
            objCopy[key] = element;
        }        
    }
    return objCopy;
}