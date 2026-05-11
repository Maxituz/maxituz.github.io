// ============================================================
// Activitat 3 – PokéAPI
// Fitxer: main.js
// ============================================================

const panellPokemons = document.querySelector('#llista-pokemons');

const resposta = await fetch('./pokemons.json');
const dades = await resposta.json();

let llistaPokemons = dades.pokemons;
console.log(llistaPokemons);
