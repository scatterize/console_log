let youLatestFilm = '';
let youFilmRating = '';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },

  rememberMyFilms: function () {
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
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
    console.log(personalMovieDB.privat);
  },

  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      let k = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if (k == '' || k == null) {
        console.log('invalid data');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = k;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
