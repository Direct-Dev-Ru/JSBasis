"use strict";

let _number = 5;
console.log(_number);

//Константы не совсем константы ...
const obj = {
    a: 50
};
obj.a = 60;
console.log(obj);

// var лучше не использовать !!!
console.log(name);
var name = 'Ivan';

/* {
    let result = 50; // let внутри блока
}
console.log(result);//будет ошибка */

function makeTest(x, y) {
    let i = 0;
    functionBody = `return ${x}`;
    do {
        functionBody += `*${x}`;
        i++;
    } while (i < (y - 1));
    console.log(functionBody);
    return new Function(functionBody);
}

let expectedFunction = makeTest(3, 4);
console.log(expectedFunction());