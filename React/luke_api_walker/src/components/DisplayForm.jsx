import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Planets from './Planets';
import People from './People';
import Films from './Films';
import Starships from './Starships';
import Species from './Species';
import Vehicles from './Vehicles';


const Display = () => {
    const [id, setId] = useState("");
    const [search, setSearch] = useState("");
    const [results, setResults] = useState("");

    const DisplayInfo = () => {

        if (search === 'planets'){
            return (
                <Planets results={results}/>
            )
        } else if (search === 'starships' ){
            return (
                <Starships results={results}/>
            )
        } else if (search === 'vehicles'){
            return (
                <Vehicles results={results}/>
            )
        } else if (search === 'people'){
            return (
                <People results={results}/>
            )
        } else if (search === 'films'){
            return (
                <Films results={results}/>
            )
        } else if (search === 'species'){
            return (
                <Species results={results}/>
            )
        }
    
    } 
    
    const handleRequest = (e) => {
        e.preventDefault();
        fetch('https://swapi.dev/api/'+search+'/'+id)
            .then(response => response.json())
            .then(response => setResults(response))
            .catch(err => {
                return (
                    <h1>These aren't the droids you're looking for!</h1>
                )
            })
        DisplayInfo();
    }

    return (<Form onSubmit={(e) => {e.preventDefault(); handleRequest(e)} }>
        <Row>
        <Col>
        <Form.Label>Search For: </Form.Label>
        <Form.Select onChange={(e) => { setSearch(e.target.value)}}aria-label="Select Person or Planet">
            <option>Open this select menu</option>
            <option value="planet">Planet</option>
            <option value="person">Person</option>
        </Form.Select>
        </Col>
        <Col>
            <Form.Label>ID: </Form.Label>
            <Form.Control onChange={(e) => { setId(e.target.value )}}placeholder="ID number" type="number" min='0'/>
        </Col>
            <Form.Control value="Submit" type="submit"/>
        <Col>
        </Col>
        </Row>
        
    </Form>)
} 
export default Display;