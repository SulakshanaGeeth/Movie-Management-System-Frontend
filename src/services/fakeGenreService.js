export const genres = [
  { _id: "5b21adj3jdk3jkdsnd233ndndj233jc", name: "Action" },
  { _id: "5b21adjscccds453nd233ndndj233jc", name: "Comedy" },
  { _id: "5b21adj3jdk3dcdcdc33dndndj233jc", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
