let numberOfFilms;

function start() { 
    numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");
    
    while (numberOfFilms == "" || numberOfFilms==null || isNaN(numberOfFilms)) {
         numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function rememberMyFilms() { 
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
    }
rememberMyFilms();

function detectPersonalLevel() { 
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто мало фільмів");
    } else if ( personalMovieDB.count>= 10 && personalMovieDB.count < 30) {
        console.log("Ви класичний глядач");
    } else if (personalMovieDB.count  >= 30) {
        console.log("Ви кіноман");
    } else { 
        console.log("error");
    }
   


}

detectPersonalLevel(); 



function showMyDB(hidden) { 
    if (!hidden) { 
       console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {  
        personalMovieDB.genres[i - 1] =  prompt(`Ваш улюблений жанр під номером ${i}`);;
    }
}
writeYourGenres();