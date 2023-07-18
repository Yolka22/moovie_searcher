const Display = document.getElementById("display");
const InfoDisplay = document.getElementById("infodisplay");

document.getElementById("Search").addEventListener("click", (event) => {
  event.preventDefault();
  fetch(
    `https://www.omdbapi.com/?t=${
      document.getElementById("Title").value
    }&apikey=5ef7d02f`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.Title != undefined) {
        Display.innerHTML = "";

        const film = document.createElement("div");
        const poster = document.createElement("img");
        const filmtitle = document.createElement("p");
        const filmtype = document.createElement("p");
        const filmyear = document.createElement("p");
        const detailsbtn = document.createElement("button");

        film.className = "film";
        poster.className = "poster";

        poster.src = data.Poster;
        filmtitle.textContent = data.Title;
        filmtype.textContent = data.Type;
        filmyear.textContent = data.Year;
        detailsbtn.textContent = "Details";
        detailsbtn.onclick = () => {
          FilmDetails(data.Title);
        };

        film.appendChild(poster);
        film.appendChild(filmtype);
        film.appendChild(filmtitle);
        film.appendChild(filmyear);
        film.appendChild(detailsbtn);

        Display.appendChild(film);
      } else {
        Display.innerHTML = `
            <p>Movie not found :(</p>
        `;
      }
    });
});

const FilmDetails = (title) => {
  fetch(`https://www.omdbapi.com/?t=${title}&apikey=5ef7d02f`)
    .then((response) => response.json())
    .then((data) => {
      const filmdetails = document.createElement("div");

      const filmposter = document.createElement("img");
      const filmtitle = document.createElement("p");
      const filmyear = document.createElement("p");
      const filmgenre = document.createElement("p");
      const filmcountry = document.createElement("p");
      const filmcdirector = document.createElement("p");
      const filmwriter = document.createElement("p");
      const filmwactors = document.createElement("p");
      const filmrewards = document.createElement("p");

      filmposter.className = "filmposter";

      filmposter.src = data.Poster;
      filmtitle.textContent = "Title: " + data.Title;
      filmyear.textContent = "Released: " + data.Released;
      filmgenre.textContent = "Genre: " + data.Genre;
      filmcountry.textContent = "Country: " + data.Country;
      filmcdirector.textContent = "Director: " + data.Director;
      filmwriter.textContent = "Writer: " + data.Writer;
      filmwactors.textContent = "Actors: " + data.Actors;

      filmdetails.appendChild(filmposter);
      filmdetails.appendChild(filmtitle);
      filmdetails.appendChild(filmyear);
      filmdetails.appendChild(filmgenre);
      filmdetails.appendChild(filmcountry);
      filmdetails.appendChild(filmcdirector);
      filmdetails.appendChild(filmwriter);
      filmdetails.appendChild(filmwactors);
      if (data.rewards != undefined) {
        filmrewards.textContent = "Rewards: " + data.rewards;
        filmdetails.appendChild(filmrewards);
      }

      InfoDisplay.appendChild(filmdetails);
    });
};
