import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm';

const Update = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/author/'+ id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err=>{
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
            
    }, [id]);

    const updateAuthor = thisAuthor => {
        axios.put('http://localhost:8000/author/update/'+id, thisAuthor)
            .then(res => {console.log(res); nav('/') })
            .catch(err=>{
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            }) 
        };

    return (
        <div>
            <Link to='/'> Home </Link>
            <p>Edit this author: </p>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            { loaded && 
            <AuthorForm onSubmit={ updateAuthor } aName={author.author_name}/> }
        </div>
    )
}

export default Update