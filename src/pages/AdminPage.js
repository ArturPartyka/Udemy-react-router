import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const permision = true
// const AdminPanel = () => <div>Panel Admina- Masz uprawnienai</div>
// const LoginPanel = () => <div>panel logowania</div>
const Admin = () => {
    return (
        <>
            <h2>Panel Admina</h2>
            {permision ? <Navigate to='/login' /> : <div>masz uprawniania</div>}
        </>
        // <Routes>
        //     <Navigate to={}
        //     <Route path='/' element={<LoginPanel />} />
        //     <Route path='/' element={
        //         permision ?
        //             (< AdminPanel />) : (<Navigate replace to='/login' />)
        //     } />
        // </Routes>
    );
}

export default Admin;
<div>
    Admin
</div>