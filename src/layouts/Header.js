import React from 'react';
import { Routes, Route } from "react-router-dom"
import '../styles/Header.css'
import img1 from '../images/header1.jpeg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpeg'


const Header1 = () => <img src={img1} alt="miasto1" />
const Header2 = () => <img src={img2} alt="miasto2" />
const Header3 = () => <img src={img3} alt="miasto3" />

const Header = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Header1 />} />
                <Route path='/products' element={<Header2 />} />
                <Route path='/contact' element={<Header3 />} />
                <Route path='/admin' element={<Header3 />} />
                <Route path='*' element={<Header1 />} />
            </Routes>
        </div>
    );
}

export default Header;