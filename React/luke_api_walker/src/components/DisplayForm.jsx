import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const initialState = {
        id: '',
        search: '',
        results: {}
    };

    function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        };
    }

const Display = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const nav = useNavigate();


    const handleRequest = (e) => {
        e.preventDefault();
        fetch('https://swapi.dev/api/'+state.search+'/'+state.id)
            
            .then(response => {return response.json(); })
            .then(response => { dispatch({type: 'results', payload: response.results})})
            .catch(err => {
                return (
                    <h1>These aren't the droids you're looking for!</h1>
                )
            }) 
            console.log(state.results);
        if (state.search === 'planets'){
            nav("/planets");
        } else if (state.search === 'starships' ){
            nav("/starships");
        } else if (state.search === 'vehicles'){
            nav("/vehicles");
        } else if (state.search === 'people'){
            nav("/people");
        } else if (state.search === 'films'){
            nav("/films");
        } else if (state.search === 'species'){
            nav("/species");
        }
    }

//========Changing the ID State =======
//! Not updateing auto (Where do I mutate?)
    const handleId = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
        console.log(state.id);
    }

//========Changing the Search State =======
//! Not updateing auto (Where do I mutate?)
    const handleSearch = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
        console.log(state.search);
    }

    return (<Form onSubmit={(e) => {e.preventDefault(); handleRequest(e)} }>
        <Row>
        <Col>
        <Form.Label>Search For: </Form.Label>
        <Form.Select onChange={(e) => handleSearch(e) } name="search" value={ state.search }placeholder="Select Person or Planet">
            <option>Open this select menu</option>
            <option value="planets">Planet</option>
            <option value="people">People</option>
            <option value="starships">Starships</option>
            <option value="species">Species</option>
            <option value="films">Films</option>
            <option value="vehicles">Vehicles</option>
        </Form.Select>
        </Col>
        <Col>
            <Form.Label>ID: </Form.Label>
            <Form.Control onChange={(e) =>  handleId(e) } name="id" value={ state.id } placeholder="ID number" type="number" min='0' required/>
        </Col>
            <Form.Control value="Submit" type="submit"/>
        <Col>
        </Col>
        </Row>
        
    </Form>)
} 
export default Display;