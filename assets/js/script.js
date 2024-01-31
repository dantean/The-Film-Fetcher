var omdbAPIKey = "e1632ca0"
var searchBtnEl = document.getElementById("search-btn")
var inputMovieNameEl = document.getElementById("searchInput")


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
    })
}

function requestMovieDB() {
   // alert(inputMovieNameEl.value)
console.log(inputMovieNameEl.value)
var movieName = inputMovieNameEl.value
retrieveDataBySearch(movieName)

}

//retrieveDataByTitle("The Unforgivable")
//retrieveDataBySearch("The Unforgivable")

searchBtnEl.addEventListener("click", requestMovieDB)