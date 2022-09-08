import React, { useReducer, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import MyContext from '../context/MyContext';

const initialState = {
        id: '',
        search: '',
        apiData: {}
    };

    function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        };
    }

const Display = () => {
    const {results, setResults} = useContext(MyContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const nav = useNavigate();

    const handleRequest = (e) => {
        e.preventDefault();
        setResults('https://swapi.dev/api/'+state.search+'/'+state.id)
        redirect();
    }

const redirect = () => {
        if (state.search === 'planets'){
            nav("/planets/"+state.id);
        } else if (state.search === 'starships' ){
            nav("/starships/"+state.id);
        } else if (state.search === 'vehicles'){
            nav("/vehicles/"+state.id);
        } else if (state.search === 'people'){
            nav("/people/"+state.id);
        } else if (state.search === 'films'){
            nav("/films/"+state.id);
        } else if (state.search === 'species'){
            nav("/species/"+state.id);
        }
    }

//========Changing the ID State =======
    const handleId = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

//========Changing the Search State =======
    const handleSearch = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (<Form onSubmit={(e) => {e.preventDefault(); handleRequest(e)} }>
        <Row>
        <Col>
        <Form.Label>Search For: {state.search} </Form.Label>
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
            <Form.Label>ID: { state.id }</Form.Label>
            <Form.Control onChange={(e) =>  handleId(e) } name="id" value={ state.id } placeholder="ID number" type="number" min='0' required/>
        </Col>
            <Form.Control value="Submit" type="submit"/>
        <Col>
        </Col>
        </Row>
        <p> {JSON.stringify(results.name)} </p>
        
    </Form>)
} 
export default Display;