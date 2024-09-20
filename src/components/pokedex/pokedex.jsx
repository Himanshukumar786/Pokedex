// Importing necessary components

import PokemonList from "../pokemonlist/pokemonlist";
import Search from "../Search/Search";

// Importing CSS for Pokedex
import './Pokedex.css';

// Pokedex component
function Pokedex() {
    return (
        <div className="pokedex-wrapper">
            <h1 id="pokedex-heading">Pokedex</h1>
            <Search />
            <PokemonList />
        </div>
    );
}

export default Pokedex;
