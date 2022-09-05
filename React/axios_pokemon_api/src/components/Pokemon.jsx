import React, { useState} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const tryThis = () => {
        axios.get('http://pokeapi.co/api/v2/pokemon?offset=0&limit=807').then(response => setPokemon(response.data.results));
    }

    return (
        <div>
            <button onClick={tryThis}>Fetch Pokemon</button>
            {pokemon.map((poke, idx) => {
                return <li key={idx}>{poke.name}</li>
            })}
        </div>
    )
} 
export default Pokemon;