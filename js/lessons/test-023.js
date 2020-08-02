'use strict';

let str = 'some';
let strObject = new String(str);

console.log(strObject);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: ()=>{console.log('Hello');}
};

/* const jonh = {
    health:100
}; */

const jonh = Object.create(soldier); // inherits from soldier

//jonh.__proto__ = soldier; // deprecated

//Object.setPrototypeOf(jonh,soldier);

jonh.sayHello();

