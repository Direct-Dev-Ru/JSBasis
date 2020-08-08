/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';



document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Конан-Варвар",
            "Терминатор",
            "Доспехи Бога",
            "Выход Дракона",
            "Робокоп"
        ]
    };

    const sortArr = (arr) => {
        return arr.sort();
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

    function deleteMovieHandler(e) {
        deleteMovieFromList(e.target.parentElement);

    }

    function deleteMovieFromList(element) {
        //console.log(element.textContent);
        const movieNameToDelete = element.textContent.substr(element.textContent.indexOf(" "), element.textContent.length).trim();
        //console.log(movieNameToDelete);
        movieDB.movies = movieDB.movies.filter((item) => {
            return !(item === movieNameToDelete);
        });
        //console.log(movieDB.movies);
        element.remove();
        refreshFilmList(movieDB.movies);
    }



    function refreshFilmList(movies, newItem) {
        const listFilms = document.querySelectorAll('.promo__interactive-item');
        const listFilmsContainer = document.querySelector('.promo__interactive-list');

        if (newItem) {
            movieDB.movies.push(newItem.newFilmName);
        }
        const sortedMovies = sortArr(movies);

        for (let index = 0; index < sortedMovies.length; index++) {
            let element = listFilms[index];
            if (!element) {
                const newLi = document.createElement('li');
                newLi.classList.add('promo__interactive-item');
                listFilmsContainer.appendChild(newLi);
                element = newLi;
            }

            element.innerText = `${index+1}. ${sortedMovies[index]}`;

            if (~element.innerText.indexOf("✪")) {
                element.style.fontWeight = "700";
            } else {
                element.style.fontWeight = "400";
            }

            const deletediv = document.createElement('div');
            deletediv.classList.add('delete');
            element.appendChild(deletediv);

            const delDiv = element.querySelector('.delete');
            delDiv.removeEventListener('click', deleteMovieHandler);
            delDiv.addEventListener('click', deleteMovieHandler);
        }
    }
    refreshFilmList(movieDB.movies);

    //Добавить фильмец

    const formAdd = document.querySelector('form.add');
    const buttonAdd = formAdd.querySelector('button');
    const newFilm = formAdd.querySelector('input.adding__input');
    const isFavourite = formAdd.querySelector('input[type="checkbox"]');
    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        let newFilmName = newFilm.value.trim();

        if (newFilmName) {
            if (isFavourite.checked) {
                newFilmName = newFilmName.length > 21 ? newFilmName.substr(0, 20) + "✪..." : newFilmName + "✪";
            } else {
                newFilmName = newFilmName.length > 21 ? newFilmName.substr(0, 21) + "..." : newFilmName;
            }

            //movieDB.movies.push(newFilmName); U+2605
            refreshFilmList(movieDB.movies, {
                newFilmName: newFilmName,
                isFavourite: isFavourite.checked
            });
            newFilm.value = '';
        } else {
            alert('input film name');
            newFilm.focus();
        }
    });
});