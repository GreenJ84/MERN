import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DisplayInfo from './DisplayInfo';


const Display = () => {
    const [id, setId] = useState("");
    const [search, setSearch] = useState("");

    const handleRequest = (e, search, id) => {
        e.preventDefault();
        DisplayInfo(search, id);
    }

    return (<Form onSubmit={(e) => { handleRequest(e, search, id)} }>
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