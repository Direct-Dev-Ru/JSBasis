'use strict';
//2
let res = [ ] + false - null + true ;
console.log(res, typeof(res));

//3
let y = 1; let x = y = 2; 
console.log(x);
//4
let res = [ ] + 1 + 2  ;
console.log(res, typeof(res));

//5
console.log("12"[1]);

//6 - И запинается на лжи. Вернет null
console.log(2 && 1 && null && 0 && undefined );


//7 есть ли разница. есть - в первом случае приводится к boolean
console.log(!!( 1 && 2 ) , (1 && 2) );

//8 ИЛИ запинается на правде.
console.log(null || 2 && 3 || 4 );

//9  ен равны
let a1 = [1, 2, 3]; 
let b1 = [1, 2, 3]; 

console.log(a1 === b1);

//10
console.log(+"Infinity",typeof(+"Infinity"));

//11
console.log("Ёжик" > "яблоко");

//12
//	Чему равно 0 || "" || 2 || undefined || true || falsе ?
//вернется двойка
console.log(0 || "" || 2 || undefined || true || falsе);