import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams()
    return (
        <>
            <div>
                <br />
                <h3>Nazwa produktu:</h3> {id}
            </div>
            <br />
            Powrót do strony <NavLink to='/products'>produktów</NavLink>
        </>
    );
}


export default ProductPage;