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

let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
const speed = 2;
const pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];
let dvd = document.getElementById("dvd");
dvd.style.backgroundColor = pallete[0];
let prevColorChoiceIndex = 0;
let black = document.getElementById("black");
const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

function getNewRandomColor() {
  const currentPallete = [...pallete]
  currentPallete.splice(prevColorChoiceIndex,1)
  const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
  prevColorChoiceIndex = colorChoiceIndex<prevColorChoiceIndex?colorChoiceIndex:colorChoiceIndex+1;
  const colorChoice = currentPallete[colorChoiceIndex];
  return colorChoice;
}
function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + dvdHeight >= screenHeight || y < 0) {
    dirY *= -1;
    dvd.style.backgroundColor = getNewRandomColor();
  }
  if (x + dvdWidth >= screenWidth || x < 0) {
    dirX *= -1;

    dvd.style.backgroundColor = getNewRandomColor();
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

loadMoviesFromLocalStorage();
window.requestAnimationFrame(animate);