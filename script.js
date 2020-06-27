const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let youLatestFilm = '';
let youFilmRating = '';

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//youFilmRating = prompt('На сколько оцените его?', '');
//let youFilmRating3 = prompt('На сколько оцените его?', '');
//personalMovieDB.movies[youLatestFilm2] = youFilmRating3;
// youLatestFilm = prompt('Один из последних просмотренных фильмов?', '');
// let youLatestFilm2 = prompt('Один из последних просмотренных фильмов?', '');
// personalMovieDB.movies[youLatestFilm] = youFilmRating;

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
if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (ersonalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

// if (youLatestFilm == '' || youLatestFilm.length > 50) {
//   alert('incorect value');
// }
