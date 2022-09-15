import React, { useState } from 'react'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm'
import { useNavigate, Link } from 'react-router-dom'

const Create = (props) => {
    const [errors, setErrors] = useState([]);


    const nav = useNavigate();


    const createAuthor = thisAuthor => {
        axios.post('http://localhost:8000/author/new', thisAuthor)
                .then(res => {console.log(res.data); nav('/'); })
                .catch(err => {
                    console.log(err);
                    const errorResponse = err.response.data.error.errors;
                    const errorArr = [];
                    console.log(errorArr);
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors([...errorArr]);
                }) 
        }


    return (
    <div>
        <Link to='/'> Home </Link>
        <p>Add a new author: </p>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <AuthorForm aName='' onSubmit={ createAuthor }/>
    </div>
    )
}

export default Create