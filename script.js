let numberOfFilms;
let youLatestFilm = '';
let youFilmRating = '';

//youFilmRating = prompt('На сколько оцените его?', '');
//let youFilmRating3 = prompt('На сколько оцените его?', '');
//personalMovieDB.movies[youLatestFilm2] = youFilmRating3;
// youLatestFilm = prompt('Один из последних просмотренных фильмов?', '');
// let youLatestFilm2 = prompt('Один из последних просмотренных фильмов?', '');
// personalMovieDB.movies[youLatestFilm] = youFilmRating;
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let k = prompt('Один из последних просмотренных фильмов?', '');
    let j = prompt('На сколько оцените его?', '');

    if (k != null && j != null && k != '' && j != '' && k.length < 50) {
      personalMovieDB.movies[k] = j;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}
rememberMyFilms();
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (ersonalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}
detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}
showMyDB();
writeYourGenres();
function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    let k = prompt(`Ваш любимый жанр под номером ${i}`, '');
    personalMovieDB.genres[i - 1] = k;
  }
}
// if (youLatestFilm == '' || youLatestFilm.length > 50) {
//   alert('incorect value');
// }
