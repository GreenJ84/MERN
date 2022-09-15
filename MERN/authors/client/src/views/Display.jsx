import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthorList from '../components/AuthorList';

const Display = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
    axios.get('http://localhost:8000/authors/get')
        .then(res => {setAuthors(res.data); setLoaded(true);})
        .catch( err => console.log('Error getting all authors', err));
    }, [loaded]);


    const removeFromDom = authorId => {
    setAuthors(authors.filter( author => author._id !== authorId))
    }

    return (
        <div>
            <Link to='/author/new'> Add an author </Link>
            <p> We Have quotes by: </p>
            {loaded && <AuthorList authors={ authors } removeFromDom={ removeFromDom } />}
        </div>
    )}; 
    export default Display;
