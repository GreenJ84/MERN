import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        if (password === confirmPassword){
            const newUser = {firstName, lastName, email, password, confirmPassword}
            console.log("Welcome", newUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }

    }

    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={firstName}/><br/>

                <label>Last Name:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName}/><br/>

                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/><br/>

                <label>Password</label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password }/><br/>

                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword }/><br/>

                <input type="submit" value="Create User"/>
            </div>
        </form>
        <hr/>
        <div>
            <h1>Your Form Data</h1>
            <table>
                <tr>
                    <th>
                        First Name:
                    </th>
                    <td>
                        {firstName}
                    </td>
                </tr>
                <tr>
                    <th>
                        Last Name:
                    </th>
                    <td>
                        {lastName}
                    </td>
                </tr>
                <tr>
                    <th>
                        Email:
                    </th>
                    <td>
                        {email}
                    </td>
                </tr>
                <tr>
                    <th>
                        Password:
                    </th>
                    <td>
                        {password}
                    </td>
                </tr>
                <tr>
                    <th>
                        Confirm Password:
                    </th>
                    <td>
                        {confirmPassword}
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default UserForm;