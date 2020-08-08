//console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes);
console.log(document.body.firstElementChildChild);
//console.log(document.body.lastChild);
console.log(document.querySelector('#current').parentElement);

console.log(document.querySelector('[data-current="3"]').nextSibling); //получает ноду
console.log(document.querySelector('[data-current="3"]').nextElementSibling ); //получает ноду


console.log('---------------------------------------------');

const childNodes = document.body.childNodes;
for (const iterator of childNodes) {

    if (iterator.nodeName ==='#text') {
        continue;
    } else {
        console.log(iterator);    
    }

}