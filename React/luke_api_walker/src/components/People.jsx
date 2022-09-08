import React, { useState, useContext } from 'react'
import MyContext from './context/MyContext';
;


const People = (props) => {
    const {results, setResults} = useContext(MyContext);
    const [homeworld, setHomeworld] = useState(results.homeworld);

    fetch(homeworld)
        .then(response => response.json)
        .then(response => setHomeworld(response))
        
    return (
        <>
        <h1>{results.name}</h1>
        <table>
            <tr>
                <th>
                    Height: 
                </th>
                <td>
                    {results.height} cm
                </td>
            </tr>
            <tr>
                <th>
                    Mass: 
                </th>
                <td>
                    {results.mass} kg
                </td>
            </tr>
            <tr>
                <th>
                    Hair Color:
                </th>
                <td>
                    {results.hair_color}
                </td>
            </tr>
            <tr>
                <th>
                    Skin Color: 
                </th>
                <td>
                    {results.skin_color}
                </td>
            </tr>
            <tr>
                <th>
                    Eye Color: 
                </th>
                <td>
                    {results.eye_color}
                </td>
            </tr>
            <tr>
                <th>
                    Birth Year: 
                </th>
                <td>
                    {results.birth_year}
                </td>
            </tr>
            <tr>
                <th>
                    Gender: 
                </th>
                <td>
                    {results.gender}
                </td>
            </tr>
            <tr>
                <th>

                </th>
                <td>
                    {homeworld.name} (Population: {homeworld.population})
                </td>
            </tr>
        </table>
        </>
    )
}

export default People;