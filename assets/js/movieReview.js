var reviewEl = document.getElementById("review")
var reviewBodyEl = document.getElementById("review-body")
var reviewBlkEl = document.getElementById("review-blk")
var criticReviewEl = document.getElementById("critic-review")
var userReviewEl = document.getElementById("user-review")
var criticBlkEl = document.getElementById("critic-blk")
var userBlkEl = document.getElementById("user-blk")
// https://metacriticapi.p.rapidapi.com/movies/new?filter=date

function onloadReview(){
    var urlParam = new URLSearchParams(window.location.search)
    var movieString = urlParam.get("movie")
    var posterID = urlParam.get("posterid")
    console.log(movieString)
    if(movieString) {
    var movieName = movieString.replace(/\s+/g, '-')
    criticBlkEl.classList.remove("hide")

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

    for(var i=0; i < data.recentReviews.length; i++) {
        criticBlkEl.innerHTML += `<p><h4>${data.recentReviews[i].name}</h4>, ${data.recentReviews[i].date}, Grade: ${data.recentReviews[i].grade}</p><p>${data.recentReviews[i].body}</p><br>`
    }
    for(var i=0; i < data.recentUserReviews.length; i++) {
        userBlkEl.innerHTML += `<p><h4>${data.recentUserReviews[i].name}</h4>, ${data.recentUserReviews[i].date}, Grade: ${data.recentUserReviews[i].grade}</p><p>${data.recentUserReviews[i].body}</p><br>`
    }

    })
}
}
function changeClass(event){
    event.preventDefault()
    var currentReviewTitle=event.target
    var currentReviewTitleId = currentReviewTitle.getAttribute("id")
    var currentParentClass = currentReviewTitle.parentNode.getAttribute("class")
    var criticReviewClass =  criticReviewEl.parentNode.getAttribute("class")
    var userReviewClass = userReviewEl.parentNode.getAttribute("class")

    if(currentParentClass !== null && currentReviewTitleId === "critic-review") {
        currentReviewTitle.parentNode.classList.add("is-active")
        userReviewEl.parentNode.classList.remove("is-active")
        criticBlkEl.classList.remove("hide")
        userBlkEl.classList.add("hide")
       
    }else if(currentParentClass === null && currentReviewTitleId === "user-review") {
        currentReviewTitle.parentNode.classList.add("is-active")
        criticReviewEl.parentNode.classList.remove("is-active")
        userBlkEl.classList.remove("hide")
        criticBlkEl.classList.add("hide")

    }else if(currentParentClass !== "" && currentReviewTitleId === "critic-review") {
        currentReviewTitle.parentNode.classList.add("is-active")
        userReviewEl.parentNode.classList.remove("is-active")
        criticBlkEl.classList.remove("hide")
        userBlkEl.classList.add("hide")
        
    }else if(currentParentClass === "" && currentReviewTitleId === "user-review") {
        currentReviewTitle.parentNode.classList.add("is-active")
        criticReviewEl.parentNode.classList.remove("is-active")
        userBlkEl.classList.remove("hide")
        criticBlkEl.classList.add("hide")

    }

}
window.addEventListener("load", onloadReview)

reviewBlkEl.addEventListener("click", changeClass)
