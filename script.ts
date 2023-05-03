const apiEndPoint: string =
  "https://apigenerator.dronahq.com/api/Mix5ZF9O/film";

let movies: Promise<Movie[]>;

const sectionFilmConten = document.querySelector(
  ".FilmContent"
) as HTMLDivElement;

interface Movie {
  title: string;
  overview: string;
  genre: string[];
  vote_avarage: string;
}

fetch(apiEndPoint)
  .then(function (res: Response) {
    movies = res.json();
    return movies;
  })
  .then(function (movies: Movie[]) {
    addDisplay(movies);
  });

function addDisplay(movies: Movie[]) {
  movies.forEach((movie) => {
    const newCard = document.createElement("div") as HTMLDivElement;
    newCard.classList.add("Card");
    newCard.innerHTML = `
        <span>Titulo: ${movie.title}</span>
        <span>Gênero: ${movie.genre.toString()}</span>
        <span>Nota: ${movie.vote_avarage}</span>
        <span>Sinopse: ${movie.overview}</span>
      `;
    sectionFilmConten.appendChild(newCard);
  });
}
