import React from 'react';
import { Route, Routes } from 'react-router-dom';
const MainFooter = props => {
    console.log(props);
    return (
        <div>footer</div>
    )
}


const Footer = () => {
    return (
        <div>
            <h2>stopka</h2>
            <Routes>

                <Route path='/' element={<MainFooter />} />
            </Routes>
        </div>
    );
}

export default Footer;