var omdbAPIKey = "e1632ca0"
var searchBtnEl = document.getElementById("search-btn")
var inputMovieNameEl = document.getElementById("searchInput")
var displayMoviesEl = document.getElementById("display-movies")
//var reviewEl = document.getElementById("review")


function retrieveDataByTitle(movieName) {
    var queryURL = `http://www.omdbapi.com/?apikey=e1632ca0&t=${movieName}`

    fetch(queryURL) 
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
}

function retrieveDataBySearch(movieName) {
    var queryURL = `http://www.omdbapi.com/?apikey=e1632ca0&s=${movieName}`

    fetch(queryURL) 
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        displayMoviesEl.innerHTML = ""
       for(i=0; i < data.Search.length; i++) {
            if(data.Search[i].Poster !== 'N/A') {
                displayMoviesEl.innerHTML += `<div class="column">
                <img src="${data.Search[i].Poster}">
                        </div>`
                        console.log("Poster")
            }else{
                console.log("No Poster")
            }
        }
    })
}

function requestMovieDB() {
    console.log(inputMovieNameEl.value)
    var movieName = inputMovieNameEl.value
    retrieveDataBySearch(movieName)

}

searchBtnEl.addEventListener("click", requestMovieDB)