const apiEndPoint: string =
  "https://apigenerator.dronahq.com/api/Mix5ZF9O/film/";

const formMovie = document.getElementById("register");
const submitButton = document.getElementById("submit");

const title = document.getElementById("title") as HTMLInputElement;
const overview = document.getElementById("sinopse") as HTMLInputElement;
const genreHTML = document.getElementById("genre") as HTMLInputElement;
const vote = document.getElementById("vote") as HTMLInputElement;

submitButton?.addEventListener("click", (e) => {
  e.preventDefault();

  const genre: string[] = genreHTML.value.split(",");

  const Movie = {
    title: title.value,
    overview: overview.value,
    genre: genre,
    vote_avarage: vote.value,
  };

  fetch(apiEndPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Movie),
  })
    .then((response) => response.json())
    .then(function () {
      title.value = "";
      overview.value = "";
      genreHTML.value = "";
      vote.value = "";

      const Success = document.createElement("div") as HTMLDivElement;
      Success.innerHTML = "Filme Enviado com Sucesso";

      formMovie?.appendChild(Success);
    });
});
