import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';


const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const nav = useNavigate();
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/products/'+ id)
        .then(res => setProduct(res.data.product))
        .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <Link to='/'>Home</Link>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/update/"+id}>
                Edit
            </Link>
            <DeleteButton productId={ id } successCallback={()=>nav('/')}/>
        </div>
    )
}
export default Detail;