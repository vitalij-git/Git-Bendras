const searchBar  = document.querySelector("#search-submit");

searchBar.addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchData = e.target.elements;
    const movieTitle = searchData.search.value;
    sessionStorage.setItem("Title", movieTitle);
});