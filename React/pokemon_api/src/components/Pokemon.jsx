import React, { useState} from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const tryThis = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
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