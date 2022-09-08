import React, { useState, useContext, useEffect, useNavigate } from 'react'
import axios from 'axios';
import MyContext from '../context/MyContext';
import { Link } from 'react-router-dom';


const Planets = (props) => {
    const {results} = useContext(MyContext);
    const [planet, setPlanet] = useState([]);
    const [residents, setResidents] = useState([]);


    useEffect(() => {
        axios.get(results)
            .then((response) => {
                console.log("Getting back response from our API: ", response.data);
                setPlanet(response.data); 
            })
            .catch((err) => {
                console.log("This is the catch all error: ", err); 
            });
    }, [results])

    // useEffect(() => {
    //     axios.get(planet.residents[0])
    //         .then((response) => {
    //             console.log("Getting back response from our 2 API: ", response.data);
    //             setResidents(response.data); 
    //         })
    //         .catch((err) => {
    //             console.log("This is the catch all error: ", err);
    //         });
    // }, [planet.residents])

    return (
        <>
        <Link to={'/'}> Go back </Link>
        <h1>{planet.name}</h1>
        <table>
            <tr>
                <th>
                    Rotation Period: 
                </th>
                <td>
                    {planet.rotation_period}
                </td>
            </tr>
            <tr>
                <th>
                    Oribital period:
                </th>
                <td>
                    {planet.orbital_period}
                </td>
            </tr>
            <tr>
                <th>
                    Diameter:
                </th>
                <td>
                    {planet.diameter}
                </td>
            </tr>
            <tr>
                <th>
                    Climate: 
                </th>
                <td>
                    {planet.climate}
                </td>
            </tr>
            <tr>
                <th>
                    Gravity: 
                </th>
                <td>
                    {planet.gravity}
                </td>
            </tr>
            <tr>
                <th>
                    Terrain: 
                </th>
                <td>
                    {planet.terrain}
                </td>
            </tr>
            <tr>
                <th>
                    Surface Water:
                </th>
                <td>
                    {planet.surface_water}
                </td>
            </tr>
            <tr>
                <th>
                    Population: 
                </th>
                <td>
                    {planet.population}
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