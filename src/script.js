import { v4 as uuidv4 } from 'https://jspm.dev/uuid'


let searched = ""
const myWatchlistArray = []
const searchBar = document.getElementById("search-bar-submit")
// const addBtn = document.querySelector(".addBtn")

// const searchBar = document.getElementById("search-bar")


//adds click event to submit button that fetches OMDB API and uses that data when it calls renderMovieHTML

// document.addEventListener('click', (e) => {
//     if(e.target == searchBar){
//         console.log(e.target)
//     }
// })

document.addEventListener('click', (e) => {
    if(e.target === searchBar){
        searched = document.getElementById("search-bar-input").value

        fetch(`https://www.omdbapi.com/?apikey=7c371e1e&s=${encodeURIComponent(searched)}&plot=short`)
        .then(res => res.json())
        .then(data => {
            renderMovieHTML(data.Search)
            console.log(data)
        })
    }
    // if(e.target.dataset == "addBtn"){
    //     console.log("add")
    // }
    console.log(e.target.dataset.addBtn)
})

function renderMovieHTML(data){
        let myMovieHTML = ""
        // let movies = data.filter(media => media.Type === "movie")
        let movies = data.filter(({Type, Poster}) => Type === "movie" && Poster != "N/A")
        movies.forEach(movie => {
        const movieId = movie.imdbID
        fetch(`https://www.omdbapi.com/?apikey=7c371e1e&i=${movieId}&plot=short`)
        .then(res => res.json())
        .then(detailsData => { 
            // console.log(detailsData)
        
        myMovieHTML += getMovieHTML(detailsData)
      document.getElementById("main").innerHTML =  myMovieHTML
    //   console.log(movie)
        }
    )
    })
}

function getMovieHTML(data){
    let movieHTML = ""
    // console.log(data)
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
                        <ion-icon class="addBtn" name="add-circle" data-add-btn="${uuidv4()}"></ion-icon>
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
    // console.log(data)
}
  




