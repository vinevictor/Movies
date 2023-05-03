var apiEndPoint = "https://apigenerator.dronahq.com/api/Mix5ZF9O/film";
var movies;
var sectionFilmConten = document.querySelector(".FilmContent");
fetch(apiEndPoint)
    .then(function (res) {
    movies = res.json();
    return movies;
})
    .then(function (movies) {
    addDisplay(movies);
});
function addDisplay(movies) {
    movies.forEach(function (movie) {
        var newCard = document.createElement("div");
        newCard.classList.add("Card");
        newCard.innerHTML = "\n        <span>Titulo: ".concat(movie.title, "</span>\n        <span>G\u00EAnero: ").concat(movie.genre.toString(), "</span>\n        <span>Nota: ").concat(movie.vote_avarage, "</span>\n        <span>Sinopse: ").concat(movie.overview, "</span>\n      ");
        sectionFilmConten.appendChild(newCard);
    });
}
