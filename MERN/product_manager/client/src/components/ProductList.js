import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = (props) => {
    const nav = useNavigate();
    
    return (
        <div>
            <h1>All Products: </h1>
            {props.products.map( (product, idx) => 
                <p onClick={e => {e.preventDefault(); nav(`/product/${product._id}`); }} key={idx}>{product.title} </p>
            )}
        </div>
    )
};
export default ProductList;