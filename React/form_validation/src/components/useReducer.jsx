import React, { useReducer } from 'react';
import '/Users/jessegreenough/Documents/Coding-Dojo/MERN/React/form_validation/src/App.css';


const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return{
        ...state,
        [action.type]: action.payload
    };
}


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const {name, value} = e.target;
        console.log(name + "-" +value);
        let error = validators[name](value);
        dispatch({
            type: name,
            payload: {value, error}})
    }

    const createUser = (e) => {
        e.preventDefault();
        let firstName = e.state.firstName.value;
        let lastName = e.state.lastName.value;
        let email = e.state.email.value;
        const newUser = { firstName, lastName, email } 
        console.log("Welcome", newUser);
        e.state.firstName.value = ("");
        e.state.lastName.value = ("");
        e.state.email.value = ("");
    }

    const nameValidator = (value) => {
        if (value.length < 3){
            return "Must have at least 3 Characters!";
        } else {return null;}
    }

    const emailValidator = (value) => {
        console.log(value.length);
        if ( value.length < 6){
            return "Email must have at least 6 characters";
        } else { return null; }
    }

    const validators = {
        firstName: nameValidator,
        lastName: nameValidator,
        email: emailValidator
    }

    return(
        <div>
            {/* {JSON.stringify(state)} */}
            <form>
                <label>
                {state.firstName.error !== null && ( <p className="error">{state.firstName.error}</p>)}
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                </label><br/>
                <label>
                {state.lastName.error !== null && ( <p className="error">{state.lastName.error}</p>)}
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={ state.lastName.value }
                        onChange={handleChange}
                    />
                </label><br/>
                <label>
                {state.email.error !== null && ( <p className="error">{state.email.error}</p>)}
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={ state.email.value }
                        onChange={ handleChange }
                    />
                </label><br/>
                <input type="submit" value="Create User"/>
            </form>
        </div>
    );

}