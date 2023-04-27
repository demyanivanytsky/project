const numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

 const  lastFilm1 = prompt("Останній переглянутий фільм?", ""),
        markFilm1 = prompt("На скільки оціните фільм?", ""),
        lastFilm2 = prompt("Останній переглянутий фільм?", ""),
        markFilm2 = prompt("На скільки оціните фільм?", "");

personalMovieDB.movies[lastFilm1] = markFilm1;
personalMovieDB.movies[lastFilm2] = markFilm2;

console.log(personalMovieDB);