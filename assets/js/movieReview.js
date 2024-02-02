var reviewEl = document.getElementById("review")
var reviewBodyEl = document.getElementById("review-body")
// https://metacriticapi.p.rapidapi.com/movies/new?filter=date

function onloadReview(){
    var urlParam = new URLSearchParams(window.location.search)
    var movieString = urlParam.get("movie")
    var posterID = urlParam.get("posterid")
    console.log(movieString)
    if(movieString) {
    var movieName = movieString.replace(/\s+/g, '-')

    var url = `https://metacriticapi.p.rapidapi.com/movies/${movieName}?reviews=true`;
    //var url = `https://metacriticapi.p.rapidapi.com/movies/${movieName}`
    console.log(url)
    var options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '30ca6d63acmsh8a49af2601ca673p10ce97jsn5fa79d27a215',
		    'X-RapidAPI-Host': 'metacriticapi.p.rapidapi.com'
	    }
    };

    fetch(url, options)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        
       reviewBodyEl.innerHTML = `<div class="column is-two-fifths">
        <img src="https://image.tmdb.org/t/p/original/${posterID}.jpg" style="width:200px;height:230px"/>
    </div>
    <div class="column">
        <h1 class="title has-text-left">${data.title}</h1>
        <p class="subtitle"><h5 class="subtitle">Description :</h5> ${data.description}</p>
        <p></p>
    </div>`
    })
}
}
window.addEventListener("load", onloadReview)
//displayMoviesEl.addEventListener("click", movieReview)
