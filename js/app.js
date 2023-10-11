const searchForm  = document.querySelector("#search-submit");
const moviesContainer = document.querySelector("#movies-container");

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchData = e.target.elements;
    const movieTitle = searchData.search.value;
    let localStorageMovies = JSON.parse(localStorage.getItem("movies"));
    localStorageMovies.forEach(movie => {
        if(movieTitle = movie.title){
            console.log(movie);
           showMovies(movie.title, movie.cover, movie.genre, movie.year);
        } else{
            moviesContainer.innerHTML = `<h1>Tokio filmo nerado</h1>`;
            moviesContainer.style.color="white";
            moviesContainer.style.display="block";
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
    </div>` ;
}







   
  
    
