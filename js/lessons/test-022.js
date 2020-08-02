'use strict';


/* let a = 5;
let b = a;

b = b+5;

console.log(a,b); */

const obj = {
    a: 5,
    b: 10,
    c: {
        x: 7,
        y: 4
    }
};
const obj2 = {
    d: 17,
    e: 20
};
console.log(typeof(obj2));
console.log(Object.assign(obj, obj2)); //слияние в один новый объект
console.log(Object.assign({}, obj2)); // поверхностная копия

const copyObj = copy(obj);
copyObj.a += 1;
copyObj.c.y += 1;
console.log(obj);
console.log(copyObj);

//Функция глубокого копирования объекта
function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        const element = mainObj[key];
        if (typeof(element) === "object") {
            objCopy[key] = copy(element);
        } else {
            objCopy[key] = element;
        }        
    }
    return objCopy;
}


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sdfdsfsd';
console.log(oldArray);
console.log(newArray);


//Spread оператор

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk','facebook'];

    console.log(internet);

function log(a,b,c) {
    console.log(a,b,c);
}

const num = [2,5,7];
log(...num);



const oldArray1 = ['a', 'b', 'c'];
const newArray1 = [...oldArray1];

newArray1[1] = 'sdfdsfsd';
console.log(oldArray1);
console.log(newArray1);

const oldObj = {
    a: 5,
    b: 10,
    c: {
        x: 7,
        y: 4
    }
};

const newObj = {...oldObj}; //тоже поверхностная копия - вложенный объектне клонируется
newObj.c.x = 8;
log(oldObj,newObj);