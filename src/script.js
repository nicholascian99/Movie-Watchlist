const myWatchlistArray = []
const searchBar = document.getElementById("search-bar-submit")
let searched = ""
let clickedData

document.addEventListener('click', async (e) => {
    // const dataArray 
    if(e.target === searchBar){
        searched = document.getElementById("search-bar-input").value
        const res = await fetch(`https://www.omdbapi.com/?apikey=7c371e1e&s=${encodeURIComponent(searched)}&plot=short`)
        clickedData = await res.json()
            renderMovieHTML(clickedData.Search)
    }
    else if(clickedData && e.target.dataset.addBtn){
        const selectedMovie = clickedData.Search.find(movie => movie.imdbID === e.target.dataset.addBtn)
        if (selectedMovie) {
            myWatchlistArray.push(selectedMovie);
          } else {
            console.log('Movie not found in data.');
          }
          renderWatchlistHTML(myWatchlistArray)
    }

})

function renderMovieHTML(data){
        let myMovieHTML = ""
        let movies = data.filter(({Type, Poster}) => Type === "movie" && Poster != "N/A")
        movies.forEach( async movie => {
            const movieId = movie.imdbID
            const res = await fetch(`https://www.omdbapi.com/?apikey=7c371e1e&i=${movieId}&plot=short`)
            const detailsData = await res.json()

            myMovieHTML += getMovieHTML(detailsData)
            document.getElementById("main").innerHTML =  myMovieHTML
    })
}

function getMovieHTML(data){
        let movieHTML = `
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
                        <ion-icon class="addBtn" name="add-circle" data-add-btn="${data.imdbID}"></ion-icon>
                        <p>Watchlist</p>
                    </div>
                </div>
                <div>
                    <p class="movie-plot">${data.Plot}</p>
                </div>
            </div>
        </section>
        <hr style="border:0.5px solid lightgrey; width:90%;"/>`
      return movieHTML
}

function renderWatchlistHTML(data){
    console.log(data)
    data.forEach( movie => {

    })
}

function getWatchlistHTML(data){
    let watchlistHTML = ``

}



