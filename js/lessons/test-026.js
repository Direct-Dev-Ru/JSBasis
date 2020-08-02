'use strict';

//1) что то в строку
console.log(String(null));
console.log(String(4));

//2)

console.log(typeof(5+'0'));


const num =5;

console.log("https://vk.com/catalog/"+num);

const fontSize = 26+'px';

// to Number
//1)
console.log(Number('4'));
//2)
console.log(typeof(Number(+'4')));

//3
console.log(parseInt('15px',10));

//To boolean
//0,'',null,undefined,NaN - это false
//остальное - true

//редко применяется
console.log(typeof(!!'4564'));