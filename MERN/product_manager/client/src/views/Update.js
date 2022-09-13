import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ id)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
    }, []);
    console.log(title, price, description);
    const updateProduct = e => {
        e.preventDefault();
            axios.put('http://localhost:8000/api/products/update/' + id, {
            title,
            price,
            description})
            .then(res => console.log(res))
            .catch(err => console.error(err));
        }
    
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={ updateProduct }>
                <p>
                    <label>Product Title: </label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price: </label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description: </label><br />
                    <input type="text" 
                    name="description" 
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;