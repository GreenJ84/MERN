import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const { aName, onSubmit } = props;
    const [author_name, setAuthor_Name] = useState(aName);
    const nav = useNavigate();
    console.log(aName+' - '+author_name);

    const submitHandler = e => {
        e.preventDefault();
        onSubmit({author_name});
    }

    const returnHome = () => {
        nav('/');
    }

    return (
            <form onSubmit={ submitHandler }>
                <label>Author Name:</label><br/>
                <input type='text' onChange= { e => setAuthor_Name(e.target.value) } value={ author_name }/><br/>
            <input type='button' value='Cancel' onClick={ returnHome }/>
            <input type='Submit'/>
            </form>
    )
}
export default AuthorForm;