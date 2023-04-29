
const numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};


for (let i = 0; i < 2; i++) { 
    const lastFilm = prompt("Останній переглянутий фільм?", ""),
          markFilm = prompt("На скільки оціните фільм?", "");
 
    if (lastFilm != null && markFilm != null && lastFilm != "" && markFilm != "" && lastFilm.length < 50 && markFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = markFilm;
        console.log("done");
    } else { 
        console.log("error");
        i--;
    }
}
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто мало фільмів");
    } else if ( personalMovieDB.count>= 10 && personalMovieDB.count < 30) {
        console.log("Ви класичний глядач");
    } else if (personalMovieDB.count  >= 30) {
        console.log("Ви кіноман");
    } else { 
        console.log("error");
    }
   


console.log(personalMovieDB);