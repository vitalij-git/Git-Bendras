const searchBar  = document.querySelector("#search-submit");
const moviesContainer = document.querySelector("#movies-container");
searchBar.addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchData = e.target.elements;
    const movieTitle = searchData.search.value;
    let localStorageMovies = JSON.parse(localStorage.getItem("movies"));
    localStorageMovies.forEach(movie => {
        if(movieTitle === movie.title){
            sessionStorage.setItem(movieTitle, JSON.stringify(movie));
        }            
    });
});

let localStorageMovies = JSON.parse(localStorage.getItem("movies"));
localStorageMovies.forEach(movie => {
    showMovies(movie.title, movie.cover, movie.genre, movie.year);
});

function showMovies(title, cover, genre, year){
    moviesContainer.innerHTML += `<div class="movie-container">
    <div class="movie-container-image">
        <a href="#"><img src="${cover}" alt="${title}"></a>
    </div>
    <div class="movie-container-description">
        <p><a href="#">${title}</a></p>
        <p>${year}</p>
        <p>${genre}</p>
    </div>
    </div>` 
}







   
  
    
