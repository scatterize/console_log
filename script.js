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

youLatestFilm = prompt('Один из последних просмотренных фильмов?', '');
youFilmRating = prompt('На сколько оцените его?', '');
let youLatestFilm2 = prompt('Один из последних просмотренных фильмов?', '');
let youFilmRating3 = prompt('На сколько оцените его?', '');
personalMovieDB.movies[youLatestFilm] = youFilmRating;
personalMovieDB.movies[youLatestFilm2] = youFilmRating3;

console.log(personalMovieDB);
