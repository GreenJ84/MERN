import React, { useState } from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword}
        console.log("Welcome", newUser);

    }

    return(
        <form onSubmit={ createUser }>
            <div>
        <label>First Name: </label>
        <input/>

        <label>Last Name:</label>
        <input/>

        <label>Email: </label>
        <input/>

        <label>Password</label>
        <input/>

        <label>Confirm Password: </label>
        <input/>
            </div>
        </form>
    )
}