import axios from "axios";
import React from "react";

const DeleteButton = props => {
    const { authorId, successCallback } = props;

    const deletePerson = e => {
        axios.delete('http://localhost:8000/author/delete/'+ authorId)
            .then(res => {console.log(res); successCallback(); } )
            .catch(err => console.log("There was an error deleting user", err));
    };

    return (
        <button onClick={ deletePerson }>
            Delete
        </button>
    )
}

export default DeleteButton;