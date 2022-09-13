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

    const createProduct = thisProduct => {
        axios.post('http://localhost:8000/api/products/new', thisProduct)
            .then(res => setProduct([...product, res.data.newProduct]))
            .catch(err => console.log("Errors creating product", err))
    }
    return (
        <div>
            <ProductForm onSubmit={createProduct} title1='' price1='' description1=''/>
            <hr/>
            {loaded && <ProductList products={product} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;