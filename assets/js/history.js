function displayMovieReview(event) {
    var currentMovieTile = event.target;
    var movieName = currentMovieTile.getAttribute('placeholder');
    var posterID = currentMovieTile.getAttribute('id');


    var viewedMovies = JSON.parse(localStorage.getItem('viewedMovies')) || [];
    viewedMovies.push({ name: movieName, posterID: posterID });
    localStorage.setItem('viewedMovies', JSON.stringify(viewedMovies));

    window.open(`./review.html?movie=${movieName}&posterid=${posterID}`);
}

function loadViewedMovies() {
    var viewedMovies = JSON.parse(localStorage.getItem('viewedMovies')) || [];
    var historyEl = document.getElementById("history");
    historyEl.innerHTML = '<p>Viewed history</p><ul id="viewed-movies-list"></ul>';
    var listEl = document.getElementById("viewed-movies-list");

    viewedMovies.forEach(function(movie) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = `./review.html?movie=${movie.name}&posterid=${movie.posterID}`; 
        link.textContent = movie.name; 
        listItem.appendChild(link);
        listEl.appendChild(listItem);
    });
}

window.addEventListener("load", loadViewedMovies);