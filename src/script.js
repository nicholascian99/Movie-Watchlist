

  
document.getElementById("search-bar-submit").addEventListener('click', function(){
    fetch("https://www.omdbapi.com/?apikey=7c371e1e&s=blade+runner")
    .then(res => res.json())
    .then(data => renderMovieHTML(data.Search)
    )    
}) 

function getMovieHTML(movies){
    let movieHTML = ""
      
    movies.forEach(movie => {
              movieHTML += `
        <section class="movie-section">
            <div class="poster-container">
                <img class="movieImg" src="${movie.Poster}"/>    
            </div>
            <div class="title-container-wrapper">
                <div class="title-container">
                    <h4 class="movie-title">${movie.Title}</h4>
                    <ion-icon class="star" name="star"></ion-icon>
                    <p class="rating">23</p>
                </div>
                <div class="movie-details-container">
                    <p class="movie-length">140min</p>
                    <p class="movie-genre">Action, Comedy</p>
                    <div class="watchlist-button-container">
                        <ion-icon class="addBtn" name="add-circle"></ion-icon>
                        <p>Watchlist</p>
                    </div>
                </div>
                <div>
                    <p>A Bladerunner must pursue and terminate four replicants who stole a ship in space, and have returned to earth to find their creator</p>
                </div>
            </div>
        </section>
        <hr style="border:0.5px solid lightgrey"/>`
      })
      
      return movieHTML
}
  
function renderMovieHTML(data){
      document.getElementById("main").innerHTML = getMovieHTML(data)
}

