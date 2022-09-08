import React, { useState, useContext, useEffect, useNavigate } from 'react'
import axios from 'axios';
import MyContext from '../context/MyContext';


const People = (props) => {
    const {results} = useContext(MyContext);
    const [person, setPerson] = useState([]);
    const [homeworld, setHomeworld] = useState([]);

    useEffect(() => {
        axios.get(results)
            .then((response) => {
                console.log("Getting back response from our API: ", response.data);
                setPerson(response.data); 
            })
            .catch((err) => {
                console.log("This is the catch all error: ", err);
            });
    }, [results])

    useEffect(() => {
        axios.get(person.homeworld)
            .then((response) => {
                console.log("Getting back response from our 2 API: ", response.data);
                setHomeworld(response.data); 
            })
            .catch((err) => {
                console.log("This is the catch all error: ", err);
            });
    }, [person.homeworld])


        
    return (
        <>
        <h1>{person.name}</h1>
        <table>
            <tr>
                <th>
                    Height: 
                </th>
                <td>
                    {person.height} cm
                </td>
            </tr>
            <tr>
                <th>
                    Mass: 
                </th>
                <td>
                    {person.mass} kg
                </td>
            </tr>
            <tr>
                <th>
                    Hair Color:
                </th>
                <td>
                    {person.hair_color}
                </td>
            </tr>
            <tr>
                <th>
                    Skin Color: 
                </th>
                <td>
                    {person.skin_color}
                </td>
            </tr>
            <tr>
                <th>
                    Eye Color: 
                </th>
                <td>
                    {person.eye_color}
                </td>
            </tr>
            <tr>
                <th>
                    Birth Year: 
                </th>
                <td>
                    {person.birth_year}
                </td>
            </tr>
            <tr>
                <th>
                    Gender: 
                </th>
                <td>
                    {person.gender}
                </td>
            </tr>
            <tr>
                <th>
                    Homeworld: 
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