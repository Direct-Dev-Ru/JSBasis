'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
// с точкой !!!!
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const heart = wrapper.querySelector('.heart');

// установка inline стилей
box.style.backgroundColor = 'grey';
box.style.width = '500px';
//или
box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

for (let index = 0; index < hearts.length; index++) {
    const element = hearts[index];
    element.style.backgroundColor = 'grey';
}
//или
hearts.forEach(item=>{
item.style.backgroundColor = 'orange';
});


//Создание элемента
const div = document.createElement('div');
//const text = document.createTextNode('Тут тут тут текст');
div.classList.add('black');
div.textContent = 'I\'m black div';
//document.body.append(div);

//wrapper.append(div);
const greydiv = document.createElement('div');
greydiv.classList.add('greydiv');

wrapper.appendChild(greydiv);

//wrapper.prepend(div);

// добавится только один элемент!
hearts[0].before(div);
//hearts[2].after(div);
// добавится только один элемент!

//новый метод
hearts[1].replaceWith(circles[0]);
//старый метод
wrapper.replaceChild(circles[1],hearts[2]);

//новый метод
//hearts[2].remove();
//старый метод
//wrapper.removeChild(hearts[1]);

greydiv.innerHTML = `<b>Hello</b>`;

greydiv.insertAdjacentHTML('beforeend','<i>world</i>');


