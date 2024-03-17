import React from 'react';
import { NavLink, } from 'react-router-dom';

const products = ['cars', 'books', 'newspapers']

const Products = () => {
    const list = products.map(product => (
        <li key={product}>
            <NavLink to={`/product/${product}`}>{product}</NavLink>
        </li>
    ))
    return (

        <>
            <div>Lista produktów</div>
            <ul>{list}</ul>
        </>

    );
}

export default Products;