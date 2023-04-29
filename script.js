
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
 
    if (lastFilm != null && markFilm != null && lastFilm != "" && markFilm != "" && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = markFilm;
        console.log("done");
    } else { 
        console.log("error");
        i--;
    }

        
   
}

console.log(personalMovieDB);