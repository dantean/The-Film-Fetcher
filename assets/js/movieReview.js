var reviewEl = document.getElementById("review")
var reviewBodyEl = document.getElementById("review-body")
var reviewBlkEl = document.getElementById("review-blk")
var criticReviewEl = document.getElementById("critic-review")
var userReviewEl = document.getElementById("user-review")
var criticBlkEl = document.getElementById("critic-blk")
var userBlkEl = document.getElementById("user-blk")

// Rendering the review about the selected movie on the review page

function onloadReview(){

    // Parse through the url and get the parameters 
    var urlParam = new URLSearchParams(window.location.search)
    var movieString = urlParam.get("movie")
    var posterID = urlParam.get("posterid")
    
    if(movieString) {
        var movieName = movieString.replace(/\s+/g, '-')
        criticBlkEl.classList.remove("hide")

        // Making API request to retrieve review about the selected movie from the landing page

        var url = `https://metacriticapi.p.rapidapi.com/movies/${movieName}?reviews=true`
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
            // Using momentJS cdn to convert ISO date time format
            var releaseDate = moment(data.releaseDate).format("MMM D, YYYY") 
            var userScore = data.userScore/10;
        
            // Dynamically appending to the static html elements on the page
        reviewBodyEl.innerHTML = `<div class="column is-two-fifths">
            <img src="https://image.tmdb.org/t/p/original/${posterID}.jpg" style="width:200px;height:230px"/>
        </div>
        <div class="column">
            <h1 class="title has-text-left">${data.title}</h1>
            <p class="subtitle has-text-white has-text-left is-size-6">${data.description}</p>
            <p class="has-text-left has-text-white"><span class="title is-6">Director: </span>${data.director}, <span class="title is-6">Genre: </span>${data.genre}</p>
            <p class="has-text-white"><span class="title is-6">Released on: </span>${releaseDate}</p><hr><p class="has-text-white"><span class="title is-6 has-text-left">METASCORE</span><span class="has-text-weight-bold token">${data.metaScore}</span></span><br><br><progress class="progress is-info is-small" value="${data.metaScore}" max="100">${data.metaScore}%</progress></p><hr><p class="has-text-white"><span class="title is-6 has-text-left">USER SCORE</span><span class="has-text-weight-bold token">${userScore}</span><br><br><progress class="progress is-info is-small" value="${data.userScore}" max="100">${data.userScore}%</progress></p>
        </div>`

             // Dynamically appending to the static html elements on the page
            for(var i=0; i < data.recentReviews.length; i++) {
                var recentReviewsDate = moment(data.recentReviews[i].date).format("MMM D YYYY") 
                criticBlkEl.innerHTML += `<div class="box review-box"><p><span class="title is-6 has-text-left has-text-weight-semibold">${data.recentReviews[i].name}, ${recentReviewsDate}, Grade: </span><span class="has-text-weight-semibold token token-review">${data.recentReviews[i].grade}</span></p><br><p class="subtitle is-size-6 has-text-left">${data.recentReviews[i].body}</p></div><br>`
            }

            // Dynamically appending to the static html elements on the page
            for(var i=0; i < data.recentUserReviews.length; i++) {
                var recentUserReviewsDate = moment(data.recentUserReviews[i].date).format("MMM D YYYY") 
                userBlkEl.innerHTML += `<div class="box review-box"><p><span class="title is-6 has-text-left has-text-weight-semibold">${data.recentUserReviews[i].name}, ${recentUserReviewsDate}, Grade</span><span class="has-text-weight-semibold token token-review">${data.recentUserReviews[i].grade}</span></p><br><p class="subtitle is-size-6 has-text-left">${data.recentUserReviews[i].body}</p></div><br>`
            }
        })
    }
}

// Displays the critic review and user review on the review page

function displayReviews(event){
    event.preventDefault()
    var currentReviewTitle=event.target
    var currentReviewTitleId = currentReviewTitle.getAttribute("id")
    var currentParentClass = currentReviewTitle.parentNode.getAttribute("class")
    var criticReviewClass =  criticReviewEl.parentNode.getAttribute("class")
    var userReviewClass = userReviewEl.parentNode.getAttribute("class")

    // Conditional statements to render the critic review and user review

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
reviewBlkEl.addEventListener("click", displayReviews)
