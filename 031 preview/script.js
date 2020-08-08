function firstclick(){
    alert('Click1');
}

const btn = document.querySelector('.btn2');
const overlay = document.querySelector('.overlay');

//Плохой стиль
/* btn.onclick = () => {
    alert('click2');
}; */ 

//так надо назначать
btn.addEventListener('click',() => {
    //alert('click2');
});

//Чтобы потом можно удалит надо сохранить сначала колбэк
let i =0;
const recolorElement = (event) => {
    console.log(event.currentTarget);
    
/*     if (i===1) {
        btn.removeEventListener('click',recolorElement);        
        event.target.style.color = "blue";
    } else {
        event.target.style.color = "red";
    } */
    i++;
};

//можно несколько обработчиков навесить
btn.addEventListener('click',recolorElement);
overlay.addEventListener('click',recolorElement);


const link = document.querySelector('a');

link.addEventListener('click',(ev) => {
    ev.preventDefault();
    ev.currentTarget.textContent = 'На Ютуб не пойду';
});


const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click',(ev) => {
        ev.currentTarget.style.backgroundColor = "grey";
    })
});
