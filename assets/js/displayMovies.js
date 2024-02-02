
function displayMovies(){
/*var url = 'https://metacriticapi.p.rapidapi.com/movies/new?filter=date';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30ca6d63acmsh8a49af2601ca673p10ce97jsn5fa79d27a215',
		'X-RapidAPI-Host': 'metacriticapi.p.rapidapi.com'
	}
};

fetch(url,options) 
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data)
   //displayMoviesEl.innerHTML = ""
   for(i=0; i < data.length; i++) {
//console.log(data[i].thumbnailUrl)
console.log(data[i].title)
 displayMoviesEl.innerHTML += `<div class="column poster-tile is-2"><img src="${data[i].thumbnailUrl}" style="width:180px;"></div>`
   }
   
})*/
displayMoviesEl.innerHTML = `<div style="padding-left: 10px"><a href="./dashboard.html">Go to Movie Dashboard</a></div>`
   
}

function displayReview() {
   // var currentMovieTile = event.target
   // var posterURL = currentMovieTile.getAttribute('id')
    window.open(`./dashboard.html`)
}

displayMoviesEl.addEventListener("click", displayReview)


displayMovies()
