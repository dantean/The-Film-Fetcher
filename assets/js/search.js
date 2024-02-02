var omdbAPIKey = "e1632ca0";
var searchBtnEl = document.getElementById("search-btn");
var inputMovieNameEl = document.getElementById("searchInput");

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const movieName = params.get('movie');
    
    if (movieName) {
        var queryURL = `http://www.omdbapi.com/?apikey=e1632ca0&s=${encodeURIComponent(movieName)}`;
        fetch(queryURL) 
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            // Display data on the page
        });
    }
});