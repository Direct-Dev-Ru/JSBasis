'use strict';


const box = document.getElementById('box');

if (box) {
    console.log(box);
}

const btns = document.getElementsByTagName('button');

if (btns) {
    const secondButton = Array.from(btns).find((b) => {
        return b.innerText === "2";
    });
    console.log(btns);
    console.log(secondButton, typeof (secondButton));
    console.dir(secondButton);
}

const circles = document.getElementsByClassName('circle');

if (circles) {
    const secondCircle = Array.from(circles).find((c) => {
        return c.innerText === "2";
    });
    console.log(circles);
    console.log(secondCircle, typeof (secondCircle));
    console.dir(secondCircle);
}


// с точкой !!!!
const hearts = document.querySelectorAll('.heart');

if (hearts){
    console.log(hearts);
    hearts.forEach((h,idx)=>{
        h.innerHTML = `<p class="inhearts">${idx}</p>`;    
    });
    const heartsArray = Array.from(hearts);
    console.log(heartsArray);
}