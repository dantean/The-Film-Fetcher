var omdbAPIKey = "e1632ca0"
var movieName = "The Creator"
var queryURL = "http://www.omdbapi.com/?apikey=e1632ca0&t="+movieName

fetch(queryURL) 
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data)
})
