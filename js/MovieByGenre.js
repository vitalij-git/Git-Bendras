

const moviesContainerByGenre = document.querySelector("#movies-container-by-genre");
let localStorageMovies = JSON.parse(localStorage.getItem("movies"));
let queryString= window.location.search;
let params = new URLSearchParams(queryString);
let urlGenre = params.get('genre');

localStorageMovies.forEach(movie => {
    showMovies(movie.title, movie.cover, movie.genre, movie.year);
});

let sessionStorageGenre = sessionStorage.getItem("Genre");
function showMovies(title, cover, genre, year){
    if (genre.includes(urlGenre)){
        console.log("gerai");
        moviesContainerByGenre.innerHTML += `<div class="movie-container">
        <div class="movie-container-image">
            <a href="#"><img src="${cover}" alt="${title}"></a>
        </div>
        <div class="movie-container-description">
            <p><a href="#">${title}</a></p>
            <p>${year}</p>
            <p>${genre}</p>
        </div>
        </div>` 
    };                                        
};
