'use strict';

let num = 20;
let text = "First";
const func = function showFirstMessage(text) {
    let internalValue = text + num;
    return internalValue;
};

text = "Second fruit is very tasty";
let aFunc = func(text);

console.log(text.slice(
    text.indexOf('fruit'),
    text.indexOf('fruit') + ('fruit').length));

console.log(Math.round(Math.random() * 100));