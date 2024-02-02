var movieDashboardEl = document.getElementById("movie-dashboard")

function displayDashboard() {
    var tmdbAPIKey = "2afde4157466d3c7f2ac22591131e338"
    //var newreleaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"
    var movieDbURL = "https://api.themoviedb.org/3/discover/movie?api_key=2afde4157466d3c7f2ac22591131e338"
    //var movieNameURL = "https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=2afde4157466d3c7f2ac22591131e338"
    //var movieYearUrl = "https://api.themoviedb.org/3/discover/movie?api_key=2afde4157466d3c7f2ac22591131e338&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&year=2023"
    fetch(movieDbURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
        //console.log(data.results[0].poster_path)
    
        for(var i=0; i <data.results.length; i++) {
            var posterID = data.results[i].poster_path
            posterID = posterID.slice(1)
        movieDashboardEl.innerHTML += `<a class="column poster-tile is-2" style="width:180px"><img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" placeholder="${data.results[i].title}" id="${posterID}" style="width:180px"/></a>`
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