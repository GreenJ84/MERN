import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products/all')
            .then(res => {setProduct(res.data.products); setLoaded(true);})
            .catch(err => console.log(err))
    }, [loaded]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }
    return (
        <div>
            <ProductForm />
            <hr/>
            {loaded && <ProductList products={product} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;