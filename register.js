var apiEndPoint = "https://apigenerator.dronahq.com/api/Mix5ZF9O/film/";
var formMovie = document.getElementById("register");
var submitButton = document.getElementById("submit");
var title = document.getElementById("title");
var overview = document.getElementById("sinopse");
var genreHTML = document.getElementById("genre");
var vote = document.getElementById("vote");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    var genre = genreHTML.value.split(",");
    var Movie = {
        title: title.value,
        overview: overview.value,
        genre: genre,
        vote_avarage: vote.value
    };
    fetch(apiEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Movie)
    })
        .then(function (response) { return response.json(); })
        .then(function () {
        title.value = "";
        overview.value = "";
        genreHTML.value = "";
        vote.value = "";
        var Success = document.createElement("div");
        Success.innerHTML = "Filme Enviado com Sucesso";
        formMovie === null || formMovie === void 0 ? void 0 : formMovie.appendChild(Success);
    });
});
