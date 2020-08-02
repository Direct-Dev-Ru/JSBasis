'use strict';

const personalMovieDB = {
    count: 1,
    movies: {},
    actors: {},
    genres: {},
    privat: false

};

function getObject(text){
    //debugger;
    return {content: text};
}


$('#Result').text(JSON.stringify(getObject('Sample Text')));

