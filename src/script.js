let searched = ""

// const searchBar = document.getElementById("search-bar")
// let searched = ""
  
document.getElementById("search-bar-submit").addEventListener('click', function(){
    searched = document.getElementById("search-bar-input").value
    
    fetch(`https://www.omdbapi.com/?apikey=7c371e1e&t=${encodeURIComponent(searched)}&plot=short`)
    .then(res => res.json())
    .then(data => renderMovieHTML(data)
    )    
    // console.log(plot)}
    // console.log(searched)
    
}) 

function getMovieHTML(data){
    let movieHTML = ""
      
    // data.forEach(
        // movie => {
            if(data.Poster !== "N/A"){
              movieHTML += `
        <section class="movie-section">
            <div class="poster-container">
                <img class="movieImg" src="${data.Poster}"/>    
            </div>
            <div class="title-container-wrapper">
                <div class="title-container">
                    <h4 class="movie-title">${data.Title}</h4>
                    <ion-icon class="star" name="star"></ion-icon>
                    <p class="rating">${data.imdbRating}</p>
                </div>
                <div class="movie-details-container">
                    <p class="movie-length">${data.Runtime}</p>
                    <p class="movie-genre">${data.Genre}</p>
                    <div class="watchlist-button-container">
                        <ion-icon class="addBtn" name="add-circle"></ion-icon>
                        <p>Watchlist</p>
                    </div>
                </div>
                <div>
                    <p>${data.Plot}</p>
                </div>
            </div>
        </section>
        <hr style="border:0.5px solid lightgrey"/>`
            }
    //   }
    //   )
      
      return movieHTML
    // console.log(data)
}
  
function renderMovieHTML(data){
      document.getElementById("main").innerHTML = getMovieHTML(data)
    // console.log(data)
}



