
const url = 'localhost:3000/movies/';

const searchInput = document.getElementById("search");
const moviesContainer = document.getElementById("movies");
const moviesOneContainer = document.getElementById("movies1");

function showError(msg) {
    moviesContainer.innerHTML = `<p class="error">${msg}</p>`;
}

async function searchMovies (){

    const searchedMovies = searchInput.value.toLowerCase();

    try {

        const response = await fetch(url+searchedMovies)
        console.log(response)
        if (!response.ok) {
            showError(`No se encontró ningún Pokémon llamado "${searchedMovies}"`);
            return;
        }
        
        const information = await response.json();

        moviesContainer.innerHTML=
        `
            <h2> ${information.name.toUpperCase()} </h2>
            <img src="${information.sprites.front_default}" alt="${information.name}">
            <p> Numero: ${information.id}</p> 
        `;

        moviesOneContainer.innerHTML=
        `
            <h2> ${information.name.toUpperCase()} </h2>
            <img src="${information.sprites.front_default}" alt="${information.name}">
            <p> Altura: ${information.height}</p>
            <p> Peso: ${information.weight}</p>
        `;
        
    } catch (error) {

        showError('Error al buscar la pelicula');
        console.error(error);
        
    }
}

document.getElementById("search__btn").addEventListener("click", searchMovies)


