
const url = 'http://localhost:3000/movies/';

const searchInput = document.getElementById("search");
const moviesContainer = document.getElementById("movies");
const moviesOneContainer = document.getElementById("movies1");

function showError(msg) {
    moviesContainer.innerHTML = `<p class="error">${msg}</p>`;
}

async function searchMovies (){

    const searchedMovies = searchInput.value;

    try {

        const response = await fetch(url+searchedMovies)
        console.log(response)
        if (!response.ok) {
            showError(`No se encontró ninguna pelicula "${searchedMovies}"`);
            return;
        }
        
        const information = await response.json;

        moviesContainer.innerHTML=
        `
            <h2> ${information.name} </h2> 
        `;

        moviesOneContainer.innerHTML=
        `
            <h2> ${information.name} </h2>
            <p> Duracion: ${information.duration}</p>
            <p> Genero: ${information.genre}</p>
        `;
        
    } catch (error) {

        showError('Error al buscar la pelicula');
        console.error(error);
        
    }
}

document.getElementById("search__btn").addEventListener("click", searchMovies)


