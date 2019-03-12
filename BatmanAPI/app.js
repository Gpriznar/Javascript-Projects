let movietitle = document.getElementById("movietitle")
let movieUL = document.getElementById("movieUL")
let btnFetchMovie = document.getElementById("btnFetchMovie")
let largemovieUL = document.getElementById("largemovieUL")

btnFetchMovie.addEventListener('click',function(){

  let movieURL = "http://www.omdbapi.com/?s=batman&apikey=e7038318"

let request = new XMLHttpRequest()
request.open("GET",movieURL)
request.send()

request.onload = function() {

  if(request.status != 200) {
    console.log("Server not found.")
  } else {
    console.log("Response Recieved")
    console.log(request.responseText)
    console.log(JSON.parse(request.responseText))
    let moviesResponse = JSON.parse(request.responseText)
    displaymovietitleandposter(moviesResponse)
  }
}
})


function displaymovietitleandposter(movie) {

  let movieLIitems = movie.Search.map(function(info) {
    return  `<li onclick="displayMovieDetails('${info.imdbID}')">
            <img src =${info.Poster}>
            <h1> ${info.Title} </h1>
            </li>`
  })
    movieUL.innerHTML = movieLIitems.join('')


}


//// Poster Click Function

function displayMovieDetails(id) {

let movieinfo = "http://www.omdbapi.com/?i="+id+"&apikey=e7038318"

let request = new XMLHttpRequest()
request.open("GET",movieinfo)
request.send()

request.onload = function() {

  if(request.status != 200) {
    console.log("Server not found.")
  } else {
    console.log("Response Recieved")
    console.log(request.responseText)
    console.log(JSON.parse(request.responseText))
    let movieinfo = JSON.parse(request.responseText)
    showmovieinfo(movieinfo)
  }
}

function showmovieinfo(id){

       let info =  `<img src =${id.Poster}>
                    <h1> ${id.Title} </h1>
                    <li> Rating: ${id.Rated} </li>
                    <li> Released: ${id.Released}</li>
                    <li> Runtime: ${id.Runtime}</li>
                    <li> Plot: ${id.Plot}</li>`

      largemovieUL.innerHTML = info
  }
}
