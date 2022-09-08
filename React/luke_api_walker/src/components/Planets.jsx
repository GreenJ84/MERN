import React, { useState, useContext } from 'react';
import MyContext from './context/MyContext';


const Planets = (props) => {
    const {results, setResults} = useContext(MyContext);
    const [residents, setResidents] = useState("");

    for (let i = 0; i < results.residents.length; i++){
        fetch (results.residents[i])
            .then( response => response.json)
            .then( response => setResidents([...residents, response]))
        }
    return (
        <>
        <h1>{results.name}</h1>
        <table>
            <tr>
                <th>
                    Rotation Period: 
                </th>
                <td>
                    {results.rotation_period}
                </td>
            </tr>
            <tr>
                <th>
                    Oribital period:
                </th>
                <td>
                    {results.orbital_period}
                </td>
            </tr>
            <tr>
                <th>
                    Diameter:
                </th>
                <td>
                    {results.diameter}
                </td>
            </tr>
            <tr>
                <th>
                    Climate: 
                </th>
                <td>
                    {results.climate}
                </td>
            </tr>
            <tr>
                <th>
                    Gravity: 
                </th>
                <td>
                    {results.gravity}
                </td>
            </tr>
            <tr>
                <th>
                    Terrain: 
                </th>
                <td>
                    {results.terrain}
                </td>
            </tr>
            <tr>
                <th>
                    Surface Water:
                </th>
                <td>
                    {results.surface_water}
                </td>
            </tr>
            <tr>
                <th>
                    Population: 
                </th>
                <td>
                    {results.population}
                </td>
            </tr>
            <tr>
                <th>

                </th>
                <td>
                    {residents.map( person => <li>{person.name}</li>)}
                </td>
            </tr>
        </table>

        
        </>
    )
}

export default Planets;