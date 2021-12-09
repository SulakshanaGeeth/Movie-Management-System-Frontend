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
  {
    _id: "332iodrrswasa2322o3j33jdlc",
    title: "Red Notice",
    genre: { _id: "dljd23d23dlddl32nldld", name: "Comedy" },
    numberInStock: 3,
    dailyRentalRate: 4,
  },
  {
    _id: "3ww3iodrrswaa232j323i2o3j33jdlc",
    title: "Spenser Confidential",
    genre: { _id: "dljd2323dlddd32nldld", name: "Comedy" },
    numberInStock: 3,
    dailyRentalRate: 4,
  },
  {
    _id: "3ww3ioyejsi233i2o3jdd33jdlc",
    title: "The Silence",
    genre: { _id: "dljd2323sdlddd32nldld", name: "Horror" },
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
