const movieForm = document.querySelector("#movie-form")

movieForm.addEventListener("submit", (e) =>
{
    e.preventDefault();
    const movieFormData = e.target.elements;
    handleSubmit(movieFormData);
});

function handleSubmit(data){
    let genre = data.genre.value;
    let year = data.year.value;
    let creationCountry = data.country.value;
};

