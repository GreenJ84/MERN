import React, { useState } from 'react';


const ProductForm = (props) => {
    const { title1, price1, description1, onSubmit} = props;
    const [title, setTitle] = useState(title1);
    const [price, setPrice] = useState(price1);
    const [description, setDescription] = useState(description1);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmit({title, price, description})
        
        setTitle('');
        setPrice(0);
        setDescription('');
        

    }

    return (<div>
        <form onSubmit={ onSubmitHandler 
        }>
        <p>
            <label>Product Title: </label><br/>
            <input type='text' onChange={e => setTitle(e.target.value)} value={title} />
        </p>
        <p>
            <label>Price: </label><br/>
            <input type='number' onChange={e => setPrice(e.target.value)} value={price} />
        </p>
        <p>
            <label>Description: </label><br/>
            <input type='text' onChange={(e) => setDescription(e.target.value)} value={description} />
        </p>
            <input type='submit' value='Submit' />
        </form>
        </div>
    )
}
export default ProductForm;