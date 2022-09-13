import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
    
const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const nav = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ id)
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            })
    }, []);

    const updateProduct = e => {
            axios.put('http://localhost:8000/api/products/update/' + id, product)
            .then(res => console.log(res))
            .catch(err => console.error(err));
        }
    
    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>Update a Person</h1>
            {loaded && (
            <ProductForm
            onSubmit={updateProduct}
            title1={product.title}
            price1={product.price} 
            description1={product.description}
            />)}
            <DeleteButton productId={ id } successCallback={()=>nav('/')}/>

        </div>
    )
}
    
export default Update;