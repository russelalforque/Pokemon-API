const pokecard = document.getElementById('pokeCard');
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

function displayPokemon(pokemon){
    pokecard.innerHTML=`
    <h1 id="name">${pokemon.name}</h1>
        <div id="img-wrapper">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}">
        </div>
        <p id="description">${pokemon.description}</p>
        <h2 id="type">Type: </h2>
        <h2 id="abilities">Abilities: </h2>
        <button>Generate</button>
    `;
}

// Fetch all pokemon
async function fetchPokemon() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayPokemon(data.results);
    } catch (error) {
        console.error('Error fetching pokemon:', error);
        postsContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                Failed to load pokemon. Please try again later.
            </div>
        `;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    generatePokemon();
}); 