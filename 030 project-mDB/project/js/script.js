/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Конан-Варвар",
        "Терминатор",
        "Доспехи Бога",
        "Выход Дракона",
        "Робокоп"
    ]
};

const addBlocks = document.querySelectorAll('.promo__adv img');
addBlocks.forEach(element => {
    element.remove();
});

const promoBgDiv = document.querySelector('.promo__bg');

const promoGenreDivs = Array.from(promoBgDiv.getElementsByClassName('promo__genre'));
promoGenreDivs.forEach(element => {
    element.textContent = "МЫЛОДРАМА";
});


promoBgDiv.style.background = "url(./img/bg.jpg) top center/cover no-repeat";

const listFilms = document.querySelectorAll('.promo__interactive-item');

const sortedMovies = movieDB.movies.sort();

for (let index = 0; index < sortedMovies.length; index++) {
    const element = listFilms[index];
    element.innerText = `${index+1}. ${sortedMovies[index]}`;
    const deletediv = document.createElement('div');
    deletediv.classList.add('delete');
    element.appendChild(deletediv);
}