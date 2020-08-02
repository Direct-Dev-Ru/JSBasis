'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
        /*        toString() {
                   return `{border: "${this.border}", bg: "${this.bg}"}`;
                 },
               
                 // для хинта равного "number" или "default"
                 valueOf() {
                   return 0;
                 }      */
    },
    makeTest: function () {
        console.log('test');
    }
};
//деструкторизация объекта
const {
    border,
    bg
} = options.colors;


console.log(Object.keys(options));

let counter = 0;
for (const key in options) {
    const element = options[key];
    counter++;
    if (typeof (options[key]) === 'object') {
        for (const keyInner in element) {
            const elementInner = element[keyInner];
            console.log(`Свойство ${key}.${keyInner} имеет значение ${elementInner}`);
        }
        //console.log(`Свойство ${key} имеет значение ${element}`);
    } else {
        console.log(`Свойство ${key} имеет значение ${element}`);

    }
}
//Число строк объекта
console.log(counter);