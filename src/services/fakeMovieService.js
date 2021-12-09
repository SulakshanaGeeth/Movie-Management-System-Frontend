import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f3ddk3232323233",
    title: "Terminator",
    genre: { _id: "dljd2323nddkl2232nldld", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: true,
  },
  {
    _id: "332iodjia232j323i2o3j33jdlc",
    title: "Die Hard",
    genre: { _id: "dljd2323dlddl32nldld", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
