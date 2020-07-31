"use strict";

let number = 4.23;

console.log(4/0);
console.log('str'*9);

const person="Anton \nKuznetcov";
console.log(person);

const bool = true;

let und;
console.log(typeof(und) === 'undefined');


const obj = {
    name: 'Anton',
    age: 42,
    isMarried: true
};

console.log(obj.name + ' '+obj.age+' is married: '+obj.isMarried);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
let arr2 = [... arr]; // клонирование массива
arr2[1] = 'lime.jpg';
console.log(arr[1]);