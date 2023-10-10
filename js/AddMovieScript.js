document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const cover = document.getElementById('cover').value;
    const genres = getSelectedGenres();
    const year = document.getElementById('year').value;

    addMovie(title, cover, genres, year);
    saveMovieToLocalStorage(title, cover, genres, year);
    this.reset();
});

function getSelectedGenres() {
    const checkboxes = document.getElementsByName('genre');
    const selectedGenres = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    return selectedGenres;
}

function addMovie(title, cover, genres, year) {
    const movieList = document.getElementById('movieList');
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
        <img src="${cover}" alt="${title}">
        <h2>${title}</h2>
        <p>Genres: ${genres.join(', ')}</p>
        <p>Release Year: ${year}</p>
    `;
    movieList.appendChild(movieCard);
}


function saveMovieToLocalStorage(title, cover, genre, year) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push({ title, cover, genre, year });
    localStorage.setItem('movies', JSON.stringify(movies));
}

function loadMoviesFromLocalStorage() {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.forEach(movie => {
        addMovie(movie.title, movie.cover, movie.genre, movie.year);
    });
}

// Call the function to load movies from local storage when the page loads
loadMoviesFromLocalStorage();