import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f3ddk3232323233",
    title: "Terminator",
    genre: { _id: "5b21adj3jdk3jkdsnd233ndndj233jc", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: true,
  },
  {
    _id: "332iodjia232j323i2o3j33jdlc",
    title: "Die Hard",
    genre: { _id: "5b21adj3jdk3jkdsnd233ndndj233jc", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "332iodrrswasa2322o3j33jdlc",
    title: "Red Notice",
    genre: { _id: "5b21adjscccds453nd233ndndj233jc", name: "Comedy" },
    numberInStock: 3,
    dailyRentalRate: 4,
  },
  {
    _id: "3ww3iodrrswaa232j323i2o3j33jdlc",
    title: "Spenser Confidential",
    genre: { _id: "5b21adjscccds453nd233ndndj233jc", name: "Comedy" },
    numberInStock: 3,
    dailyRentalRate: 4,
  },
  {
    _id: "3ww3ioyejsi233i2o3jdd33jdlc",
    title: "The Silence",
    genre: { _id: "5b21adj3jdk3dcdcdc33dndndj233jc", name: "Thriller" },
    numberInStock: 3,
    dailyRentalRate: 4,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}
