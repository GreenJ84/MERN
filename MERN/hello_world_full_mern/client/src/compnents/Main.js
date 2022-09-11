import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
    const [message, setMessage] =useState("Loading...")
    const request = 'http://localhost:8000/api/hello_world/';

        useEffect(() => {
            axios.get(request, {mode: 'cors'})
            .then(res => {console.log(res); setMessage(res.message);}, []);
        })
        return (
            <div>
                <h2> Message from the server: { message }</h2>
            </div>
        )
}
export default Main;