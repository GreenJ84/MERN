import React, { useState } from 'react'
import Planets from './Planets';
import People from './People';
import Films from './Films';
import Starships from './Starships';
import Species from './Species';
import Vehicles from './Vehicles';

const DisplayInfo = (type, id) => {
    const [results, setResults] = useState("");

        fetch('https://swapi.dev/api/'+type+'/'+id)
            .then(response => response.json())
            .then(response => setResults(response))
            .catch(err => {
                return (
                    <h1>These aren't the droids you're looking for!</h1>
                )
            })

    if (type === 'planets'){
        return (
            <Planets results={results}/>
        )
    } else if (type === 'starships' ){
        return (
            <Starships results={results}/>
        )
    } else if (type === 'vehicles'){
        return (
            <Vehicles results={results}/>
        )
    } else if (type === 'people'){
        return (
            <People results={results}/>
        )
    } else if (type === 'films'){
        return (
            <Films results={results}/>
        )
    } else if (type === 'species'){
        return (
            <Species results={results}/>
        )
    }

} 
export default DisplayInfo;
