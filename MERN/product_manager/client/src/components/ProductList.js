import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { removeFromDom } = props;
    
    console.log(props.products);
    return (
        <div>
            <h1>All Products: </h1>
            {props.products.map( (product, idx) => { 
                return <p key={idx}> 
                    <Link to={"/product/"+product._id}>
                        {product.title}
                    </Link> 
                    |
                    <Link to={"/product/update/"+product._id}>
                        Edit
                    </Link>
                    |
                    <DeleteButton productId={ product._id} successCallback={()=>removeFromDom(product._id)}/>
                </p>
            })}
        </div>
    )
};
export default ProductList;