var movieDashboardEl = document.getElementById("movie-dashboard")

function displayDashboard() {
    var tmdbAPIKey = "2afde4157466d3c7f2ac22591131e338"
    var movieDbURL = "https://api.themoviedb.org/3/discover/movie?api_key=2afde4157466d3c7f2ac22591131e338"
    fetch(movieDbURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
    
        for(var i=0; i <data.results.length; i++) {
            var posterID = data.results[i].poster_path
            posterID = posterID.slice(1)
        movieDashboardEl.innerHTML += `<a class="column poster-tile is-2"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" placeholder="${data.results[i].title}" id="${posterID}" style="width:180px"/></a>`
        }
    })
}

function displayMovieReview(event) {
    var currentMovieTile = event.target
    var movieName = currentMovieTile.getAttribute('placeholder')
    var posterID = currentMovieTile.getAttribute('id')
    window.open(`./review.html?movie=${movieName}&posterid=${posterID}`)
}

window.addEventListener("load", displayDashboard)
movieDashboardEl.addEventListener("click", displayMovieReview)