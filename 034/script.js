'use strict';

window.addEventListener('DOMContentLoaded',() => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart',(e) => {
        e.preventDefault();

        console.log('Start', e.touches);
    });
 /*    box.addEventListener('touchmove',(e) => {
        e.preventDefault();

        console.log('Move');
    });
    box.addEventListener('touchend',(e) => {
        e.preventDefault();

        console.log('End');
    }); */


    
    //touches - список всех пальцев на экране
    //targetTouches - список всех пальцев на элементе
    //changedTouches - 
    
});


/* var str = '';
for (var i = 1034; i <= 6000; i++) {
str += String.fromCharCode(i);
}
console.log(str); */