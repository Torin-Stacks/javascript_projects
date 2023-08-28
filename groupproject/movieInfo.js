// const yourkey = 15030152;
// const movie = "guardians+of+the+galaxy"

// const response = fetch(apiurl, {
//     method: "GET",
//     mode: "cors"
// })

// response.then((res) => {
//     console.log(res)
// })

// let x = new XMLHttpRequest()
// x.open("GET", "http://www.omdbapi.com/?t=h&apikey=15030152")
// x.send()
// x.onload = (response) => {
//     console.log(response.target.response)
// }
//.then((response) => response.json())

//const movies = response.json
//console.log(movies)

let inputbox = document.getElementById("moviename");
let form = document.querySelector("form");

// let movieTitle = document.getElementById("movieTitle");
// let releasedDate = document.getElementById("releasedDate");
// let plot = document.getElementById("plot");

let movieDetails = document.getElementById("movieDetails");

// let request = inputbox.value
// let movienamearray = request.split(" ")
// let serverrequest = movienamearray[0]
// for(var i =1; i<movienamearray.length; i++){
// serverrequest = serverrequest + "+" + movienamearray[i]
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputbox.value);

  fetch(`http://www.omdbapi.com/?t=${inputbox.value}&apikey=15030152`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let movie = "";
      movie += `<h1>Movie Title: <span id="movieTitle">${data.Title}</span></h1>
        <h2>Release Date:  <span id="releasedDate">${data.Released}</span></h2>
        <p>Plot Summary: <span id="plot">${data.Plot}</span></p>
        <img src=${data.Poster} alt="movie_image"/>
        `;
      movieDetails.innerHTML = movie;
    })
    .catch((error) => console.log(error.message));
    
});

// let x = new XMLHttpRequest()
// x.open("GET", apiurl)
// x.send()
// x.onload = (response)=>console.log(response.target.response)

//const {title, year,rated,released,runtime,genre,director,writer,actors, plot,language,country,award,poster,ratings,metascore,imdbrating,imdbvotes,imdbid,type,dvd,boxoffice,production,website,response} =

/*{"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min",
"Genre":"Action, Adventure, Comedy","Director":"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning",
"Actors":"Chris Pratt, Zoe Saldana, Dave Bautista","Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, 
notably Star-Lord's encounter with his father, the ambitious celestial being Ego.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 
15 wins & 60 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300
.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],
"Metascore":"67","imdbRating":"7.6","imdbVotes":"725,527",
"imdbID":"tt3896198","Type":"movie","DVD":"10 Jul 2017","BoxOffice":"$389,813,101","Production":"N/A","Website":"N/A","Response":"True"} */
