import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName ] = useState("");
    const[firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName ] = useState("");
    const[lastNameError, setLastNameError] = useState("");


    const [email, setEmail ] = useState("");
    const[emailError, setEmailError ] = useState("");

    const [password, setPassword ] = useState("");
    const[passwordError, setPasswordError ] = useState("");

    const [confirmPassword, setConfirmPassword ] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");
    const[matchError, setMatchError] = useState("");




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

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(firstName.length !== 0){
        if(e.target.value.length < 2){
            setFirstNameError("First Name must be 2 characters or longer!");
        } else{
            setFirstNameError("");
        }
        }
    }

    const handleLastNameError = (e) => {
        setLastName(e.target.value);
        if(lastName.value === ""){
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be 2 characters or longer!");
        } else{
            setLastNameError("");
        }
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(email.length !== 0){
        if(e.target.value.length < 5){
            setEmailError("Email must be 5 characters or longer!");
        } else{
            setEmailError("");
        }
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(password.length !== 0){
        if(e.target.value.length < 8){
            setPasswordError("Password must be 8 characters or more!");
        } else{
            setPasswordError("");
        }
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(confirmPassword.length !== 0){
        if(e.target.value.length < 8){
            setConfirmPasswordError("Confirm Password must be 8 characters or longer!");
        } else{
            if(confirmPassword !== password){
                setMatchError("Confirm Password must match Password!");
            } else{
                setConfirmPasswordError("");
            }
        }
        }
    }

    return(
        <form onSubmit={ (e) => {e.preventDefault(); createUser(); }}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFirstName } value={firstName}/>
                    {
                    firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError }</p> :
                        ''
                    } <br/>

                <label>Last Name:</label>
                <input type="text" onChange={ handleLastNameError } value={lastName}/>
                    {
                    lastNameError ?
                        <p style={{color:'red'}}>{ lastNameError }</p> :
                        ''
                    } <br/>

                <label>Email: </label>
                <input type="text" onChange={ handleEmail}/>
                    {
                    emailError ?
                        <p style={{color:'red'}}>{ emailError }</p> :
                        ''
                    } <br/>

                <label>Password</label>
                <input type="text" onChange={ handlePassword } value={ password }/>
                    {
                    passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p> :
                        ''
                    } <br/>

                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPassword } value={ confirmPassword }/>
                    {
                    confirmPasswordError ?
                        <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                        ''
                    }
                    {
                    matchError ?
                        <p style={{color:'red'}}>{ matchError }</p> :
                        ''
                    }

                <input type="submit" value="Create User"/>
            </div>
        </form>
    );
}
export default UserForm;