'use strict';

const testArray = [1,2,3,6,8];

testArray.pop();
testArray.push(10);

/* for (let i = 0; i < testArray.length; i++) {
    let element = testArray[i];
    console.log(element);
}

for (let iterator of testArray) {
    console.log(++iterator);
} */

/* testArray.forEach((element,idx, arr) => {
    console.log(`Index ${idx}: ${++element} внутри массива ${arr}`);
}); */


//const str = "brocolli, apple,orange,pineapple";
const str = "2,13,26,8,10";
const splitArray = str.split(",");
console.log(splitArray.join(" # "));

splitArray.sort(compareNum);
console.log(splitArray.join(" # "));
function compareNum(a,b) {
    return a-b;
}
