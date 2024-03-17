import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage.js"
import ProductsPage from '../pages/ProductsPage.js';
import ContactPage from '../pages/ContactPage.js';
import AdminPage from '../pages/AdminPage.js';
import ErrorPage from '../pages/ErrorPage.js';
import LoginPage from '../pages/LoginPage.js';
import ProductPage from '../pages/ProductPage.js';

const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path='/product/:id' element={<ProductPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Page;